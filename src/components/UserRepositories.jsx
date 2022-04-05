/** This component is for fetching requests for a list of repositories of current user*/
import React, {useEffect} from "react";
import Fetch from "./Fetch";
import RepoMenu from "./RepoMenu";


function UserRepositories({
  login,
  selectedRepo,
  onSelect = f=>f
}) {
    return (
        <Fetch uri={`https://api.github.com/users/${login}/repos`}
               renderSuccess={({data}) =>(
                   <RepoMenu repositories={data}
                             login={login}
                   />
               )
               }
               renderError={ error => <p> Something goes wrong... {error.message}</p>}
        />
    )
}

export default UserRepositories;
