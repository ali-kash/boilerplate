import React from 'react';
import './myTest.styles.scss';

class Test extends React.Component {
	render() {
		return (
			<>
				<h1>this is a test</h1>
				<img
					src={require('../images/logo-type.png')}
					alt=''
					width='340'
					height='75'
				/>
				<div className='home-img'></div>
			</>
		);
	}
}

export default Test;
