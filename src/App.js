import './App.css';
import Login from './components/Login'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
		<Router>
			<Switch>
				<Route exact path = "/">
					<Login/> 
				</Route>
			</Switch>
			<Switch>
				<Route exact path = "/home">
					<Navbar />
					<Home />
				</Route>
			</Switch>
		</Router>
    </div>
  );
}

export default App;
