import React from 'react';

import About from './components/About';
import Formation from './components/Formation';
import Contact from './components/Contact';
import HobbiesGrid from './components/HobbiesGrid';
import Cryptography from './components/Cryptography';
import RsaKey from './components/RsaKey';
import Encrypt from './components/Encrypt';

const MyApp = () =>{
	return(
		<div className="container">
			<About />
			<Formation />
			<Contact />
			<HobbiesGrid />
			<Cryptography />
			<RsaKey />
			<Encrypt />
		</div>
	);	
}

export default MyApp;
