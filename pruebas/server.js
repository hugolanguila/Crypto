const fs = require('fs');
const crypto = require('crypto');


const privatekey = fs.readFileSync('priv.pem', 'utf8');
const publickey = fs.readFileSync('pub.pem', 'utf8');
const text = fs.readFileSync('./archivo.txt', 'utf8');

const signer = crypto.createSign('sha256');
const verifier = crypto.createVerify('sha256');

signer.write( text );
signer.end();

const signature = signer.sign( privatekey, 'base64');
verifier.update( text );
verifier.end();
let ver = verifier.verify( publickey, signature, 'base64' );

console.log('Ver: ' + ver );

