import React from 'react';
import Affine from './components/affine/';
import Vigenere from './components/vigenere/';

const App = () => {
	return (
		<div className="container">
				<div className="row mb-3 mt-2" id="header">
					<h2 className="text-center">HW_01</h2>
				</div>
				<div className="row" id="affine">
					<Affine />
				</div>
				<div className="row" id="vigenere">
					<Vigenere />
				</div>
    	</div>
  );
}

export default App;
