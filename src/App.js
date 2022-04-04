import React, {useEffect, useState} from "react";
import './css/main.css';
import GitHubUser from "./components/GitHubUser";
import SearchForm from "./components/SearchForm";

function App() {
    const [login,setLogin] = useState("hvfunig")

  return (
    <div className="main">

        <SearchForm value={login} onSearch={setLogin}/>
        <GitHubUser login={login}/>
    </div>
  );
}

export default App;
