package com.soglasie.controller;

import com.soglasie.entity.IKP;
import com.soglasie.service.IKPService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/ikp")
public class IKPController {

    @Autowired
    private IKPService ikpService;

    @PostMapping("/createIKP")
    public IKP createIKP(@RequestBody IKP ikp) {
        return ikpService.createIKP(ikp);
    }

    @GetMapping("/getAllIKP")
    public List<IKP> getAllIKP() {
        return ikpService.getAllIKP();
    }

    @GetMapping("/getIKPById/{id}")
    public Optional<IKP> getIKPById(@PathVariable int id) {
        return ikpService.getIKPById(id);
    }

    @DeleteMapping("/deleteIKPById/{id}")
    public void deleteIKPById(@PathVariable int id) {
        ikpService.deleteIKPById(id);
    }

    @PatchMapping("/updateIKP")
    public IKP updateIKP(@RequestBody IKP ikp) {
        return ikpService.updateIKP(ikp);
    }
}
