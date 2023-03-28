// pages/create-notion-page.js
import { useState } from 'react';
import axios from 'axios';
import notion from 'notion';
import markdownToNotionBlocks from 'components/markdowntonotionblocks';

const CreateNotionPage = () => {
  const [loading, setLoading] = useState(false);
  const [pageCreated, setPageCreated] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [content, setContent] = useState([]);
const [dmessages, setDmessages] = useState([
    {role: "assistant", content: "Hi, there! Simply type the job title, job description, and a few details about your experience and I'll respond with your cover letter!"}
    ]);

  const createNotionPage = async () => {
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

    const markdownResponse = response.data.choices[0].message;
    const blocks = markdownToNotionBlocks(markdownResponse);
    const databaseId = process.env.NOTION_DATABASE_ID;

    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        title: { title: [{ text: { content: 'ChatGPT Response' } }] },
      },
      children: blocks,
    });

    setLoading(false);
    setPageCreated(true);
  };

  return (
    <div>
      <button onClick={createNotionPage} disabled={loading}>
        {loading ? 'Creating Notion Page...' : 'Create Notion Page from ChatGPT'}
      </button>
      {pageCreated && <p>Notion page created successfully.</p>}
    </div>
  );
};

export default CreateNotionPage;
