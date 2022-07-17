import axios from 'axios';
import React, { useEffect, useState } from 'react';
const GithubRepositories = () => {

        const [searchInputText,setSearchInputText]=useState("");
        const [searchText,setSearchText]=useState("React");
        const [data,setData]=useState([]);
        
        const searchButton=()=>{
            setSearchText(searchInputText);

        }

       useEffect(() => {
        fetchData();
       }, []);
        const fetchData=()=>{
            axios.get("https://api.github.com/search/repositories?q="+searchText)
            .then((res)=>{setData(res.data.items)})
            .catch((error)=>console.log(error));
        }        

        console.log(data);
    return ( <div>

        <div>
            <input type="text" value={searchInputText} onChange={(event)=>setSearchInputText(event.target.value)}/>
            <button onClick={searchButton}>Search</button>
        </div>

    </div>);
}
 
export default GithubRepositories;