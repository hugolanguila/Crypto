import React from 'react';
import EmailForm from './EmailForm';
import Social from './Social';
const Contact = () =>{
	return (
		<div className="row mb-3">
			<div className="col-sm-9 mr-auto ml-auto">
				<div className="card-deck">
					<EmailForm />
					<Social />
				</div>	
			</div>
		</div>
	);
}

export default Contact;
