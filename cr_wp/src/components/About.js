import React from 'react';
import { getCV } from './../helpers/getCV';

import photo from './../assets/photo.jpeg';

const About = () =>{

	const handleDownload = ( e ) =>{
		e.preventDefault();
		getCV();
	}

	return(
		<div className="row mt-3 mb-3">
			<div className="col-sm-9 mr-auto ml-auto">
			<div className="card">
				<div className="row no-gutters">
					<div className="col-md-3">
						<img src={photo} className="card-img rounded-circle" alt="No se pudo cargar la foto"/>
					</div>
					<div className="col-md-8">	
						<div className="card-body">
							<h5 className="card-title">
								Hola, me llamo Hugo.
							</h5>
							<p className="card-text">
								Soy un estudiante de ingenier&iacute;a en sistemas computacionales, actualmente me 
								encuentro cursando el s&eacute;ptimo semestre, tengo 23 a&ntilde;os y antes de comenzar &eacute;sta
								carrera estudie por 2 a&ntilde;os ingenieria c&iacute;vil, el tiempo suficiente para darme 
								cuenta que no era lo que realmente quer&iacute;a estudiar.		
							</p>
							<button
								onClick={ handleDownload }
								className="btn btn-success"
							>
								Descargar CV
							</button>
						</div>
					</div>
				</div>
			</div>	
			</div>
		</div>
	);
}

export default About;
