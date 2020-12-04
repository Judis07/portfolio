import { Switch, Route, BrowserRouter, HashRouter } from 'react-router-dom';
import Home from './pages/Home/home';
import Contact from './pages/Contact/contact';

function App() {
  return (
    <HashRouter>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </HashRouter>
  );
}

export default App;
