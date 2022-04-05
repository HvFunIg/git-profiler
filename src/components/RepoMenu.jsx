import React, {useEffect} from "react";
import Fetch from "./Fetch";
import UserDetails from "./UserDetails";
import {useIterator} from "../js/useIterator";
import RepositoryReadme from "./loadReadme";


function RepoMenu({repositories, login}) {
    const [{name},previous,next] = useIterator(repositories);
    // &lt; = "<" and &gt; = ">"
    return (
        <>
            <div className="repo-menu">
                <p>Here is a list of repositories: </p>

                <button onClick={previous}>&lt;</button>
                <p>{name}</p>
                <button onClick={next}>&gt;</button>
            </div>
            <RepositoryReadme login={login} repo={name} />
        </>
    )
}

export default RepoMenu;
