import { useState, useEffect, useRef } from 'react';

export const useFetch = ( url, formData ) =>{

	const isMounted = useRef( true );
	const [ state, setState ] = useState({ data: null, loading: true, err: null });

	useEffect( () => {
		return () => {
			isMounted.current = false ;
		}
	}, []);

	useEffect( () => {
		setState({ data: null, loading: true, error: null});
		if( formData !== {} ){
			fetch( url, formData )
				.then( resp => resp.json() )
				.then( data => {
					if( isMounted.current )
						setState( { loading: false, error: null, data } );
				})
				.catch( () => {	
					setState({ data: null, loading: false, error: 'No se pudo cargar la info' })
				});
		}	
	}, [ formData ]);

	return state;
}
