
import java.util.*;
import javax.swing.*;
import javax.swing.table.*;

public class ActivityTableModel extends AbstractTableModel implements Observer{
	private static final String[] columnNames = {"TIPO", "MENSAJE / NOMBRE ARCHIVO", "ESTADO"};
	private static final Class[] columnClasses = {String.class, String.class, String.class};

	// AQUI SE ALMACENA LA LISTA DE ACTIVIDADES
	List<Activity> activitiesList = new ArrayList<Activity>();

	public void addActivity(Activity newActivity){
		newActivity.addObserver(this);
		activitiesList.add(newActivity);
		fireTableRowsInserted(getRowCount()-1, getRowCount()-1);
	}

	public Activity getActivity(int row){
		return this.activitiesList.get(row);
	}

	public void clearActivity(int row){
		activitiesList.remove(row);
		fireTableRowsDeleted(row, row);
	}

	public int getColumnCount(){
		return columnNames.length;
	}

	public String getColumnName(int col){
		return columnNames[col];
	}

	public Class getColClass(int col){
		return columnClasses[col];
	}

	public int getRowCount(){
		return activitiesList.size();
	}

	public Object getValueAt(int row, int col){
		Activity act = activitiesList.get(row);
		switch(col){
			case 0:
			    	return Activity.TYPES[act.getType()];
			case 1:
				return act.getInfo();
   			case 2: 
				return Activity.STATUSES[act.getState()];				
		}
		return "";
	}

	public void update(Observable o, Object arg){
		int index = activitiesList.indexOf(o);
		fireTableRowsUpdated(index, index);
	}
}
