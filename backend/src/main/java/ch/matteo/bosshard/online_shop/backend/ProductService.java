package ch.matteo.bosshard.online_shop.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class ProductService {

    @Autowired
    ProductHandler productHandler;

    public List<Product> getAllProducts() {
        return productHandler.getAllProducts();
    }

    public Product getProductById(long id) {
        return productHandler.getProduct(id);
    }

    public List<Map<String, Object>> getAllProductsCategorized() {
        return productHandler.getAllProductsSortedByCategory();
    }

    public List<Product> getProductsFromCategory(Category category) {
        return productHandler.getProductsByCategory(category);
    }
}