import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/Home.page';
// import PortfolioPage from './pages/Portfolio.page';
// import ResumePage from './pages/Resume.page';
// import ContactPage from './pages/Contact.page';

import './styles.scss';

function App() {
	return (
		<>
			<h1>this is another test!!!</h1>
			<Router>
				<Switch>
					<Route path='/' exact component={HomePage} />
					{/* <Route path='/portfolio' component={PortfolioPage} />
						<Route path='/resume' component={ResumePage} />
						<Route path='/contact' component={ContactPage} /> */}
				</Switch>
			</Router>
		</>
	);
}

export default App;
