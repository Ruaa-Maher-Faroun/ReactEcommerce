import React from 'react'

export default function GetCategoryName() {
    const categories = {
        women: ["Women", "Tops"],
        men: ["Men"],
        electronics: ["Laptops", "Mobile Accessories", "Smartphones", "Tablets"],
        beauty: ["Beauty","Fragrances", "Skin Care"],
        automotive: ["Motorcycle", "Vehicle"],
        home: ["Home Decoration", "Kitchen Accessories", "Furniture"],
        else: ["Groceries", "Sports Accessories", "Sunglasses"]
    };
    const categoriesNames = ["Women", "Men", "Electronics",
        "Beauty", "Automotive", "Home", "Else"];
    
  return {categories, categoriesNames};
};
