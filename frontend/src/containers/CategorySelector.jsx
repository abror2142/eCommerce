import React, { useState } from "react";

const categories = [
  { id: 1, name: "Electronics", parent: null },
  { id: 2, name: "Phones & Smart Watches", parent: 1 },
  { id: 3, name: "Smartphones & Tablets", parent: 2 },
  { id: 4, name: "Smartphones", parent: 3 },
  { id: 5, name: "Tablets", parent: 3 },
  { id: 6, name: "Accessories for Smartphones and Phones", parent: 2 },
  { id: 7, name: "Cases", parent: 6 },
  { id: 8, name: "Protective Glasses", parent: 6 },
  { id: 9, name: "Toys", parent: null },
  { id: 10, name: "Action Figures", parent: 9 },
  { id: 11, name: "Superheroes", parent: 10 }
];

const CategorySelector = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

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
