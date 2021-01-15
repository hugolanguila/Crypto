import React/*{ useState, useEffect }*/ from 'react';
import { verify, getKey } from './../../../helpers/affine';

const FormKey = ({ affKey, handleAffKey}) => {

	const {a,b,ring} = affKey;

	return (
		<form>
			<div className="form-row mb-3">
				<div className="col-sm-1">
					<label className="my-1 mr-1" htmlFor="a">A</label>
				</div>
				<div className="col">
					<input 
						type="number"
						id="a" 
						name="a"
						value={ a }
						onChange={ handleAffKey }
						className={ `form-control` } 
						/>
				</div>
			</div>
			
			<div className="form-row mb-3">
				<div className="col-sm-1">
					<label className="my-1 mr-2" htmlFor="b">B</label>
				</div>
				<div className="col">
					<input 
						type="number" 
						id="b" 
						name="b"
						value={ b }
						onChange={ handleAffKey }
						className={`form-control`}  
					/>
				</div>
			</div>
			
			<div className="form-row mb-3">
				<div className="col-1">
					<input 
						type="checkbox"
						id="affAuto"
						name="affAuto"
					/>
				</div>
				<div className="col">
					<label 
						className="ml-1" 
						htmlFor="affAuto"
					>
						Generar automaticamente
					</label>
				</div>
			</div>
		
			<div className="form-row mb-3">
				<div className="col">
					<label className="ml-1" htmlFor="ring">Anillo</label>
				</div>
				<div className="col">
					<select 
						className="custom-select" 
						id="ring" 
						name="ring" 
						value={ ring }
						onChange={ handleAffKey }
					>
						<option value="256">256</option>
						<option value="128">128</option>
						<option value="97">97</option>
						<option value="30">30</option>
						<option value="239">239</option>
						<option value="15345">12345</option>
						<option value="99991">99991</option>
						<option value="104729">104729</option>
					</select>
				</div>
			</div>
			
			<div className="form-row mb-3">
				<div className="col">
					<button 
						type="button" 
						className="btn 
						btn-primary btn-block"  
					>Validar llave</button>
				</div>
			</div>
		</form>
	);
}
export default FormKey;
