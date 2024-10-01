package com.soglasie.service;

import com.soglasie.entity.Contract;
import com.soglasie.repository.ContractRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContractService {

    @Autowired
    private ContractRepository contractRepository;

    public Contract createContract(Contract contract) {
//        Contract contract = new Contract();
//
//        contract.setDateCreate(request.getDateCreate());
//        contract.setDateCreate(request.getDateCreate());
//        contract.setDateSign(request.getDateSign());
//        contract.setProductsId(request.getProductsId());
//        contract.setDateSign(request.getDateBegin());
//        contract.setDateEnd(request.getDateEnd());
//
//        contract.setPremium(request.getPremium());
//        contract.setAgentId(request.getAgentId());
//        contract.setRate(request.getRate());
//        contract.setCommission(request.getCommission());
//        contract.setStatus(request.getStatus());
//        contract.set

        return contractRepository.save(contract);
    }
}
