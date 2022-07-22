const GithubCard=({repo})=>{
    let topics=repo.topics;
    // console.log(repo)
    return(
        <div className="card">
            <a href={repo.html_url} className="name">{repo.full_name}</a>
            <div className="description">{repo.description}</div>
            <div className="topics">
            {
                topics.map((ele)=>(<div className="topic-name" key={ele}>{ele}</div>)
                )
            }
            </div>
            
        </div>
    )   

}

export default GithubCard;