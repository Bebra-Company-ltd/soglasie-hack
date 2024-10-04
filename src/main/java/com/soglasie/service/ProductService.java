package com.soglasie.service;

import com.soglasie.entity.Product;
import com.soglasie.entity.Risk;
import com.soglasie.repository.*;
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
        return productRepository.findAll();
    }

    public Optional<Product> getProductById(int id) {
        return productRepository.findById(id);
    }

    public void deleteProduct(int id) {
        productRepository.deleteById(id);
    }
}
