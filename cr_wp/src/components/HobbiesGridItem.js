import React from 'react';
import { useFetchGifs } from './../hooks/useFetchGifs';

const HobbiesGridItem = ({ desc, hobbie }) =>{

	const { data: imgs , loading } = useFetchGifs( hobbie );
	return(
		<div className="card">
			<div className="card-header">
					{ desc }
			</div>

			{ loading && <p className="card-text">cargando...</p> }

			<div className="card-img carousel slide" data-ride="carousel">
				<div className="carousel-inner">
					{
						imgs.map( (img, idx) =>(
							<div 
								key={ img.id }
								className={ `carousel-item ${ idx === 0? 'active':''}`}
							>
								<img src={img.url} className="card-img-top" alt="Error" />
							</div>
						))
					}			
				</div>
			</div>

		</div>
	);	
}

export default HobbiesGridItem;
