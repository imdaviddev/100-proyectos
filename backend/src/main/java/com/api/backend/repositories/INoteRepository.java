package com.api.backend.repositories;

import com.api.backend.models.NoteModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface INoteRepository extends JpaRepository<NoteModel, Long> {
}
