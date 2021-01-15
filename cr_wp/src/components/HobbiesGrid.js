import React from 'react';
import HobbiesGridItem from './HobbiesGridItem';

const HobbiesGrid = () =>{

	const hobbies = ['read', 'learn', 'videogames'];
	const desc = ['Leer', 'Aprender', 'Videoguegos'];

	return (
		<>
			<div className="row">
				<div className="col-sm-9 mr-auto ml-auto">
					<h5 className="text-center">Mis Hobbies</h5>
				</div>
			</div>
	
			<div className="row mb-3">
				<div className="col-sm-9 mr-auto ml-auto">
					<div className="card-deck">
						{
							hobbies.map( (hobbie, idx) => (
								<HobbiesGridItem 
									key={ hobbie }
									desc={ desc[idx] }
									hobbie={ hobbie }
								/>
							))
						}	
					</div>
				</div>
			</div>

		</>
	);
}

export default HobbiesGrid;
