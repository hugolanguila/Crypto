import { useState } from 'react';
import { getService }'./../helpers/getService';

const useFetchService = ( service, values ) => {
	const [ state, setState ] = useState({ data: {}, loading: true});

	useEffect( ()=>{
			
		useFetchService( service, values )
			.then( data => {
				if( data?.ok )
					setState({ data, loading: false})
			});

	}, [ service, values ]);

	return state;
}
