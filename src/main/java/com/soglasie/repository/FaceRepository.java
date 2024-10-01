package com.soglasie.repository;

import com.soglasie.entity.Face;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FaceRepository extends JpaRepository<Face, Integer> {
}
