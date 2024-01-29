package com.api.backend.services;

import com.api.backend.models.UserModel;
import com.api.backend.repositories.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    IUserRepository userRepository;

    public ArrayList<UserModel> getUsers(){
        return (ArrayList<UserModel>) userRepository.findAll();
    }

    public UserModel saveUser(UserModel user){
        return userRepository.save(user);
    }

    public Optional<UserModel> getById(Long id){
        return userRepository.findById(id);
    }

    /*
    public Optional<UserModel> updateById(UserModel request, Long id){
        Optional<UserModel> userRequest = userRepository.findById(id);
        if(userRequest.isPresent()){
            UserModel user = userRequest.get();
            user.setFirstName(request.getFirstName());
            user.setLastName(request.getLastName());
            user.setEmail(request.getEmail());

            return userRequest;
        }

        return userRequest;
    }
     */

    public UserModel updateById(UserModel request, Long id){
            UserModel user = userRepository.findById(id).get();

            if(user != null){
                user.setFirstName(request.getFirstName());
                user.setLastName(request.getLastName());
                user.setEmail(request.getEmail());
            }

            return user;
    }

    public Boolean deleteUser(Long id){
        try {
            userRepository.deleteById(id);
            return true;
        }catch (Exception e) {
            return false;
        }
    }

}
