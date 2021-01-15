export const sendEmail = async ({ email, message }) =>{
	
	const body = new URLSearchParams();
	body.append( "email", email );
	body.append( "message", message );

	const request = {
		method: 'POST', 
		headers:{
			"Content-Type": "application/x-www-form-urlencoded"
		},
		body: body.toString(),
		json: true
	};

	const resp = await fetch( '/email', request );
	const { ok } = await resp.json();
	return ok;
}
