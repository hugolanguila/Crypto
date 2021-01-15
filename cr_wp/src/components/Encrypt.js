import React, { useState } from 'react';
import { useFetch } from './../hooks/useFetch';

const Encrypt = () =>{
	
	const [ text, setText ] = useState('');
	const [ formData, setFormData ] = useState({});
	const { data, loading, err } = useFetch('/encrypt', formData );

	const handleChange = (e) =>{
		e.preventDefault();
		setText( e.target.value );	
	}

	const handleSubmit = ( e ) =>{
		e.preventDefault();
		if( text.length > 1 ){
			const body = new FormData();
			body.append( 'text', text );
			setFormData({
				method: 'POST',
				body
			});	
		}
	} 

	return(
		<div className="row mb-3">
			<div className="col-sm-9 mr-auto ml-auto">	
				<div className="card">	
					<div className="card-header">
						Cifrar texto con mi llave publica.
					</div>
					<div className="card-body">
						<form onSubmit={ handleSubmit } >
							<div className="form-group">
								<label htmlFor="text"> Texto a cifrar </label>	
								<textarea
									className="form-control" 
									name="text" 
									value={ text }
									onChange={handleChange}
								>
								</textarea>
							</div>
							<div className="form-group">
								<input
									className="btn btn-primary"
									type="submit"
									value="Cifrar"
								/>
							</div>
						</form>

						{
							data &&
							<blockquote className="blockquote mt-2 mb-1">
								<h4 className="">Texto Cifrado</h4>
								<p className="card-text">
									{data?.encText}
								</p>
							</blockquote>
						}

					</div>
				</div>
			</div> 
		</div>
	);
}

export default Encrypt;
