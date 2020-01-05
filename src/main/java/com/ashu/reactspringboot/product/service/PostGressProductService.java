package com.ashu.reactspringboot.product.service;

import com.ashu.reactspringboot.IProductService;
import com.ashu.reactspringboot.product.repository.IProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class PostGressProductService implements IProductOperations {

    @Autowired
    IProductRepository iProductRepository;


    @Override
    public List getProducts() {
        return iProductRepository.findAll();
    }
}
