package com.soglasie.model;

import com.soglasie.entity.Agent;
import com.soglasie.entity.Product;
import com.soglasie.enums.LineOfBusiness;
import lombok.Data;

import java.sql.Date;

@Data
public class ContractAnaliticsModel {
    private LineOfBusiness lob;
    private Date dateBegin;
    private Date dateEnd;
    private Product product;
    private Agent agent;
}
