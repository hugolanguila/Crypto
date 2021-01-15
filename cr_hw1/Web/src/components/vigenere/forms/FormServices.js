import React from 'react';

const FormServices = ( { setFile, handleFetchService } ) =>{
	
	const handleChange = ( e ) =>{
		e.preventDefault();
		if( e.target.name === 'file' ){
			setFile( e.target.files[0] );
		}
	}
	
	const handleClick = ( e ) => {
		e.preventDefault();
		if( e.target.name === 'encFile' ){
			handleFetchService(  'encrypt' );	
		}else if( e.target.name === 'decFile' ){
			handleFetchService(  'decrypt' );	
		}	
	}
	
	return (
		<form>
			<div className="form-row mb-3">
				<div className="col">
					<input  className="pt-2" type="file" name="file" onChange={handleChange}/>
				</div>
				
				<div className="col">
					<button className="btn btn-primary btn-block" name="encFile" onClick={handleClick} >Cifrar archivo</button>
				</div>
				
				<div className="col">
					<button className="btn btn-danger btn-block" name="decFile" onClick={handleClick}>Descifrar archivo</button>
				</div>
			</div>
		</form>
	);
}

export default FormServices;


