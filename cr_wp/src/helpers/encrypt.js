import FileSaver from 'file-saver';
export const encrypt = async ( file ) =>{
	
	console.log( file );
	const body = new FormData();
	body.append( 'file', file );

	const request = {
		method: 'PUT', 
		body
	};

	const resp = await fetch( '/encrypt', request );
	const { ok, encText } = await resp.json();

	if( ok )
		return encText;
	else
		return 'No se pudo cifrar el archivo';
}
