import React, {useEffect, useState} from "react";
import {useFetch} from "../js/useFetch";

// getting info from localStorage
const loadJSON = key=>
    key && JSON.parse(localStorage.getItem(key));

// setting info
const saveJSON = (key,data) =>{
    console.log(key, data)
    localStorage.setItem(key, JSON.stringify(data))
}

function GitHubUser({login}) {
    const {loading,data,error} = useFetch(`https://api.github.com/users/${login}`)
    if (loading) return
        <h1> Loading ...</h1>
    if (error)
        return <pre> {JSON.stringify(error,null,2)}</pre>

    return (
        <div>
            <img src={data.avatar_url}
                 alt={data.login}
                 className="user-img"
            />
            <div>
                <h1>{data.login}</h1>
                {data.name && <p>{data.name}</p>}
                {data.location && <p>{data.location}</p>}
            </div>
        </div>
        )
}

export default GitHubUser;
