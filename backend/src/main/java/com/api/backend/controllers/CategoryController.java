package com.api.backend.controllers;

import com.api.backend.models.CategoryModel;
import com.api.backend.models.NoteModel;
import com.api.backend.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController()
@RequestMapping("/categories")
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @GetMapping
    public ArrayList<CategoryModel> getNotes(){
        return (ArrayList<CategoryModel>) categoryService.getCategories();
    }

    @PostMapping
    public CategoryModel saveCategory(@RequestBody CategoryModel category){
        return categoryService.saveCategory(category);
    }

    @GetMapping(path="/{id}")
    public Optional<CategoryModel> getCategoryById(@PathVariable Long id){
        return categoryService.getById(id);
    }

    @DeleteMapping(path = "/{id}")
    public String deleteById(@PathVariable Long id){
        boolean ok = this.categoryService.deleteCategory(id);
        return ok ? "Category with id " + id + " deleted" : "Error, we have a problem and can't delete ";
    }

    @DeleteMapping(path = "/all")
    public String deleteAll(){
        boolean ok = this.categoryService.deleteAllCategories();
        return ok ? "All categories was deteted" : "Error, we have a problem";
    }
}
