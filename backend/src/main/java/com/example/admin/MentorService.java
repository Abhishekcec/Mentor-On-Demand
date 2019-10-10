package com.example.admin;

import java.util.List;

import org.springframework.data.jpa.repository.Query;


public interface MentorService {

	 Mentor create(Mentor mentor);

	    Mentor delete(int id);

	    List<Mentor> findAll();

	    Mentor findById(int id);

	    Mentor update(Mentor mentor);
	    
	    
		Mentor findUser(String userName, String password);
}
