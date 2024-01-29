package com.api.backend.controllers;

import com.api.backend.models.UserModel;
import com.api.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController()
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public ArrayList<UserModel> getUsers(){
        return (ArrayList<UserModel>) this.userService.getUsers();
    }

    @PostMapping()
    public UserModel saveUser(@RequestBody UserModel user){
        return userService.saveUser(user);
    }

    @GetMapping(path="/{id}")
    public Optional<UserModel> getUserById(@PathVariable Long id){
        return userService.getById(id);
    }

    @PutMapping(path = "/{id}")
    public UserModel updateUserById(@RequestBody UserModel request, @PathVariable Long id){
        return this.userService.updateById(request, id);
    }

    @DeleteMapping(path = "/{id}")
    public String deleteById(@PathVariable Long id){
        boolean ok = this.userService.deleteUser(id);
        return ok ? "User with id " + id + " deleted" : "Error, we have a problem and cant delete ";
    }
}
