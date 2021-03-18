import Blog from "./Blog";
import Header from "./Header";
import blogData from './BlogData.json'

const BlogList = () => {
  return (
    <div>
      <Header />
      <section id="blog-items">
        {blogData.map(blog =>
          <Blog
            title={blog.title}
            img={blog.img_url}
            key={blog.id}
            id={blog.id}
          />
        )}
      </section>
    </div>


  );
}

export default BlogList;
