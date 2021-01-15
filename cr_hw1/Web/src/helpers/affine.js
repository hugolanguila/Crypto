import FileSaver from 'file-saver';

const url = 'https://server-cryptography.herokuapp.com';
//const url = 'http://localhost:4000';

export const getKey = async ( ring = 128 ) => {
	const fetchUrl = `${url}/affine/key?ring=${ring}`;
	let response = await fetch( fetchUrl );
	let res = await response.json();
	return res;
} 

export const verify = async ( a = 0, b = 0, ring = 128 ) =>{

	const fetchUrl = `${url}/affine/verify?a=${a}&b=${b}&ring=${ring}`;

	let response = await fetch( fetchUrl );
	let { resp } = await response.json();
	return resp;
}

export const fetchFile = async ( a, b, ring, file, modo = 'encrypt' ) => {
	const fetchUrl = `${url}/affine/file/${modo}`;
	const body = new FormData();
	
	body.append( 'a', a );
	body.append( 'b', b );
	body.append( 'ring', ring );
	body.append( 'file', file );

	let fn =  modo === 'encrypt' ? file.name.split('.')[0]+'.aff'+'.txt' : file.name.split('.')[0]+'.txt';
	let response = await fetch( fetchUrl, { method: 'POST', body } );
	let fileRes = await response.blob();
	console.log(fileRes);
	FileSaver.saveAs( fileRes, fn );
}
