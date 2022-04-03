import React, {useEffect, useState} from "react";

// getting info from localStorage
const loadJSON = key=>
    key && JSON.parse(localStorage.getItem(key));

// setting info
const saveJSON = (key,data) =>{
    console.log(key, data)
    localStorage.setItem(key, JSON.stringify(data))

}

function GitHubUser({login}) {
    const [data,setData] = useState(loadJSON(`user:${login}`));
    const [error,setError] = useState();
    const [loading,setLoading] = useState();

    useEffect(()=> {
        //for data saving on changes
        if (!data) return;
        if (data.login === login) return;

        const {name, avatar_url, location} = data; //destructuring
        saveJSON(`user:${login}`, {
            name,
            login,
            avatar_url,
            location
        })
    },[data]);

    useEffect(()=>{
        // for data requests
        if (!login) return;
        if (data?.login === login) return; //dont go search if this login has already exists
        setLoading(true);
        fetch(`https://api.github.com/users/${login}`)
            .then(response => response.json())
            .then(setData)
            .then(setLoading(false))
            .catch(setError);
    },[login]);

    if (loading) return
        <h1> Loading ...</h1>
    if (error)
        return <pre> {JSON.stringify(error,null,2)}</pre>
    if (!data)
        return null;
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
