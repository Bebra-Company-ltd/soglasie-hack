package com.soglasie.repository;

import com.soglasie.entity.IKP;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IKPRepository extends JpaRepository<IKP, Integer> {
}
