import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foodsJson from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';


function App() {
  const [foods, setFoods] = useState(foodsJson);
  const [foodsDynamic, setFoodsDynamic] = useState(foodsJson);
  console.log("FOODS", foods)
  const addFoodFunc = newFoods => {
    const UpdatesFoodArr = [...foods,newFoods];
    const UpdateFoodsDynamicArr = [...foods,newFoods];

    setFoods(UpdatesFoodArr);
    setFoodsDynamic(UpdateFoodsDynamicArr);
  };
  
  const searchFoodFunc = searchFood => {
    let filterFood;    
    
    if (searchFood === '') {
      filterFood = foodsDynamic;
    } else {
      filterFood = foodsDynamic.filter(element => {
        return element.name.toLowerCase().includes(searchFood.toLowerCase());
      });
    }
    setFoods(filterFood);
  }

  function deleteFoodFunc(index) {
    console.log(index)

  }

  return (
    <div className="App">
    <Search findFood={searchFoodFunc} />
    <AddFoodForm addFood={addFoodFunc} />
  
    <h1>FOOD</h1>
    
    {foods.map((foodItems, i) => {
      return (
        
        <FoodBox food = {foodItems} deleteFood = {deleteFoodFunc()} />
        
    )})};
    </div>
    
  )
} 

export default App;
