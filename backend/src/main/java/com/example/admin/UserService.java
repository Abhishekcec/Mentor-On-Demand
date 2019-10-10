package com.example.admin;

import java.util.List;

import org.springframework.data.jpa.repository.Query;


public interface UserService {

	 User create(User user);

	    User delete(int id);

	    List<User> findAll();

	    User findById(int id);

	    User update(User user);
	   
		User findUser(String userName, String password);
}
