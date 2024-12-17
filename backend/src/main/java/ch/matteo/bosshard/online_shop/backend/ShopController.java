package ch.matteo.bosshard.online_shop.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class ShopController {

    @Autowired
    private ProductService productService;

    @GetMapping("/products")
    public List<Product> getAllProducts() {
        System.out.println("accessed /products");
        return productService.getAllProducts();
    }

    @GetMapping("/products/{id}")
    public Product getProductById(@PathVariable long id) {
        System.out.println("accessed /products/" + id);
        return productService.getProductById(id);
    }

    @GetMapping("/products/categories")
    public List<Map<String, Object>> getAllCategories() {
        System.out.println("accessed /products/categories");
        return productService.getAllProductsCategorized();
    }
}
