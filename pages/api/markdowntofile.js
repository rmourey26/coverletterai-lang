import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch';
import MarkdownToTxt from 'markdown-to-txt';
import { saveAs } from 'file-saver';

const MarkdownToFile = () => {
  const [markdown, setMarkdown] = useState('');

  const handleClick = async () => {
    const res = await fetch("/api/chat");
    const data = await res.json();
    const converter = new MarkdownToTxt();
    const text = converter.parse(data.markdown);
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'file.txt');
  };

  return (
    <div>
      <button onClick={handleClick}>Download</button>
    </div>
  );
};

export default MarkdownToFile;
