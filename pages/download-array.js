// pages/download-array.js
import { useState } from 'react';
import axios from 'axios';
import styles from '../styles/Home.module.css'

const DownloadArray = () => {
  const [userInput, setUserInput] = useState("");
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);
const [dmessages, setDmessages] = useState([
    {role: "assistant", content: "Hi, there! Simply type the job title, job description, and a few details about your experience and I'll respond with your cover letter!"}
    ]);
  const getGPTResponse = async () => {
    setLoading(true);
    const userInput = 'Business analyst experienced in Jira and NoSQL databases.';
    const context = [...dmessages, { role: "user", content: userInput }];
    setDmessages(context);
    
const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages: context}),
    });
    const data = await response.json();
    setDmessages((prevdMessages) => [...prevdMessages, { role: "assistant", content: data.result.content }]);
    const results = dmessages.map((dmessage) => dmessage.content.trim())
    setContent(results)
    console.log(([results]));
    setLoading(false);
  };

  const downloadTextFile = () => {
    const data = content.join('\n');
    const blob = new Blob([data], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'api-response-data.txt';
    link.click();
    document.body.appendChild(link);
    link.click();

    setTimeout(() => {
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    }, 100);
  };

  return (
    <div className={styles.btn}>
      <button onClick={getGPTResponse} disabled={loading}>
        {loading ? 'Loading...' : 'Get API Response Data'}
      </button>
      {content.length > 0 && (
        <div>
          <button onClick={downloadTextFile}>Download as Text File</button>
          <h2>Preview:</h2>
          <ul>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DownloadArray;
