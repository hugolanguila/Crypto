import React from 'react';
import FormKey from './forms/FormKey';
import FormServices from './forms/FormServices';

import {useForm} from './../../hooks/useForm';
import { fetchFile, verify  } from './../../helpers/affine';

const Affine = () =>{

	const [ affKey, handleAffKey ] = useForm({a:'0',b:'0',ring:'255'});
	const { a, b, ring } = affKey;

	const [ file, setFile ] = useForm({});

	const handleFetchService = async ( modo ) =>{
		if( await verify( a, b, ring ) !== 3){
			window.alert('La llave es incorrecta, intenta con otro valor');
			return ;
		}

		if( typeof file.name === 'string' ){
			fetchFile( a, b, ring, file, modo );
		}else{
			window.alert(`Primero debes seleccionar un archivo para ${modo}`);
		}
	}

	return (
		<>
			<div className="col-3 mt-2 mb-2">
				<div className="card">
					<h5 
						className="card-header text-center bg-dark text-white"
					>	
						Modificar llave
					</h5>
					<div className="card-body">
						<FormKey 
							affKey={affKey} 
							handleAffKey={handleAffKey} 
						/> 
					</div>
				</div>
			</div>

				<div className="col-9 mt-2 mb-2">
					<div className="card">
						<h5 
							className="card-header bg-dark text-white text-center"
						>
							Affine
						</h5>
					<div className="card-body">
						<FormServices 
							setFile={setFile}
							handleFetchService={handleFetchService} 
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default Affine;
