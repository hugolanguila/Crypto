import React, {useState} from 'react';

import { verify, getKey } from './../../../helpers/vigenere';

const FormKey = ( { setKey } ) => {

	const [ key, setState ] = useState( '' );
	const [ vigAuto, setVigAuto ] = useState( false );  
	const [ attr, setAttr ] = useState('');

	const handleChange = (e) =>{
		e.preventDefault();
		let name = e.target.name;
		let value = e.target.value;
		
		if ( name === 'key' ){
			setKey( value );
			setState( value );
		}
	}

	const handleVerify= async (e) => {
		e.preventDefault();
		let  ok = await verify( key );
		if( ok ){
			setAttr('is-valid');
		}else{
			setAttr('is-invalid');
		}
	}
	
	const handleGetKey = async ( e ) =>{
		e.preventDefault();
		if( !vigAuto ){
			let key = await getKey();
			setKey( key );
			setState( key );
			setVigAuto( true );
		}else{
			setVigAuto( false );
		}
	}

	return (
		<form>
			<div className="form-row mb-3">
				<div className="col-2">
					<label className="my-1" htmlFor="key">Key</label> 
				</div>
				<div className="col">
					<input 
						type="text"
						id="key"
						name="key" 
						value={key} 
						onChange={handleChange}
						className={`form-control ${attr}`}
					/>
				</div>
			</div>
		
			<div className="form-row mb-3">
				<div className="col-1">
					<input
						type="checkbox"
						id="vigAuto"
						name="vigAuto"
						checked={vigAuto}
						onChange={ handleGetKey }
					/>
				</div>
				<div className="col">
						<label 
							htmlFor="vigAuto" 
							className="ml-1 pb-1"
						>Generar automaticamente</label>
				</div>
			</div>

			<div className="form-row mb-3">
					<div className="col">
						<button 
							onClick={handleVerify}
							className="btn btn-primary btn-block" 
						>Verificar</button>
					</div>
			</div>
		</form>
	);
}

export default FormKey;
