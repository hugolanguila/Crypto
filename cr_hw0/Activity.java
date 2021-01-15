import java.io.*;
import java.util.*;

public class Activity extends Observable{

	public static final String[] TYPES = {"ARCHIVO", "MENSAJE"};
	public static final String[] STATUSES = {"CIFRADO", "DECIFRADO"};

	public static final int CIFRADO = 0;
	public static final int DECIFRADO = 1;
	public static final int FILE = 0;
	public static final int MESSAGE = 1;

	private int type;
	private int state;
	private String info;

	private java.io.File inputFile;
	private java.io.File outputFile;

	public Activity(String info, int type){
		state = CIFRADO;
		this.type = type;
		this.info = info;

		if(type == FILE){
			String oFileName = info.substring(0, info.lastIndexOf('_')) + "_D"+info.substring(info.lastIndexOf('.'));
			inputFile = new File("./_E", info);
			outputFile = new File("./_D", oFileName);
		}
	}

	public String getInfo(){
		return this.info;
	}

	public int getState(){
		return this.state;
	}

	public int getType(){
		return this.type;
	}

	public java.io.File getFile(){
		if(state == CIFRADO){
			return this.inputFile;	
		}else{
			return this.outputFile;
		}
	}
	
	public void decrypt(Services dService){
		if(this.type == FILE){
			dService.decrypt(inputFile, outputFile);
		}else{
			try{
				this.info = dService.decrypt(this.info);
			}catch(Exception e){
				e.printStackTrace();
			}
		}
		state = DECIFRADO;
		stateChanged();
	}

	private void stateChanged(){
		setChanged();
		notifyObservers();
	}
}
