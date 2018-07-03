package net.sloanlab.auth.domain;

import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.index.IndexDirection;
import org.springframework.data.mongodb.core.index.Indexed;

@Document(collection = "user")
public class User {

    @Id
    private Long uid;
    @Indexed(unique = true, direction = IndexDirection.DESCENDING, dropDups = true)
    private String username;
    private String email;
    private String passwordHash;
    private Boolean enabled;
    private Set<Role> roles;
    
    public Long getId(){
        return uid;
    }

    public void setId(Long uid){
        this.uid = uid;
    }
    
    public String getUsername(){
        return username;
    }
    
    public void setUsername(String username){
        this.username = username;
    }

    public String getEmail(){
        return email;
    }
    
    public void setEmail(String email){
        this.email = email;
    }
    
    public String getPasswordhash(){
		return passwordHash;
	}

	public void setPasswordhash(String passwordHash){
		this.passwordHash = passwordHash;
	}

}
