import FileSaver from 'file-saver';

const url = 'https://server-cryptography.herokuapp.com';
//const url = 'http://localhost:4000';

export const getKey = async () =>{
	const fetchUrl = `${url}/vigenere/key`;

	let response = await fetch( fetchUrl );
	let res = await response.json();
	
	return res.key;
}

export const verify = async ( key = '') =>{
	const fetchUrl = `${url}/vigenere/verify?key=${key}`;
	let response = await fetch( fetchUrl );
	let { ok } = await response.json();

	if( ok )
		return true;
		
	return false;
}

export const fetchFile = async ( key, file, op = 'encrypt' ) => {
	const fetchUrl = `${url}/vigenere/file/${op}`;

	const body = new FormData();
	body.append('key', key);
	body.append('file', file);
	
	let fn = op === 'encrypt' ? file.name.split('.')[0] + '.vig'+'.txt' : file.name.split('.')[0]+'.txt';
	let response = await fetch( fetchUrl, { method:'POST', body });
	let fileRes = await response.blob();
	FileSaver.saveAs( fileRes, fn );
}


