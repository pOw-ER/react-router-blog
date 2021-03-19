import Header from "./Header";
import blogData from './BlogData.json'
import { Link } from 'react-router-dom'

const BlogDetails = (props) => {
  console.log(props);
  let newBlog = blogData.filter(blog => {
    return blog.id.toString() === props.match.params.id.toString()
  })
  return (
    <div>
      <Header />
      <section id="detailsSection">
        <div><Link to="/blog">Back</Link></div>
        <h1>{newBlog[0].title}</h1>
        <div id="img-div"><img src={newBlog[0].img_url} alt="" /></div>
        <h2>{newBlog[0].description}</h2>
        <div id="author-div">
          <p>by {newBlog[0].author}</p>
          <p>{newBlog[0].published_date}</p>
        </div>
      </section>
    </div>


  );
}

export default BlogDetails;
