import java.io.File;

public interface Services{
	
	public String encrypt(String mensaje) throws Exception;
	public String decrypt(String mensaje) throws Exception;

	public void encrypt(File inputFile, File outputFile);
	public void decrypt(File inputFile, File outputFile);
}
