async function fetchDataAsStream(url, payload, apiKey, signal) {
  const response = await fetch("api/chat", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify(payload),
    signal,
  });

  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  return response.body;
}

export default async function transformStreamToFile(stream, fileName, mimeType = 'application/octet-stream') {
  const reader = stream.getReader();
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