export default function createFileFromText (text, fileName, mimeType='text/plain') {
  const data = new Blob([text], {type: mimeType});
  const fileUrl = URL.createObjectURL(data);
  return { name: fileName, data, fileUrl };
}

async function downloadChatGPTMessages(apiKey, messages, fileName, mimeType) {
  try {
    const response = await fetch ("/api/chat", apiKey, messages);
    const text = response.choices[0].text;
    const file = createFileFromText(text, fileName, mimeType);

    // Download file
    const link = document.createElement('a');
    link.href = file.fileUrl;
    link.download = file.name;
    link.click();

    // Cleanup
    URL.revokeObjectURL(file.fileUrl);
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

const fileName = 'chatgpt_messages.txt';
const mimeType = 'text/plain';

downloadChatGPTMessages(apiKey, messages, fileName, mimeType);