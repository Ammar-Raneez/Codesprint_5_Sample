import './App.css';
import HomePage from './pages/home-page/HomePage';
import Hackathon from './pages/hackathon/Hackathon';
import InnovationBattle from './pages/ds-innovation-battle/InnovationBattle';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<div className="app">
			<Router>
				<Switch>
					<Route path="/hackathon">
						<Hackathon />
					</Route>
					<Route path="/innovationbattle">
						<InnovationBattle />
					</Route>
					<Route path="/">
						<HomePage />
					</Route> 
				</Switch>
			</Router>
		</div>
	);
}

export default App;
