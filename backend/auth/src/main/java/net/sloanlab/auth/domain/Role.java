package net.sloanlab.auth.domain;

import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.index.IndexDirection;
import org.springframework.data.mongodb.core.index.Indexed;

@Document(collection = "role")
public class Role {

    @Id
    @Indexed(unique = true, direction = IndexDirection.DESCENDING, dropDups = true)
    private String role;

	public String getRole(){
		return this.role;
	}

	public void setRole(String role){
		this.role = role;
	
}