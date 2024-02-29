import multer from 'multer';
import path from 'path';
import fs from 'fs';
import * as metadata from 'music-metadata';
import drive from '../helpers/google.connexion.js';
import cloudinary from '../helpers/cloudinary.connexion.js';

const storage = multer.diskStorage({
  destination(request, file, cb) {
    cb(null, './uploads');
  },
  filename(request, file, cb) {
    cb(
      null,
      `${request.body.name}-${Date.now()}${path.extname(file.originalname)}`,
    );
  },
});

const upload = multer({ storage });

const options = {
  use_filename: true,
  unique_filename: false,
  overwrite: true,
  resource_type: 'image',
};

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

    if (!request.body.url_image) {
      delete request.body.url_image;
    }

    if (!request.body.url_sound) {
      delete request.body.url_sound;
    }

    try {
      const { files } = request;
      const driveFolderId = process.env.DRIVE_ID;

      const uploadPromises = files.map(async (file) => {
        const filePath = file.path;
        const fileStream = fs.createReadStream(filePath);

        if (file.mimetype.startsWith('audio/')) {
          const driveResponse = await drive.files.create({
            requestBody: {
              name: file.filename,
              parents: [driveFolderId],
            },
            media: {
              mimeType: file.mimetype,
              body: fileStream,
            },
          });

          if (driveResponse.status === 200) {
            // if (file.mimetype.startsWith('image/')) {
            //   const fileUrl = `https://drive.google.com/thumbnail?id=${driveResponse.data.id}&sz=w1000`;
            //   request.body.url_image = fileUrl;
            //   request.image = { id: driveResponse.data.id };
            //   const permissionResponse = await drive.permissions.create({
            //     fileId: driveResponse.data.id,
            //     requestBody: {
            //       role: 'reader',
            //       type: 'anyone',
            //     },
            //   });

            //   if (permissionResponse && permissionResponse.status === 200) {
            //     const result = await drive.files.get({
            //       fileId: driveResponse.data.id,
            //       fields: 'webViewLink',
            //     });
            //   } else {
            //     console.error('Erreur lors de la définition des autorisations pour l\'image.');
            //   }
            // } else if (file.mimetype.startsWith('audio/')) {
            const fileUrl = `https://drive.google.com/thumbnail?id=${driveResponse.data.id}`;
            const metadatas = await metadata.parseFile(filePath);
            request.body.duration = Math.ceil(metadatas.format.duration);
            request.body.url_sound = fileUrl;
            request.sound = { id: driveResponse.data.id };
          }
        }

        if (file.mimetype.startsWith('image/')) {
          const result = await cloudinary.uploader.upload(filePath, options);
          if (!result.url) {
            throw new Error('Erreur lors de l\'upload de l\'image');
          }
          request.body.url_image = result.url;
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
