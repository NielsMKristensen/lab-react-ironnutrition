
import { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';


function FoodBox(probs) {
    console.log("PROBS",probs)

     
    return (
        <Col>
          <Card
            title={probs.food.name}
            style={{ width: 230, height: 300, margin: 10 }}
          >
            <img src={probs.food.image} height={60} alt="food" />
            <p>Calories: {probs.food.calories}</p>
            <p>Servings: {probs.food.servings}</p>
            <p>
              <b>Total Calories: {probs.food.calories * probs.food.servings} </b> kcal
            </p>
            <Button type="primary" onClick={() => probs.deleteFoodFunc()}> Delete </Button>
          </Card>
        </Col>
      );
} 

export default FoodBox;
