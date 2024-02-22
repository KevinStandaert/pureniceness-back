import multer from 'multer';
import path from 'path';
import fs from 'fs';
import * as metadata from 'music-metadata';
import drive from '../helpers/google.connexion.js';

const storage = multer.diskStorage({
  destination(request, file, cb) {
    cb(null, './uploads');
  },
  filename(request, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`,
    );
  },
});

const upload = multer({ storage });

const uploadFile = (request, response, next) => {
  upload.any()(request, response, async (err) => {
    if (err) {
      return response.status(400).json('Erreur lors de la récupération du fichier.');
    }

    if (!request.files || request.files.length === 0) {
      delete request.body.url_image;
      delete request.body.url_sound;
      return next();
    }

    try {
      const { files } = request;
      const folderId = process.env.DRIVE_ID;

      const uploadPromises = files.map(async (file) => {
        const filePath = file.path;
        const fileStream = fs.createReadStream(filePath);

        const driveResponse = await drive.files.create({
          requestBody: {
            name: file.filename,
            parents: [folderId],
          },
          media: {
            mimeType: file.mimetype,
            body: fileStream,
          },
        });

        if (driveResponse.status === 200) {
          const fileUrl = `https://drive.google.com/uc?id=${driveResponse.data.id}`;
          if (file.mimetype.startsWith('image/')) {
            request.body.url_image = fileUrl;
            request.image = { id: driveResponse.data.id };
          } else if (file.mimetype.startsWith('audio/')) {
            const metadatas = await metadata.parseFile(filePath);
            request.body.duration = Math.ceil(metadatas.format.duration);
            request.body.url_sound = fileUrl;
            request.sound = { id: driveResponse.data.id };
          }
        }

        fs.unlinkSync(filePath);
        if (request.body.data && typeof request.body.data === 'string') {
          request.body = JSON.parse(request.body.data);
        }
      });

      await Promise.all(uploadPromises);
      return next();
    } catch (error) {
      return response.status(500).json('Erreur lors de la récupération du fichier');
    }
  });
};

export default uploadFile;
