import './App.css';
import HomePage from './pages/home-page/HomePage';
import Hackathon from './pages/hackathon/Hackathon';
import InnovationBattle from './pages/ds-innovation-battle/InnovationBattle';
import DigitalArt from './pages/art-competition/DIgitalArt';
import Quiz from './pages/quiz/Quiz';
import GamingDev from './pages/gaming-dev/GamingDev';
import GamingTournament from './pages/gaming-tournament/GamingTournament';
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
					<Route path="/digitalart">
						<DigitalArt />
					</Route>
					<Route path="/ictquiz">
						<Quiz />
					</Route>
					<Route path="/gamingtournament">
						<GamingTournament />
					</Route>
					<Route path="/gamingdevelopment">
						<GamingDev />
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
