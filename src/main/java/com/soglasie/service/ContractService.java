package com.soglasie.service;

import com.soglasie.entity.*;
import com.soglasie.repository.AgentRepository;
import com.soglasie.repository.ContractRepository;
import com.soglasie.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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

        // Получение продукта из базы данных
        Optional<Product> product = productRepository.findById(request.getProductId().getId());
        if (product.isEmpty()) {
            throw new RuntimeException("Product not found");
        }

        // Копируем риски, чтобы избежать проблемы с разделением ссылок
//        List<Risk> copiedRisks = new ArrayList<>();
//        for (Risk risk : product.get().getRisks()) {
//            Risk copiedRisk = new Risk();
//            copiedRisk.setName(risk.getName());
//            copiedRisk.setPremium(risk.getPremium());
//            copiedRisk.setInsuranceSum(risk.getInsuranceSum());
//            // Привязку к контракту делаем позже
//            copiedRisks.add(copiedRisk);
//        }

        LocalDate startDate = request.getDateBegin().toLocalDate();
        LocalDate endDate = request.getDateEnd().toLocalDate();

        long days = ChronoUnit.DAYS.between(startDate, endDate);

        Double additionalTariffsTotalSum = 0.0;

        for (AdditionalTariff additionalTariff : request.getAdditionalTariffs()) {
            additionalTariffsTotalSum += additionalTariff.getTotalInsuranceSum();
        }

        Tariff tariff = request.getTariff();

        tariff.setInsuranceSum(additionalTariffsTotalSum * tariff.getRate());

        Double totalPercentForDays = days * product.get().getPercentForDay();

        Double totalPercentForRisks = 0.0;

        Double totalPercentForMetafields = 0.0;

        for (Risk risk : request.getRisks()) {
            totalPercentForRisks += risk.getRate();
        }

        for (ProductMetafield productMetafield : request.getProductMetafields()) {
            totalPercentForMetafields += productMetafield.getRate();
        }

        Double premium = tariff.getInsuranceSum() + (totalPercentForMetafields + totalPercentForRisks +
                totalPercentForDays) * additionalTariffsTotalSum;

        Agent agent = agentRepository.findById(request.getAgentId().getId()).get();

        Double rate = (totalPercentForRisks + agent.getAgentAgreement().getRate()) * premium;


        // Установка данных контракта
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

        // Привязываем скопированные риски к контракту
//        for (Risk copiedRisk : copiedRisks) {
//            copiedRisk.setContractId(contract);
//        }

        // Сохраняем контракт
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
}
