import FileSaver from 'file-saver';
export const getCV = async () =>{	
	let response = await fetch( '/cv' );
	let fileRes = await response.blob();
	FileSaver.saveAs( fileRes, "cv.pdf" );
}
