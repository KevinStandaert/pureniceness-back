import drive from '../helpers/google.connexion.js';

export default async function deleteFile(fileId) {
  try {
    const response = await drive.files.delete({
      fileId,
    });

    if (response.status === 204) {
      return true;
    }
    return false;
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la suppression du fichier:', error);
    return false;
  }
}
