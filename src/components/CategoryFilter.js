import React from "react";


function CategoryFilter({categories, setCategory, selectedCategory }) {

  // console.log(categories)  

  // how to render .map() outside of JSX
  // place the handle button function inside the .map as well
  // then call the variable within JSX
  const displayCategories = categories.map(category => {
    // can also create a variable for selected class on category button 
    // const selectedButton = category === selectedCategory ? "selected" : null, then pass the variable in className 
    return <button className={category === selectedCategory ? 'selected' : null} key={category} onClick={handleCategories}>{category}</button> 
    function handleCategories () {
      setCategory(category)
    }
  })  
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* {categories.map(category => 
        <button onClick={handleCategories} key={category} >{category}</button>)} */}
      {displayCategories}
    </div>
  );
}

export default CategoryFilter;
