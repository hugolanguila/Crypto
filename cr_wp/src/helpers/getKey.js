export const getKey = async ( ) =>{
	const resp = await fetch( '/key' );
	const { ok, key } = await resp.json();
	if( ok )
		return key;
	else
		return '';
}
