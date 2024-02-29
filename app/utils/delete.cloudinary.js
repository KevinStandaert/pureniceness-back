import cloudinary from '../helpers/cloudinary.connexion.js';

export default async function deleteCloudinaryFile(fileId) {
  try {
    const result = await cloudinary.uploader.destroy(fileId);
    if (result.result !== 'ok') {
      throw new Error('Erreur lors de la suppression du fichier');
    }
    return true;
  } catch (error) {
    console.error('Erreur lors de la suppression du fichier:', error);
    return false;
  }
}
