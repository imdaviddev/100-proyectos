package com.api.backend.controllers;

import com.api.backend.models.NoteModel;
import com.api.backend.services.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController()
@RequestMapping("/notes")
public class NoteController {
    
    @Autowired
    private NoteService noteService;

    @GetMapping
    public ArrayList<NoteModel> getNotes(){
        return (ArrayList<NoteModel>) this.noteService.getNotes();
    }

    @PostMapping
    public NoteModel saveNote(@RequestBody NoteModel user){
        return noteService.saveNote(user);
    }

    @GetMapping(path="/{id}")
    public Optional<NoteModel> getNoteById(@PathVariable Long id){
        return noteService.getById(id);
    }

    @PutMapping(path = "/{id}")
    public NoteModel updateNoteById(@RequestBody NoteModel request, @PathVariable Long id){
        return this.noteService.updateById(request, id);
    }

    @DeleteMapping(path = "/{id}")
    public String deleteById(@PathVariable Long id){
        boolean ok = this.noteService.deleteNote(id);
        return ok ? "User with id " + id + " deleted" : "Error, we have a problem and can't delete ";
    }

    @DeleteMapping(path = "/all")
    public String deleteAll(){
        boolean ok = this.noteService.deleteAllNotes();
        return ok ? "All notes was deteted" : "Error, we have a problem";
    }
    
    
}
