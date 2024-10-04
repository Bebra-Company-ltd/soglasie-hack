package com.soglasie.controller;

import com.soglasie.entity.Contract;
import com.soglasie.service.ContractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/contract")
public class ContractController {

    @Autowired
    private ContractService contractService;

    @PostMapping("/createContract")
    public Contract createContract(@RequestBody Contract contract) {
        return contractService.createContract(contract);
    }

    @GetMapping("/getAllContract")
    public List<Contract> getAllContract() {
        return contractService.getAllContracts();
    }

    @GetMapping("/getContractById/{id}")
    public Optional<Contract> getContractById(@PathVariable int id) {
        return contractService.getContractById(id);
    }

    @DeleteMapping("/deleteContractById/{id}")
    public void deleteContractById(@PathVariable int id) {
        contractService.deleteContractById(id);
    }

    @PatchMapping("/updateContract")
    public Contract updateContract(@RequestBody Contract contract) {
        return contractService.updateContract(contract);
    }
}
