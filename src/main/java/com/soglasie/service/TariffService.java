package com.soglasie.service;

import com.soglasie.repository.TariffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TariffService {

    @Autowired
    private TariffRepository tariffRepository;

}
