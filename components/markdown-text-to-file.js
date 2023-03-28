export default zfunction markdownToTextFile(markdownContent) {
  // Convert the markdown content to a Blob with UTF-8 encoding
  const fileBlob = new Blob([markdownContent], { type: "text/plain;charset=utf-8" });

  // Create a temporary anchor element to initiate the download
  const downloadAnchor = document.createElement("a");

  // Set the anchor attributes
  downloadAnchor.href = URL.createObjectURL(fileBlob);
  downloadAnchor.download = "markdown-content.txt";
  downloadAnchor.style.display = "none";

  // Add the anchor to the DOM
  document.body.appendChild(downloadAnchor);

  // Trigger the download
  downloadAnchor.click();

  // Remove the anchor from the DOM
  document.body.removeChild(downloadAnchor);

  // Return the URI
  return downloadAnchor.href;
}