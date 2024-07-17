import { Link } from "react-router-dom"
import "./Blogcard.css"


function Blogcard({ id,title,content,author,date,categories}) {
  return (
    <Link  className="Blog-Card" to={`/blog/${id}`}>
     <h2 className="Blog-title">{title}</h2>
     <p className="blog-content-preview">
      {content.substring(0,70)}....
     </p>
     <div className="author-card">
      <img src={author.avatar} alt="author" className="author-avatar"/>
      <span className="author-name">{author.name}</span>
      <span className="blog-date">{date}</span>
     </div>
     {categories.map((category,i)=>{
      return <span key={i} className="category-badge">{category}</span>
     })}
    </Link>
  )
}

export default Blogcard

