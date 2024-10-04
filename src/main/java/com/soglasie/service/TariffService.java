package com.soglasie.service;

import com.soglasie.entity.Tariff;
import com.soglasie.repository.TariffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TariffService {

    @Autowired
    private TariffRepository tariffRepository;

    public Tariff createTariff(Tariff tariff) {
        return tariffRepository.save(tariff);
    }

    public Optional<Tariff> getTariffById(int id) {
        return tariffRepository.findById(id);
    }

    public List<Tariff> getAllTariffs() {
        return tariffRepository.findAll();
    }

    public void deleteTariff(int id) {
        tariffRepository.deleteById(id);
    }

    public Tariff updateTariff(Tariff tariff) {
        return tariffRepository.save(tariff);
    }
}
