import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/home';
import Contact from './pages/Contact/contact';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/contact" component={Contact}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
