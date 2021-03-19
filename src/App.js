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
        <Route path="/blog" exact>
          <BlogList />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/blog/:id" render={(props) => <BlogDetails {...props} />} exact />
      </Switch>
    </div>
  );
}

export default App;
