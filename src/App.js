import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/home';
// import Header from './components/Header/header';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
