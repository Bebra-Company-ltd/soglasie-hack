package com.soglasie.service;

import com.soglasie.entity.*;
import com.soglasie.enums.LineOfBusiness;
import com.soglasie.enums.Status;
import com.soglasie.model.ContractAnaliticsModel;
import com.soglasie.repository.AgentRepository;
import com.soglasie.repository.ContractRepository;
import com.soglasie.repository.ProductRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.*;

@Service
public class ContractService {

    @Autowired
    private ContractRepository contractRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private AgentRepository agentRepository;

    public Contract createContract(Contract request) {
        Contract contract = new Contract();

        contract.setDateCreate(request.getDateCreate());
        contract.setDateSign(request.getDateSign());
        contract.setProductId(request.getProductId());
        contract.setRisks(request.getRisks());
        contract.setProductMetafields(request.getProductMetafields());
        contract.setTariff(request.getTariff());
        contract.setAdditionalTariffs(request.getAdditionalTariffs());
        contract.setDateBegin(request.getDateBegin());
        contract.setDateEnd(request.getDateEnd());
        contract.setPremium(request.getPremium());
        contract.setAgentId(request.getAgentId());
        contract.setRate(request.getRate());
        contract.setCommission(request.getCommission());
        contract.setStatus(request.getStatus());
        contract.setPolicyHolderId(request.getPolicyHolderId());
        contract.setInsuredPolicyId(request.getInsuredPolicyId());
        contract.setOwnerId(request.getOwnerId());
        contract.setInsuranceSum(request.getInsuranceSum());

        return contractRepository.save(contract);
    }

    public Optional<Contract> getContractById(int id) {
        return contractRepository.findById(id);
    }

    public List<Contract> getAllContracts() {
        return contractRepository.findAll();
    }

    public void deleteContractById(int id) {
        contractRepository.deleteById(id);
    }

    public Contract updateContract(Contract contract) {
        return contractRepository.save(contract);
    }

    @Transactional
    public Map<String, List<Contract>> getContractsByCriteria(ContractAnaliticsModel contractAnaliticsModel) {
        // Получаем параметры из модели
        Agent agentFilter = contractAnaliticsModel.getAgent();
        LineOfBusiness lobFilter = contractAnaliticsModel.getLob();
        Date dateBeginFilter = contractAnaliticsModel.getDateBegin();
        Date dateEndFilter = contractAnaliticsModel.getDateEnd();
        Product productFilter = contractAnaliticsModel.getProduct();
        System.out.println(productFilter);
        System.out.println(contractAnaliticsModel);

        // Получаем контракты, заключенные указанным агентом
        List<Contract> contracts;

        // Если агент не указан, выбираем все контракты
        if (agentFilter == null) {
            contracts = contractRepository.findAll();
        } else {
            // Иначе выбираем контракты, заключенные указанным агентом
            contracts = contractRepository.findByAgentId(agentFilter);
        }

        // Создаем два списка для подписанных контрактов и черновиков
        List<Contract> signedContracts = new ArrayList<>();
        List<Contract> draftContracts = new ArrayList<>();

        // Фильтруем контракты по критериям и распределяем по статусам
        contracts.stream()
                .filter(contract -> {
                    boolean isAgentValid = agentFilter == null || contract.getAgentId().getId() == agentFilter.getId();
                    System.out.println(isAgentValid);

                    boolean isLobValid = lobFilter == null || contract.getProductId().getLOBid().equals(lobFilter);
                    System.out.println(isLobValid);

                    boolean isPeriodValid = (dateBeginFilter == null && dateEndFilter == null) ||
                            (contract.getDateBegin().compareTo(dateEndFilter) <= 0 && contract.getDateEnd().compareTo(dateBeginFilter) >= 0);
                    System.out.println(isPeriodValid);

                    boolean isProductValid  = productFilter == null || contract.getProductId().getId() == productFilter.getId();
                    System.out.println(isProductValid);

                    return isAgentValid && isLobValid && isPeriodValid && isProductValid;
                })
                .forEach(contract -> {
                    // Добавляем контракт в соответствующий список в зависимости от его статуса
                    if (contract.getStatus() == Status.SIGNED) {
                        signedContracts.add(contract);
                    } else if (contract.getStatus() == Status.DRAFT) {
                        draftContracts.add(contract);
                    }
                });

        // Возвращаем результат в виде Map, где ключ — это тип контракта (подписанный или черновик)
        Map<String, List<Contract>> result = new HashMap<>();
        result.put("signedContracts", signedContracts);
        result.put("draftContracts", draftContracts);

        return result;
    }

}
