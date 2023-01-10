import './App.css';
import foods from './foods.json';
import {useState} from 'react'
import FoodBox from './components/FoodBox';
import 'antd/dist/reset.css';
import { Row, Divider, Button } from 'antd';
import AddFoodForm from './components/AddFoodForm'
import Search from './components/Search';

function App() {

  const [food, setFood] = useState(foods)

  const createFood = (newFood) => {
    const newFoods = [newFood, ...food]
    setFood(newFoods)
  }

 const searchFoods = el => {
  const searchResult = foods.filter(e => {
return e.name.toLowerCase().includes(el.toLowerCase())
  })
  setFood(searchResult)
 }

 const deleteButton = el => {
  const deleteFood = food.filter(e => {
    return e.name !== el
  })
  setFood(deleteFood)
 }

  return(
    <div className="App">



<Row style={{ width: '100%', justifyContent: 'center' }}>


<AddFoodForm createFood={createFood}></AddFoodForm>

<Button> Hide Form / Add New Food </Button>

<Search searchFoods={searchFoods}/>

<Divider>Food List</Divider>


<div>
<Row style={{ width: '100%', justifyContent: 'center' }}>
  {food.map((e)=> {
    return(
      <FoodBox food={e} deleteButton={deleteButton}/>
    )
  })}
</Row>
</div>
</Row>


</div>
)}
export default App;