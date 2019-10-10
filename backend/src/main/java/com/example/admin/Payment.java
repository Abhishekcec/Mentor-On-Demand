package com.example.admin;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name="payment")
public class Payment  extends AuditModel{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column(name="txn_type")
	private String txnType;
	
	@Column(name="amount")
	private float amount;
	
	@Column(name="total_amount_to_mentor")
	private int totalAmountToMentor = 0;
	
	@Column(name="remarks")
	private String remarks;
	
	@Column(name="mentor_id")
	private int mentorId;
	
	@Column(name="user_id")
	private int userId;
	
	
	@Column(name="training_id")
	private int trainingId;
	
	@Column(name="payment_type")
	private String paymentType;
	
	/*
	 * @ManyToMany(cascade=CascadeType.ALL, mappedBy="payment") List<Training>
	 * training;
	 */

	@Column(name="tech_name")
	private String techName;
	
	@Column(name="mentor_name")
	private String mentorName;
	
	public long getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTxnType() {
		return txnType;
	}

	public void setTxnType(String txnType) {
		this.txnType = txnType;
	}

	public float getAmount() {
		return amount;
	}

	public void setAmount(float amount) {
		this.amount = amount;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	

	public int getMentorId() {
		return mentorId;
	}

	public void setMentorId(int mentorId) {
		this.mentorId = mentorId;
	}

	public int getTrainingId() {
		return trainingId;
	}

	public void setTrainingId(int trainingId) {
		this.trainingId = trainingId;
	}

	public String getPaymentType() {
		return paymentType;
	}

	public void setPaymentType(String paymentType) {
		this.paymentType = paymentType;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}
	
	

	

	public int getTotalAmountToMentor() {
		return totalAmountToMentor;
	}

	public void setTotalAmountToMentor(int totalAmountToMentor) {
		this.totalAmountToMentor = totalAmountToMentor;
	}

	public void paymenttrainer(Integer amount) {
		// TODO Auto-generated method stub
		this.totalAmountToMentor = this.totalAmountToMentor + amount;
	}

	public String getTechName() {
		return techName;
	}

	public void setTechName(String techName) {
		this.techName = techName;
	}

	public String getMentorName() {
		return mentorName;
	}

	public void setMentorName(String mentorName) {
		this.mentorName = mentorName;
	}
	
	/*
	 * public List<Training> getTraining() { return training; }
	 * 
	 * public void setTraining(List<Training> training) { this.training = training;
	 * }
	 */
	
	
	
}
