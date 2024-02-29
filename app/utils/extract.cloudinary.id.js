export default function extractCloudinaryFileId(url) {
  const match = url.match(/\/v\d+\/(.+)\..+$/);
  return match ? match[1] : null;
}
