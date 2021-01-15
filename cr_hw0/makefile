#Archivo makefile simple

JC=javac

all:HW_1.class

Activity.class:Activity.java
	$(JC) Activity.java

ActivityTableModel.class:ActivityTableModel.java
	$(JC) ActivityTableModel.java

Services.class:Services.java
	$(JC) Services.java

EncryptDecryptImpl.class:EncryptDecryptImpl.java
	$(JC) EncryptDecryptImpl.java

Receptor.class:Receptor.java
	$(JC) Receptor.java

HW_1.class: Activity.class ActivityTableModel.class Services.class EncryptDecryptImpl.class Receptor.class  HW_1.java
	$(JC) HW_1.java

.PHONY:clean

clean:
	rm *.class
