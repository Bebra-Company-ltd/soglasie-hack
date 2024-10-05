package com.soglasie.service;

import com.soglasie.entity.*;
import com.soglasie.repository.*;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private RiskRepository riskRepository;

    @Autowired
    private TariffRepository tariffRepository;

    @Autowired
    private AdditionalTariffRepository additionalTariffRepository;

    @Autowired
    private ProductMetafieldReposirory productMetafieldReposirory;

    public Product createProduct(Product product) {
        riskRepository.saveAll(product.getRisks());
        productMetafieldReposirory.saveAll(product.getProductMetafields());
        tariffRepository.saveAll(product.getTariffs());
        additionalTariffRepository.saveAll(product.getAdditionalTariffs());
        return productRepository.save(product);
    }

    public List<Product> getAllProducts() {
        return productRepository.findByIsArchivedFalse();
    }

    public Optional<Product> getProductById(int id) {
        return productRepository.findById(id);
    }

    public void archiveProductById(int id) {
        Product product = productRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Product not found"));
        product.setIsArchived(true);
        productRepository.save(product);
    }

    public Product updateProduct(Product product) {
        // Сохраняем связанные сущности, если они ещё не существуют в базе данных
        if (product.getRisks() != null) {
            for (Risk risk : product.getRisks()) {
                if (risk.getId() == 0) { // Если ID равен 0, значит это новая сущность
                    risk.setProduct(product); // Устанавливаем ссылку на Product
                    // Здесь вам нужно сохранить риск в репозитории, например:
                     riskRepository.save(risk);
                }
            }
        }

        if (product.getProductMetafields() != null) {
            for (ProductMetafield metafield : product.getProductMetafields()) {
                if (metafield.getId() == 0) {
                    metafield.setProduct(product);
                    // Здесь вам нужно сохранить метаполе в репозитории, например:
                    productMetafieldReposirory.save(metafield);
                }
            }
        }

        if (product.getTariffs() != null) {
            for (Tariff tariff : product.getTariffs()) {
                if (tariff.getId() == 0) {
                    tariff.setProduct(product);
                     tariffRepository.save(tariff);
                }
            }
        }

        if (product.getAdditionalTariffs() != null) {
            for (AdditionalTariff additionalTariff : product.getAdditionalTariffs()) {
                if (additionalTariff.getId() == 0) {
                    additionalTariff.setProduct(product);
                     additionalTariffRepository.save(additionalTariff);
                }
            }
        }

        return productRepository.save(product); // Теперь сохраняем основной продукт
    }

}
