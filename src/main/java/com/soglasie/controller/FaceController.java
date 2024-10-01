package com.soglasie.controller;

import com.soglasie.entity.Face;
import com.soglasie.service.FaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/face")
public class FaceController {

    @Autowired
    private FaceService faceService;

    @PostMapping("/createFace")
    public Face createFace(@RequestBody Face face) {
        return faceService.createFace(face);
    }

    @GetMapping("/getAllFace")
    public List<Face> getAllFace() {
        return faceService.getAllFaces();
    }

    @GetMapping("/getFaceById/{id}")
    public Optional<Face> getFaceById(@PathVariable int id) {
        return faceService.getFaceById(id);
    }

    @DeleteMapping("/deleteFaceById/{id}")
    public void deleteFaceById(@PathVariable int id) {
        faceService.deleteFaceById(id);
    }
}
