package com.soglasie.controller;

import com.soglasie.entity.Product;
import com.soglasie.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/product")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/createProduct")
    public Product createProduct(@RequestBody Product product) {
        return productService.createProduct(product);
    }

    @GetMapping("/getAllProduct")
    public List<Product> getAllProduct() {
        return productService.getAllProducts();
    }

    @GetMapping("/getProductById/{id}")
    public Optional<Product> getProductById(@PathVariable int id) {
        return productService.getProductById(id);
    }

    @DeleteMapping("/deleteProductById/{id}")
    public void deleteProductById(@PathVariable int id) {
        productService.deleteProduct(id);
    }
}
