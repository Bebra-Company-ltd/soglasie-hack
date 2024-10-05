package com.soglasie.repository;

import com.soglasie.entity.ProductMetafield;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductMetafieldReposirory extends JpaRepository<ProductMetafield, Integer> {
}
