package com.soglasie.model;

import com.soglasie.entity.Agent;
import lombok.Data;

import java.sql.Date;

@Data
public class AgentAnaliticsModel {
    private Agent agent;
    private Date dateBegin;
    private Date dateEnd;
}
