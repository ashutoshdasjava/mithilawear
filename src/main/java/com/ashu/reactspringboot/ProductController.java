package com.ashu.reactspringboot;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class ProductController {

    private static List<Map> products = new ArrayList();
    static {
        Map product1 = new HashMap();

        product1.put("id","1");
        product1.put("name","prod1");
        product1.put("title","title1");
        product1.put("image","https://source.unsplash.com/random/300x200");

        Map product2 = new HashMap();
        product2.put("id","2");
        product2.put("name","prod2");
        product2.put("title","title2");
        product2.put("image","https://source.unsplash.com/random/301x200");

        Map product3 = new HashMap();
        product3.put("id","3");
        product3.put("name","prod3");
        product3.put("title","title3");
        product3.put("image","https://source.unsplash.com/random/302x200");

        Map product4 = new HashMap();
        product4.put("id","4");
        product4.put("name","prod4");
        product4.put("title","title4");
        product4.put("image","https://source.unsplash.com/random/303x200");

        Map product5 = new HashMap();
        product5.put("id","5");
        product5.put("name","prod5");
        product5.put("title","title5");
        product5.put("image","https://source.unsplash.com/random/304x200");

        Map product6 = new HashMap();
        product6.put("id","6");
        product6.put("name","prod6");
        product6.put("title","title6");
        product6.put("image","https://source.unsplash.com/random/305x200");

        Map product7 = new HashMap();
        product7.put("id","7");
        product7.put("name","prod7");
        product7.put("title","title7");
        product7.put("image","https://source.unsplash.com/random/306x200");



        Map product8 = new HashMap();
        product8.put("id","8");
        product8.put("name","prod8");
        product8.put("title","title8");
        product8.put("image","https://source.unsplash.com/random/307x200");

        Map product9 = new HashMap();
        product9.put("id","9");
        product9.put("name","prod9");
        product9.put("title","title9");
        product9.put("image","https://source.unsplash.com/random/308x200");

        products.add(product1);
        products.add(product2);
        products.add(product3);
        products.add(product4);
        products.add(product5);
        products.add(product6);
        products.add(product7);
        products.add(product8);
        products.add(product9);


    }

    @GetMapping(path = "/products")
    public List sayHello( ){

        return products;


    }
}
