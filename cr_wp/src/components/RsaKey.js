import React, { useState } from 'react';
import { getKey } from './../helpers/getKey';

const RsaKey = () =>{

	const [ key, setKey ] = useState(''); 

	const handleSubmit = ( e ) =>{
		e.preventDefault();
		getKey()
			.then( key => setKey( key ));
	} 

	return(
		<div className="row mb-3">
			<div className="col-sm-9 mr-auto ml-auto">	
				<div className="card">	
					<div className="card-header">
						Mi llave RSA publica.
					</div>
					<div className="card-body">
						<form onSubmit={ handleSubmit }>
							<div className="form-group">
								<label htmlFor="key">
									Mi llave
								</label>
								<input 
									className="form-control"
									type="text"
									name="key"
									defaultValue={ key }
								/>
							</div>

							<div className="form-group">
								<button 
									type="submit"
									className="btn btn-primary"
								>
									Obtener
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default RsaKey;
