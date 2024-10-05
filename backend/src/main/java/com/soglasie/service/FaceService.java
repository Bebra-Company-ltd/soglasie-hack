package com.soglasie.service;

import com.soglasie.entity.Face;
import com.soglasie.repository.AgentRepository;
import com.soglasie.repository.FaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FaceService {

    @Autowired
    private FaceRepository faceRepository;

    public Face createFace(Face faceRequest) {
        return faceRepository.save(faceRequest);
    }


    public List<Face> getAllFaces() {
        return faceRepository.findAll();
    }

    public Optional<Face> getFaceById(int id) {
        return faceRepository.findById(id);
    }

    public void deleteFaceById(int id) {
        faceRepository.deleteById(id);
    }

    public Face updateFace(Face faceRequest) {
        return faceRepository.save(faceRequest);
    }
}
