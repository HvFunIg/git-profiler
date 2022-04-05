import React from "react";
import UserRepositories from "./UserRepositories";

function UserDetails({data}) {
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
            <UserRepositories login={data.login} onSelect={repoName => console.log(`${repoName} selected`)}/>
        </div>
    )
}

export default UserDetails;
