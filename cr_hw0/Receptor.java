
import java.io.*;
import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.event.*;
import java.util.*;
public class Receptor extends JFrame implements Observer{
	
	private static final String ROOT = "./D/";
	private static final String FILE_EXT = "_D";
	private HW_1 master;
	private Services dService;

	private ActivityTableModel tableModel;
	private JTable table;
	private Activity selectedActivity;

	private JButton decrypt;
	private JButton delete;
	private JButton openFile;

	public Receptor(HW_1 master, Services dService){
		this.master = master;
		this.dService = dService;
		setTitle("Betito");
		setSize(550, 240);
		setLocationRelativeTo(null);
		addWindowListener(new WindowAdapter(){
			public void windowClosing(WindowEvent e){
				actionBackToMaster();
			}
		});

		tableModel = new ActivityTableModel();
		table = new JTable(tableModel);
		table.getSelectionModel().addListSelectionListener(new ListSelectionListener(){
			public void valueChanged(ListSelectionEvent e){
				tableSelectionChanged();
			}
		});
		table.setSelectionMode(ListSelectionModel.SINGLE_SELECTION);
	
		table.setAutoResizeMode(JTable.AUTO_RESIZE_ALL_COLUMNS);

		//PANEL DE MENSAJES DE ALICIA
		JPanel activityPanel = new JPanel();
		activityPanel.setBorder(BorderFactory.createTitledBorder("MENSAJES DE ANITA"));
		activityPanel.setLayout(new BorderLayout());
		activityPanel.add(new JScrollPane(table), BorderLayout.CENTER);


		//PANEL DE BOTONES
		JPanel buttonsPanel = new JPanel();
		decrypt = new JButton("Decifrar");
		decrypt.addActionListener(new ActionListener(){
			public void actionPerformed(ActionEvent e){
				actionDecrypt();
			}
		});
		
		buttonsPanel.add(decrypt);
		decrypt.setEnabled(false);
	
		delete = new JButton("Eliminar");
		delete.addActionListener(new ActionListener(){
			public void actionPerformed(ActionEvent e){
				actionDelete();
			}
		});

		buttonsPanel.add(delete);
		delete.setEnabled(false);

		openFile = new JButton("Abrir");
		openFile.addActionListener(new ActionListener(){
			public void actionPerformed(ActionEvent e){
				actionOpen();
			}
		});
		
		buttonsPanel.add(openFile);
		openFile.setEnabled(false);

		//ANIADIR LOS PANELES AL FRAME
		getContentPane().setLayout(new BorderLayout());
		getContentPane().add(activityPanel, BorderLayout.CENTER);
		getContentPane().add(buttonsPanel, BorderLayout.SOUTH);
	}

	public void actionAdd(Activity a){
		tableModel.addActivity(a);
	}

	/*
	 * Metodo invocado cuando cambia el renglon seleccionado
	 * */
	private void tableSelectionChanged(){
		if(selectedActivity != null){
			selectedActivity.deleteObserver(Receptor.this);
		}

		if(table.getSelectedRow() > -1){
			selectedActivity = tableModel.getActivity(table.getSelectedRow());
			selectedActivity.addObserver(Receptor.this);
			updateButtons();
		}
	}

	public void actionDecrypt(){
		selectedActivity.decrypt(dService);
		updateButtons();		
	}

	public void actionDelete(){
		tableModel.clearActivity(table.getSelectedRow());
		selectedActivity = null;
		updateButtons();	
	}

	public void actionOpen(){			
		java.awt.Desktop d = java.awt.Desktop.getDesktop();
		try{
			d.open(selectedActivity.getFile());
		}catch(java.io.IOException e){
			e.printStackTrace();
		}
		updateButtons();
	}

	public void updateButtons(){
		if(selectedActivity != null){
			int state = selectedActivity.getState();
			switch(state){
				case Activity.CIFRADO:
					decrypt.setEnabled(true);
					delete.setEnabled(true);
					break;
				case Activity.DECIFRADO:
					decrypt.setEnabled(false);
					delete.setEnabled(true);
					break;
				default:
					decrypt.setEnabled(false);
					delete.setEnabled(true);
			}

			int type  = selectedActivity.getType();
			if(type == Activity.FILE){
				openFile.setEnabled(true);
			}else{
				openFile.setEnabled(false);
			}
		}else{
			decrypt.setEnabled(false);
			delete.setEnabled(false);		
			openFile.setEnabled(false);
		}
	}

	public void update(Observable o, Object arg){
		if(selectedActivity != null && selectedActivity.equals(o)){
			updateButtons();
		}
	}

	private void actionBackToMaster(){
		this.setVisible(false);
		master.setVisible(true);
	}

}
