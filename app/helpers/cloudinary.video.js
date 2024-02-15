// Require the cloudinary library
import { v2 as cloudinary } from 'cloudinary';
// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true,
  cloud_name: 'dkd04wkqq',
  api_key: '375567381239387',
  api_secret: 'RH1o7nVw3fF5OKVSA1icUp-eB_Y',
});

// Uploads a video file
const uploadVideo = async (videoPath) => {
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
    const result = await cloudinary.uploader.upload(videoPath, options);
    console.log(result);
    return result.public_id;
  } catch (error) {
    return console.error(error);
  }
};

const createVideoTag = (publicId) => {
  // Create an video tag
  const videoTag = cloudinary.video(publicId);
  return videoTag;
};

// Main function
(async () => {
  // Set the video to upload
  const videoPath = '../../mp3/1.mp3';
  // const videoPath = 'https://cloudinary-devs.github.io/cld-docs-assets/assets/images/happy_people.mp4';

  // Upload the video
  const publicId = await uploadVideo(videoPath);

  // Create a video tag
  const videoTag = await createVideoTag(publicId);

  // Log the video tag to the console
  // ex: <source src='https://res.cloudinary.com/dkd04wkqq/video/upload/1.webm?_a=BAMCcSZS0' type='video/webm'>
  console.log(videoTag);
})();
