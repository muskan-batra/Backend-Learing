import React from 'react';
import FileViewer from 'react-file-viewer';

export const FileViewerComponent = ({ fileType, filePath }) => {
  const handleError = (e) => {
      console.log(e, 'Error in file viewer');
  };

  // Debugging logs
  console.log('File Type:', fileType);
  console.log('File Path:', filePath);

  return (
      <div>
          <FileViewer
              fileType={fileType} // Specify the type: 'pdf' or 'docx'
              filePath={filePath} // URL or path to the file
              onError={handleError} // Handle errors
          />
      </div>
  );
};
export default FileViewerComponent;

