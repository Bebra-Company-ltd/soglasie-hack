package com.soglasie.controller;

import com.soglasie.entity.ProductMetafield;
import com.soglasie.service.ProductMetafieldService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/productMetafield")
public class ProductMetafieldController {

    @Autowired
    private ProductMetafieldService productMetafieldService;

    @PostMapping("/createProductMetafield")
    public ProductMetafield createProductMetafield(@RequestBody ProductMetafield productMetafield) {
        return productMetafieldService.createProductMetafield(productMetafield);
    }

    @GetMapping("/getAllProductMetafield")
    public List<ProductMetafield> getAllProductMetafield() {
        return productMetafieldService.getAllProductMetafields();
    }

    @GetMapping("/getProductMetafieldById/{id}")
    public Optional<ProductMetafield> getProductMetafieldById(@PathVariable int id) {
        return productMetafieldService.getProductMetafieldById(id);
    }

    @DeleteMapping("/deleteProductMetafieldById/{id}")
    public void deleteProductMetafieldById(@PathVariable int id) {
        productMetafieldService.deleteProductMetafieldById(id);
    }

    @PatchMapping("/updateProductMetafield")
    public ProductMetafield updateProductMetafield(@RequestBody ProductMetafield productMetafield) {
        return productMetafieldService.updateProductMetafield(productMetafield);
    }
}
