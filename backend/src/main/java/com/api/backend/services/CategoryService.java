package com.api.backend.services;

import com.api.backend.models.CategoryModel;
import com.api.backend.repositories.ICategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class CategoryService {

    @Autowired
    ICategoryRepository categoryRepository;


    public ArrayList<CategoryModel> getCategories(){
        return (ArrayList<CategoryModel>) categoryRepository.findAll();
    }

    public Optional<CategoryModel> getById(Long id){
        return categoryRepository.findById(id);
    }

    public CategoryModel saveCategory(CategoryModel category){
        return categoryRepository.save(category);
    }

    public boolean deleteCategory(Long id){
        try {
            categoryRepository.deleteById(id);
            return true;
        }catch (Exception e) {
            return false;
        }
    }

    public boolean deleteAllCategories(){
        try {
            categoryRepository.deleteAll();
            return true;
        }catch (Exception e) {
            return false;
        }
    }
}
