export default function extractDriveFileId(url) {
  const regex = /\?id=(.*)/;

  const match = regex.exec(url);
  return match ? match[1] : null;
}
