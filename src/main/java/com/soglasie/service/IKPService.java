package com.soglasie.service;

import com.soglasie.entity.IKP;
import com.soglasie.repository.IKPRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IKPService {

    @Autowired
    private IKPRepository iKPRepository;

    public IKP createIKP(IKP iKP) {
        return iKPRepository.save(iKP);
    }

    public List<IKP> getAllIKP() {
        return iKPRepository.findAll();
    }

    public Optional<IKP> getIKPById(int id) {
        return iKPRepository.findById(id);
    }

    public void deleteIKPById(int id) {
        iKPRepository.deleteById(id);
    }

    public IKP updateIKP(IKP iKP) {
        return iKPRepository.save(iKP);
    }
}
