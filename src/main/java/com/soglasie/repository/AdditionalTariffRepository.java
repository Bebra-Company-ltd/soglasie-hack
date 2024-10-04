package com.soglasie.repository;

import com.soglasie.entity.AdditionalTariff;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdditionalTariffRepository extends JpaRepository<AdditionalTariff, Integer> {
}
