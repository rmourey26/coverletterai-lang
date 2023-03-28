// lib/markdownToNotionBlocks.js
const markdownToNotionBlocks = (markdown) => {
  const lines = markdown.split('\n');
  const blocks = lines.map((line) => {
    if (line.startsWith('# ')) {
      return {
        object: 'block',
        type: 'heading_1',
        heading_1: {
          text: [{ type: 'text', text: { content: line.slice(2).trim() } }],
        },
      };
    }
    // Add more markdown parsing rules as needed
    return {
      object: 'block',
      type: 'paragraph',
      paragraph: {
        text: [{ type: 'text', text: { content: line.trim() } }],
      },
    };
  });

  return blocks;
};

export default markdownToNotionBlocks;
