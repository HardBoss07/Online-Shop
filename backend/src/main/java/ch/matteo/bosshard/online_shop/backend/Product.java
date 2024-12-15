package ch.matteo.bosshard.online_shop.backend;

import jakarta.persistence.*;

@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @Enumerated(EnumType.STRING)
    private Category category;
    private Integer price;
    private Integer stock;

    @Column(name = "image_url")
    private String imageURL;

    public Product(String name, Category category, Integer price, Integer stock, String imageURL) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.stock = stock;
        this.imageURL = imageURL;
    }

    public Product() {

    }

    // Getters and setters

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public Integer getStock() {
        return stock;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }
}

enum Category {
    Electronics, Clothing, Groceries, Books, Furniture;
}
