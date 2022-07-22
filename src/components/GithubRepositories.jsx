import axios from 'axios';
import React, { useEffect, useState } from 'react';
import GithubCard from './GithubCard';
const GithubRepositories = () => {

        const [searchInputText,setSearchInputText]=useState("");
        const [searchText,setSearchText]=useState("React");
        const [perPage,setPerPage]=useState(5);
        const [page,setPage]=useState(1);
        const [sort, setSort]=useState("desc")
        const [data,setData]=useState([]);
        
        const searchButton=()=>{
            // console.log(searchInputText)
            setSearchText(searchInputText);

        }

       useEffect(() => {
        fetchData();
       }, [searchText,perPage,page,sort]);
        const fetchData=()=>{
            
            let url="https://api.github.com/search/repositories?q="+searchText+"&per_page="+perPage+"&page="+page+"&sort=stars&order="+sort;
            // console.log(searchText)
            axios.get(url)
            .then((res)=>{setData(res.data.items)})
            .catch((error)=>console.log(error));
        }       
        
        const handleChange=(event)=>{
            setPerPage(event.target.value)
        }

        // console.log(data);
    return ( <div>

        <div className='search-container'>
            <input type="text" value={searchInputText} onChange={(event)=>setSearchInputText(event.target.value)}/>
            <button onClick={searchButton}>Search</button>
            <div className='per-page'>
            <span>Per-Page</span>
                <select onChange={handleChange}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                </select>
            </div>
            
        </div>

        <div className='github-cards'>
            {data.map((el)=><GithubCard repo={el} key={el.id}/>)}
        </div>

        <div className='page-buttons'>
            <button disabled={page===1} onClick={()=>setPage(prevState=>prevState-1)}>Prev</button>
            <button>{page}</button>
            <button onClick={()=>setPage(prevState=>prevState+1)}>Next</button>
        </div>
        <div>
            <span style={{margin:"10px"}}>Sort</span>
            <button onClick={()=>setSort("asc")}>Asc</button>
            <button onClick={()=>setSort("desc")}>Desc</button>
        </div>

    </div>);
}
 
export default GithubRepositories;