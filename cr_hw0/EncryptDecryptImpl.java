import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.security.*;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.crypto.*;
import javax.crypto.spec.SecretKeySpec;
import java.util.Base64.Encoder;
import java.util.Base64;

public class EncryptDecryptImpl implements Services{

	private static final String ALGO = "AES";
	private final byte[] keyVal;

	public EncryptDecryptImpl(String key){
		this.keyVal = key.getBytes();
	}

	private Key generateKey(){
		Key key = new SecretKeySpec( keyVal, ALGO );
		return key;
	}

	@Override 
	public String encrypt(String data) throws Exception{
		Key key = generateKey();
		Cipher c = Cipher.getInstance(ALGO);
		c.init(Cipher.ENCRYPT_MODE, key);
		byte[] encVal = c.doFinal(data.getBytes());
		String encValue = Base64.getEncoder().encodeToString(encVal);
		return encValue;	
	}

	@Override
	public String decrypt(String encData) throws Exception{
		Key key = generateKey();
		Cipher c = Cipher.getInstance(ALGO);
		c.init(Cipher.DECRYPT_MODE, key);
		byte[] decodedVal = Base64.getDecoder().decode(encData);
		byte[] decVal = c.doFinal(decodedVal);
		
		return new String(decVal);
	}

	@Override
	public void encrypt(File inputFile, File outputFile){
		Key key = generateKey();
		try{
			Cipher c = Cipher.getInstance(ALGO);
			c.init(Cipher.ENCRYPT_MODE, key);
			FileInputStream iFS = new FileInputStream(inputFile);
			byte[] inputBytes = new byte[(int)inputFile.length()];
			iFS.read(inputBytes);

			byte[] outputBytes = c.doFinal(inputBytes);
			FileOutputStream oFS = new FileOutputStream(outputFile);
			oFS.write(outputBytes);

			iFS.close();
			oFS.close();
		}catch(NoSuchPaddingException | NoSuchAlgorithmException | InvalidKeyException | BadPaddingException
				| IllegalBlockSizeException | IOException e){
				System.out.println("ERROR AL CIFRAR ARCHIVO");
		}
	}

	@Override
	public void decrypt(File inputFile, File outputFile){
		Key key = generateKey();
		try{
			Cipher c = Cipher.getInstance(ALGO);
			c.init(Cipher.DECRYPT_MODE, key);
			FileInputStream iFS = new FileInputStream(inputFile);
			byte[] inputBytes = new byte[(int)inputFile.length()];
			iFS.read(inputBytes);

			byte[] outputBytes = c.doFinal(inputBytes);
			FileOutputStream oFS = new FileOutputStream(outputFile);
			oFS.write(outputBytes);

			iFS.close();
			oFS.close();
		}catch(NoSuchPaddingException | NoSuchAlgorithmException | InvalidKeyException | BadPaddingException
				| IllegalBlockSizeException | IOException e){
			e.printStackTrace();
		}	
	}
}
