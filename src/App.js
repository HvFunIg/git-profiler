import React from "react";
import './css/main.css';
import GitHubUser from "./components/GitHubUser";

function App() {
  return (
    <div className="main">
        <GitHubUser login="hvfunig"/>
    </div>
  );
}

export default App;
