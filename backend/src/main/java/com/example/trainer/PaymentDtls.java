package com.example.trainer;

public class PaymentDtls extends AuditModel {

	private static final long serialVersionUID = 1L;
	
	private long id;
	private String txnType;
	private float amount;
	private String remarks;
	private long mentorId;
	private String mentorName;
	private long trainingId;
	private String skillName;
	private float totalAmountToMentor;

}
