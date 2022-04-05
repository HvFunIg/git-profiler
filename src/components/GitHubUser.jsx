import React from "react";
import {useFetch} from "../js/useFetch";
import Fetch from "./Fetch";
import UserDetails from "./UserDetails";


function GitHubUser({login}) {
    return (
        <Fetch uri={`https://api.github.com/users/${login}`}
               renderSuccess={UserDetails}
               renderError={ error => <p> Something goes wrong... {error.message}</p>}
        />
        )
}

export default GitHubUser;
