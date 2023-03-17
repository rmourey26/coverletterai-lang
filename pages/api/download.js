export default function createFileFromText (text, fileName, mimeType='text/plain') {
  const data = new Blob([text], {type: mimeType});
  const fileUrl = URL.createObjectURL(data);
  return { name: fileName, data, fileUrl };
}