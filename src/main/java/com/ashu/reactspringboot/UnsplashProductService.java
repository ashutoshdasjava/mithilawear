package com.ashu.reactspringboot;

import com.ashu.reactspringboot.response.UnsplashResponse;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.List;

@Service
public class UnsplashProductService implements IProductService{

    private  WebClient webClient=null;

    private static final String MIME_TYPE = "application/json";
    private static final String API_BASE_URL = "https://unsplash.com/napi/photos/UZtRU-lWZE4/related";


    @Override
    public Mono<UnsplashResponse> getProducts() {


        webClient = WebClient.builder()
                .baseUrl(API_BASE_URL)
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MIME_TYPE)
                .build();


        return  webClient.get()
                .uri("")
                .retrieve()
                .bodyToMono(UnsplashResponse.class);






    }
}
