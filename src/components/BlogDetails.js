import Header from "./Header";
import blogData from './BlogData.json'

const BlogDetails = (props) => {
  console.log(props);
  let newBlog = blogData.filter(blog => {
    return blog.id.toString() === "3"
  })
  return (
    <div>
      <Header />
      <section>
        <h1>{newBlog[0].title}</h1>
      </section>
    </div>


  );
}

export default BlogDetails;
