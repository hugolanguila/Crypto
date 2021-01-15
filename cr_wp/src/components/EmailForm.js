import React from 'react';
import { useForm } from './../hooks/useForm';
import { sendEmail } from './../helpers/sendEmail';

const EmailForm = () =>{
	const [ values, handleChange, reset ] = useForm({ email: '', message: ''});

	const handleSubmit = (e) =>{
		e.preventDefault();
		let ok = sendEmail( values );
		reset();
		if( ok ) 
			alert('Mensaje enviado exitosamente');
		else
			alert('No se pudo enviar tu mensaje');
	}

	return(	
		<div className="card">
			<div className="card-header">
				Contacto
			</div>

			<div className="card-body">		
				<p className="card-text">
					Si deseas ponerte en contacto conmigo, por favor enviame un correo.
				</p>
				
				
				<form onSubmit={ handleSubmit }>
					<div className="form-group">	
						<input 
							className="form-control" 
							id="email"
							type="email" 
							name="email"
							value={values.email}
							required
							placeholder="Ingresa tu correo"
							onChange={ handleChange }
						/>
					</div>
					<div className="form-group">
						<textarea 
							type="textarea" 
							name="message"
							required
							value={values.message}
							className="form-control"
							placeholder="Tu mensaje"
							onChange={ handleChange }
						/>
					
					</div>
					<input 
						className="btn btn-primary btn-block"
						type="submit"  
						value="Enviar" 
					/>
				</form>
			</div>
		</div>
	);
}

export default EmailForm;
