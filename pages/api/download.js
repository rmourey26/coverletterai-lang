export default async function transformDataToFile(data, fileName, mimeType = 'application/json') {
  const reader = data.getReader();
  const chunks = [];

  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    chunks.push(value);
  }

  const data = new Blob(chunks, { type: mimeType });
  const previewUrl = URL.createObjectURL(data);
  return { name: fileName, data, previewUrl };
}