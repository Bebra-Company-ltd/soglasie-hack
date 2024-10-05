package com.soglasie.service;

import com.soglasie.entity.ProductMetafield;
import com.soglasie.repository.ProductMetafieldReposirory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductMetafieldService {

    @Autowired
    private ProductMetafieldReposirory productMetafieldReposirory;

    public ProductMetafield createProductMetafield(ProductMetafield productMetafield) {
        return productMetafieldReposirory.save(productMetafield);
    }

    public List<ProductMetafield> getAllProductMetafields() {
        return productMetafieldReposirory.findAll();
    }

    public Optional<ProductMetafield> getProductMetafieldById(int id) {
        return productMetafieldReposirory.findById(id);
    }

    public void deleteProductMetafieldById(int id) {
        productMetafieldReposirory.deleteById(id);
    }

    public ProductMetafield updateProductMetafield(ProductMetafield productMetafield) {
        return productMetafieldReposirory.save(productMetafield);
    }
}
