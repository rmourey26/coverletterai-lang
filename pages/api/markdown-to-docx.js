// pages/api/markdown-to-docx.js
import { Document, Packer, Paragraph } from "docx";
import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    // Fetch markdown content from an API
    const response = await fetch("/api/chat");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const markdownContent = await response.text();

    // Create a new Word document
    const doc = new Document();

    // Split the markdown content into paragraphs
    const paragraphs = markdownContent.split("\n\n");

    // Add each paragraph to the Word document
    paragraphs.forEach((paragraph) => {
      doc.addSection({
        children: [
          new Paragraph({
            text: paragraph.replace(/\n/g, " "), // Replace line breaks with spaces
          }),
        ],
      });
    });

    // Convert the Word document to a binary buffer
    const buffer = await Packer.toBuffer(doc);

    // Set the response headers
    res.setHeader("Content-Disposition", "attachment; filename=markdown-content.docx");
    res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.wordprocessingml.document");

    // Send the buffer as the response
    res.status(200).send(buffer);
    console.log("Successful conversion to docx")
  } catch (error) {
    console.error("Error fetching markdown content:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
