import React, { useEffect, useState } from "react";


const CategorySelector = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  
  const [categories, setCategories] = useState([])

  async function fetchCategories(){
    console.log('Response')
    const url = "http://localhost:8000/products/category/"
    const resp = await fetch(url)
    const json = await resp.json()
    setCategories(json)
  }

  useEffect(() => {
    fetchCategories();
  }, [])

  console.log(categories)

  const getSubcategories = (parentId) => {
    return categories.filter((category) => category.parent === parentId);
  };

  const handleSelection = (level, selectedId) => {
    const newSelections = [...selectedCategories];
    newSelections[level] = selectedId;
    newSelections.splice(level + 1); // Remove deeper selections
    setSelectedCategories(newSelections);
  };

  const renderSelects = () => {
    const selects = [];
    let parentId = null; // Start with top-level categories

    for (let i = 0; i <= selectedCategories.length; i++) {
      const subcategories = getSubcategories(parentId);

      // Stop rendering selects if no subcategories exist
      if (subcategories.length === 0) break;

      selects.push(
      <div className="category-select-wrapper">
          <p className="no-wrap category-select-title">{selects.length > 0 ? "Sub-category" : "Category"}:</p>
          <select
            key={i}
            value={selectedCategories[i] || ""}
            onChange={(e) => handleSelection(i, parseInt(e.target.value))}
            className="category-select"
          >
            <option value="">Select Option</option>
            {subcategories.map((subcategory) => (
              <option key={subcategory.id} value={subcategory.id}>
                {subcategory.name}
              </option>
            ))}
          </select>
        </div>
      );

      // Update parentId to the currently selected category
      parentId = selectedCategories[i];
    }

    return selects;
  };

  return <div className="category-select-box">{renderSelects()}</div>;
};

export default CategorySelector;
