
// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import 'antd/dist/reset.css';
import { Card, Col, Button } from 'antd';


// Iteration 2
function FoodBox({food}) {
    const {name, calories, image, servings} = food;
    const {deleteButton} = food;

    const totalCalories = calories * servings


  return (
    <Col>
      <Card
        title={name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {totalCalories} </b> kcal
        </p>
        <Button onClick={() => deleteButton(name)} type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}



export default FoodBox