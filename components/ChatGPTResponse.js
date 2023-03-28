// components/ChatGPTResponse.js
import { useState } from 'react';


const ChatGPTResponse = () => {

  const [userInput, setUserInput] = useState("");
 
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dmessages, setdMessages] = useState([{role: "assistant", content: "Hi, there! Simply type the job title, job description, and a few details about your experience and I'll respond with your cover letter!"}])

  const getChatGPTResponse = async () => {
    setLoading(true);
    setUserInput("Bartender experienced entertaining customers with creative drinks and jokes")
    const context = [...dmessages, { role: "user", content: userInput }];
    setdMessages(context);
    try {
      const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages: context}),
    });
      const data = await response.json();
    setdMessages((prevdMessages) => [...prevdMessages, { role: "assistant", content: data.result.content }]);
      setResponse(result.data.choices[0].messages);
    } catch (error) {
      console.error('Error fetching ChatGPT response:', error);
    } finally {
      setLoading(false);
    }
  };

  const downloadChatGPTResponse = () => {
    const fileName = 'chatgpt_response.txt';
    const responseText = response;
    const blob = new Blob([responseText], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');

    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.style.display = 'none';

    document.body.appendChild(link);
    link.click();

    setTimeout(() => {
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    }, 100);
  };

  return (
    <div>
      <button onClick={getChatGPTResponse} disabled={loading}>
        {loading ? 'Loading...' : 'Get ChatGPT Response'}
      </button>

      {response && (
        <>
          <pre>{response}</pre>
          <button onClick={downloadChatGPTResponse}>Download Response</button>
        </>
      )}
    </div>
  );
};

export default ChatGPTResponse;
