import React, {useEffect} from "react";
import Fetch from "./Fetch";
import UserDetails from "./UserDetails";
import {useIterator} from "../js/useIterator";


function RepoMenu({repositories, onSelect = f=>f}) {
    const [{name},previous,next] = useIterator(repositories);
    useEffect(()=>{
        if (!name) return;
        onSelect(name);
    },[name])
    // &lt; = "<" and &gt; = ">"
    return (
        <>
            <p>Here is a list of repositories</p>
            <div className="repo-menu">
                <button onClick={previous}>&lt;</button>
                <p>{name}</p>
                <button onClick={next}>&gt;</button>
            </div>
        </>
    )
}

export default RepoMenu;
