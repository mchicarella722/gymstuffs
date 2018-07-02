package net.sloanlab.auth.domain;

import org.hibernate.annotations.Id;

public class User implements Serializable {

    @Id
    private Long id;
    private String username;
    private String firstName;
    private String lastName;

    public User(){}

    public User(String Username

}
