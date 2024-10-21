import React from "react";
// import FileViewerComponent from "./CustomFileViewer"; // Ensure the correct path
import TestingThing from "./ApiCaller";

const App = () => {
  // const pdfFilePath = "TaskForYou.pdf"; // Update with your actual PDF file path
  // const docxFilePath = "demo.docx"; // Update with your actual DOCX file path

  const ApiCaller = <TestingThing />;

  // const documentViewer = (
  //   <>
  //     <h1>Document Viewer</h1>
  //     <div style={{ display: "flex", justifyContent: "space-around" }}>
  //       <div style={{ flex: 1, margin: "10px" }}>
  //         <h2>PDF Viewer</h2>
  //         <FileViewerComponent fileType="pdf" filePath={pdfFilePath} />
  //       </div>
  //       <div style={{ flex: 1, margin: "10px" }}>
  //         <h2>DOCX Viewer</h2>
  //         <FileViewerComponent fileType="docx" filePath={docxFilePath} />
  //       </div>
  //     </div>
  //   </>
  // );

  return <div>{ApiCaller}</div>;
};

export default App;
