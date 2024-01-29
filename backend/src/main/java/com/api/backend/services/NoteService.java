package com.api.backend.services;

import com.api.backend.models.NoteModel;
import com.api.backend.repositories.INoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class NoteService {

    @Autowired
    INoteRepository noteRepository;

    public ArrayList<NoteModel> getNotes(){
        return (ArrayList<NoteModel>) noteRepository.findAll();
    }

    public NoteModel saveNote(NoteModel note){
        return noteRepository.save(note);
    }

    public Optional<NoteModel> getById(Long id){
        return noteRepository.findById(id);
    }

    public NoteModel updateById(NoteModel request, Long id) {
        Optional<NoteModel> existingNote = noteRepository.findById(id);

        if (existingNote.isPresent()) {
            NoteModel updatedNote = existingNote.get();
            updatedNote.setText(request.getText());
            updatedNote.setArchived(request.isArchived());
            updatedNote.setCategory(request.getCategory());

            return noteRepository.save(updatedNote);
        } else {
            return null;
        }
    }

    public Boolean deleteNote(Long id){
        try {
            noteRepository.deleteById(id);
            return true;
        }catch (Exception e) {
            return false;
        }
    }

    public Boolean deleteAllNotes(){
        try {
            noteRepository.deleteAll();
            return true;
        }catch (Exception e) {
            return false;
        }
    }
}
