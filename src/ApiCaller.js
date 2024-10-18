import axios from 'axios';
import React, { useState } from 'react'
import './ApiCaller.css'

function TestingThing() {

    const [url, setUrl] = useState("");
    const [method, setMethod] = useState("GET");
    const [response, setResponse] = useState("");

    const handleApiCall = async () => {
        try {
          const res = await axios({
            method: method,
            url: url,
          });
          setResponse(JSON.stringify(res.data, null, 2));
        } catch (error) {
          if (axios.isAxiosError(error)) {
            setResponse(
              `Error: ${error.message}\n\n${JSON.stringify(
                error.response?.data,
                null,
                2
              )}`
            );
          } else {
            setResponse(`Error: ${error.message}`);
          }
        }
      };
      
      return (
        <div className="api-caller">
          <h1>API Caller (Axios)</h1>
          <div className="input-group">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter API URL"
              className="url-input"
            />
          </div>
          <div className="input-group">
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              className="method-select"
            >
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="DELETE">DELETE</option>
            </select>
          </div>
          <button onClick={handleApiCall} className="call-button">
            Make API Call
          </button>
          {response && (
            <div className="response">
              <h2>Response:</h2>
              <pre>{response}</pre>
            </div>
          )}
        </div>
      );
}

export default TestingThing