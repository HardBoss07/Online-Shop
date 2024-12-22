package ch.matteo.bosshard.online_shop.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ProductHandler {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(long id) {
        Product product = null;
        return new Product();
    }

    public List<Map<String, Object>> getAllProductsSortedByCategory() {
        List<Map<String, Object>> categorizedProducts = new ArrayList<>();

        for (Category cat : Category.values()) {
            Map<String, Object> map = new HashMap<>();
            map.put("name", cat.name());
            map.put("products", productRepository.findByCategory(cat));
            categorizedProducts.add(map);
        }

        return categorizedProducts;
    }

    public List<Product> getProductsByCategory(Category category) {
        return productRepository.findByCategory(category);
    }
}
