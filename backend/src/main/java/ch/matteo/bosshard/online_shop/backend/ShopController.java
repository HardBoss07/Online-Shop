package ch.matteo.bosshard.online_shop.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class ShopController {

    @Autowired
    private ProductHandler productHandler;

    @GetMapping("/products")
    public List<Product> getAllProducts() {
        System.out.println("accessed /products");
        return productHandler.getAllProducts();
    }

    @GetMapping("/products/{id}")
    public Product getProductById(@PathVariable long id) {
        System.out.println("accessed /products/" + id);
        return productHandler.getProductById(id);
    }

    @GetMapping("/products/categories")
    public List<Map<String, Object>> getAllCategories() {
        System.out.println("accessed /products/categories");
        return productHandler.getAllProductsSortedByCategory();
    }

    @GetMapping("/products/category/{category}")
    public List<Product> getAllCategoriesByCategory(@PathVariable String category) {
        System.out.println("accessed /products/category" + category);
        return productHandler.getProductsByCategory(Category.valueOf(category));
    }
}
