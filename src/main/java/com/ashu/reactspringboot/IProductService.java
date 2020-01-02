package com.ashu.reactspringboot;

import com.ashu.reactspringboot.response.UnsplashResponse;
import reactor.core.publisher.Mono;



public interface IProductService {

    public Mono<UnsplashResponse> getProducts();
}
