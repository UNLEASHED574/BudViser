import React, { useRef, useState } from "react";

const Suggestion = () => {
  const fileInputRef = useRef();
  const [selectedFile, setSelectedFile] = useState(null);
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) =>
  {
    const file = event.target.files[0];
    if (file){
      selectedFile(file);
      console.log("Selected file", file.name);
    }
  }
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <header style={{ marginBottom: "30px" }}>
        <h1>Upload Your DARS Report</h1>
        <p>Upload your Degree Audit Report to get tailored suggestions.</p>
      </header>

      <section style={{ marginBottom: "30px" }}>
        <button
          onClick={handleUploadClick}
          style={{
            padding: "10px 20px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Select File
        </button>
        <input
          type="file"
          ref={fileInputRef} // Reference to hidden input
          style={{ display: "none" }} // Hide the input
          onChange={handleFileChange} // Handle file selection
        />

        {selectedFile && (
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <p>
              <strong>Selected File:</strong> {selectedFile.name}
            </p>
            <p>
              <strong>File Size:</strong> {(selectedFile.size / 1024).toFixed(2)} KB
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Suggestion;
