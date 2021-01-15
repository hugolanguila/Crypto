import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.event.*;

public class HW_1 extends JFrame{
	
	private Receptor receptor;
	private Services eService;

	private JTextField text;
	private JButton cipText;
	private JButton selectFile;

	private boolean fileSelected;
	private java.io.File fileInput;
	private java.io.File fileOutput;
	private JFileChooser fileChooser;

	public HW_1(Services eService){
		setTitle("Alicia");
		setSize(480, 240);
		this.eService = eService;
		setLocationRelativeTo(null);
		addWindowListener(new WindowAdapter(){
			public void windowClosing(WindowEvent e){
				actionExit();
			}	
		});

		JPanel panel = new JPanel();
		text = new JTextField(20);
		cipText = new JButton("Cifrar");
		cipText.addActionListener(new ActionListener(){
			public void actionPerformed(ActionEvent e){
				actionEncryptManager();
			}
		});

		selectFile = new JButton("Seleccionar archivo");
		selectFile.addActionListener(new ActionListener(){
			public void actionPerformed(ActionEvent e){
				actionSelectFile();
			}
		});

		panel.add(text);
		panel.add(cipText);
		panel.add(selectFile);

		getContentPane().setLayout(new BorderLayout());
		getContentPane().add(new Panel().add(new JLabel("Escribe un mensaje o selecciona un archivo para cifrar", SwingConstants.CENTER)), BorderLayout.NORTH);
		getContentPane().add(panel, BorderLayout.CENTER);
	}

	private void actionExit(){
		System.exit(0);
	}

	private void setReceptor(Receptor r){
		this.receptor = r;
	}

	private void actionEncryptManager(){
		if(fileSelected){
			encryptFile();
		}else if(text.getText().length() > 0){
			encryptText();	
		}else{
			System.out.println("Debes escribir un mensaje o seleccionar un archivo");
		}
	}

	private void actionSelectFile(){
		fileChooser = new JFileChooser("./");
		if(fileChooser.showOpenDialog(null) == JFileChooser.APPROVE_OPTION){
			fileInput = fileChooser.getSelectedFile();

			String fName = fileInput.getName();
			if(fName.contains(".")){
				String fileExtention = fName.substring(fName.lastIndexOf('.'), fName.length());
		       		String eFileName = fName.substring(0, fName.lastIndexOf('.'))+"_E"+fileExtention;
				fileOutput = new java.io.File("_E", eFileName);	
			}
			fileSelected = true;
			text.setText(fileInput.getName());
		}
	}

	private void encryptText(){
		if(text.getText().length() > 0){
			try{
				Activity act = new Activity(eService.encrypt(text.getText()), Activity.MESSAGE);
				this.receptor.actionAdd(act);
				text.setText("");
				this.setVisible(false);
				this.receptor.setVisible(true);
			}catch(Exception e){
				e.printStackTrace();
			}
		}else{
			System.out.println("Primero debes escribir algo");
		}
	}

	private void encryptFile(){
		System.out.println(fileOutput.getName());
		eService.encrypt(fileInput, fileOutput);	
		Activity act = new Activity(fileOutput.getName(),Activity.FILE);
		this.receptor.actionAdd(act);
		text.setText("");
		this.setVisible(false);
		this.receptor.setVisible(true);
		fileInput = null;
		fileOutput = null;
		fileSelected = false;
	}	

	public static void main(String[] args){	
		if(args.length > 0 && args[0].length() >= 16){
			SwingUtilities.invokeLater(new Runnable(){
				public void run(){
					Services edService = new EncryptDecryptImpl(args[0]);
					HW_1 alicia = new HW_1(edService);
				      	Receptor benito = new Receptor(alicia, edService);
					alicia.setReceptor(benito);
					alicia.setVisible(true);	
					benito.setVisible(false);
				}	
			});
		}else{
			System.out.println("Debes proporcionar una llave de 16 bytes");
			return;
		}
	}
}
