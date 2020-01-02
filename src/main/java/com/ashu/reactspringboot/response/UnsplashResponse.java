package com.ashu.reactspringboot.response;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;
import java.util.Map;

@JsonIgnoreProperties(ignoreUnknown = true)
public class UnsplashResponse {

    private float total;


    public List<Map> getResults() {
        return results;
    }

    public void setResults(List<Map> results) {
        this.results = results;
    }

    List< Map > results ;


    // Getter Methods

    public float getTotal() {
        return total;
    }

    // Setter Methods

    public void setTotal(float total) {
        this.total = total;
    }
}
