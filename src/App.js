import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar.component';

import HomePage from './pages/Home.page';
import CardsPage from './pages/Cards.page';
import ContactPage from './pages/Contact.page';

import './styles.scss';

class App extends Component {
	render() {
		return (
			<>
				<NavigationBar />
				<Router>
					<Switch>
						<Route path='/' exact component={HomePage} />
						<Route path='/cards' component={CardsPage} />
						<Route path='/contact' component={ContactPage} />
					</Switch>
				</Router>
			</>
		);
	}
}

export default App;
