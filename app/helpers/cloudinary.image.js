// Require the cloudinary library
import { v2 as cloudinary } from 'cloudinary';
//! perte du .env ici : mettre en dur cloud_name, api_key et api_secret
// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true,
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// Uploads an image file
const uploadImage = async (imagePath) => {
// Use the uploaded file's name as the asset's public ID and
  // allow overwriting the asset with new versions
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
    resource_type: 'auto',
  };

  try {
    // Upload the image
    const result = await cloudinary.uploader.upload(imagePath, options);
    console.log(result);
    return result.public_id;
  } catch (error) {
    return console.error(error);
  }
};

const createImageTag = (publicId) => {
  // Create an image tag with transformations applied to the src URL
  const imageTag = cloudinary.image(publicId);
  return imageTag;
};

// Main function
(async () => {
  // Set the image to upload
  const imagePath = '../../images/aerith.png';
  // const imagePath = 'https://cloudinary-devs.github.io/cld-docs-assets/assets/images/happy_people.jpg';

  // Upload the image
  const publicId = await uploadImage(imagePath);

  // Get the colors in the image
  //   const colors = await getAssetInfo(publicId);

  // Create an image tag
  const imageTag = await createImageTag(publicId);

  // Log the image tag to the console
  // ex: <img src='https://res.cloudinary.com/dkd04wkqq/image/upload/aerith?_a=BAMCcSZS0' />
  console.log(imageTag);
})();
