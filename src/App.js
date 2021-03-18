import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import Contact from './components/Contact';
import BlogList from './components/BlogList';
import BlogDetails from './components/BlogDetails';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/blog">
          <BlogList />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/blog/:id" render={(props) => <BlogDetails {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
