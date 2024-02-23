import drive from '../helpers/google.connexion.js';

async function getAudioContent(fileId) {
  try {
    const response = await drive.files.get({
      fileId,
      alt: 'media',
    }, { responseType: 'stream' });

    const contentType = response.headers['content-type'];
    if (contentType !== 'audio/mpeg') {
      console.error('Le contenu récupéré n\'est pas un fichier audio MPEG.');
      return false;
    }

    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération du fichier audio:', error);
    return false;
  }
}

export default getAudioContent;
