import { Link } from 'react-router-dom'


const Blog = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="Avatar" />
      <div className="container">
        <h4><b>{props.title}</b></h4>
        <button><Link to={`/blog/${props.id}`}>Read More</Link></button>
      </div>
    </div>

  );
}

export default Blog;
