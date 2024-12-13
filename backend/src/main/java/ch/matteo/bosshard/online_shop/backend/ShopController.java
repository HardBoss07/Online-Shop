package ch.matteo.bosshard.online_shop.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ShopController {

    @GetMapping("/products")
    public List<String> getAllProducts() {

        return List.of("Product 1", "Product 2", "Product 3", "Product 4", "Product 5");
    }
}
