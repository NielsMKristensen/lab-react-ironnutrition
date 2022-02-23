import { useState } from "react";
import { Card, Row, Col, Divider, Input, Button } from 'antd';

function AddFoodForm(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleNameInput = e => setName(e.target.value);
  const handleImageInput = e => setImage(e.target.value);
  const handleCaloriesInput = e => setCalories(e.target.value);
  const handleServingsInput = e => setServings(e.target.value);
  
  
  const handleSubmit = (e) => {        // <==  ADD
    e.preventDefault();
    const newFood = { name, image, calories, servings };
   
    props.addFood(newFood); 
     
    setName("");
    setImage("");
    setCalories(5);
    setServings(true); 
  }

  return (
    <div className="AddFood">

      <form onSubmit={handleSubmit}>
       <Divider>Add Food Entry</Divider>

        <label>Title:</label>
        <Input 
          type="text" 
          name="name" 
          value={name} 
          onChange={handleNameInput} 
        />
 
        <label>Image Link:</label>
        <Input 
          type="text" 
          name="image" 
          value={image} 
          onChange={handleImageInput} 
        />
 
        <label>Calories:</label>
        <Input 
          type="number" 
          name="Calories" 
          value={calories} 
          onChange={handleCaloriesInput} 
        />
 
        <label>Servings:</label>
        <Input 
          type="number" 
          name="Servings" 
          value={servings} 
          onChange={handleServingsInput} 
        />
 
        <button type="submit">Add FOOD</button>
      </form>
    </div>
  );
}
 
export default AddFoodForm;