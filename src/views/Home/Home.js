import blogs from "./../../data"
import BlogCard from "./../../component/Blogcard/Blogcard"
import "./Home.css"


function Home(){
  return(
    <>
    <div className="blog-container">
    {
      blogs.map((blogObject,i)=>{
         const {
          id,
        title,
        content,
        author,
        date,
        categories,
        price
         }=blogObject
         
         return(
            <BlogCard
            key={i}
            id={id}
            title={title}
            content={content}
            author={author}
            date={date}
            categories={categories}
            price={price}
            />

         )
      })
    }
    </div>
    </>
  )
}

export default Home
