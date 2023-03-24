import React from 'react';
import { saveAs } from 'file-saver';

const DownloadFile = () => {
  const encodedText = 'Your encodedURI component string';

  const handleDownload = () => {
    const decodedText = decodeURIComponent(encodedText);
    const blob = new Blob([decodedText], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'downloaded_file.txt');
  };

  return (
    <div>
      <button onClick={handleDownload}>Download File</button>
    </div>
  );
};

export default DownloadFile;