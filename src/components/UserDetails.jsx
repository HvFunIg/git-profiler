import React from "react";
import UserRepositories from "./UserRepositories";

function UserDetails({data}) {
    return (
        <>
            <div className="user-content">
                <img src={data.avatar_url}
                     alt={data.login}
                     className="user-img"
                />
                <div className="user-data">
                    <h1>{data.login}</h1>
                    {data.name && <p>{data.name}</p>}
                    {data.location && <p>{data.location}</p>}
                </div>
            </div>
            <UserRepositories login={data.login} onSelect={repoName => console.log(`${repoName} selected`)}/>

        </>
    )
}

export default UserDetails;
