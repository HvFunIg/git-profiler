/** This is for fetching some requests to see the repo's Readme file.
 * At first we need to get link to Readme from API,
 * and then download the Readme's content*/

import React, {
    useState,
    useEffect,
    useCallback
} from "react";
import ReactMarkdown from "react-markdown"

function RepositoryReadme({repo,login}) {
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState();
    const [markdown,setMarkdown] = useState("");

    //useCallback to memorize function after initial rendering
    const loadReadme = useCallback(async (login, repo) => {
        setLoading(true);

        const uri = `https://api.github.com/repos/${login}/${repo}/readme`;
        const {download_url} = await fetch(uri).then(res => res.json());

        const markdown = await fetch(download_url).then(res => res.text());
        setMarkdown(markdown);
        setLoading(false);
    },[]);

    useEffect(()=>{
        if(!repo || !login) return; // if we dont have login or repo we cant see the Readme
        loadReadme(login,repo).catch(setError);
    },[repo])   //to download another Readme on repo changes

    if(error)
        return <pre> {JSON.stringify(error,null,2)}</pre>
    if (loading)
        return <p>Loading...</p>
    return <ReactMarkdown children={markdown} className="user-markdown"/>
}
export default RepositoryReadme;