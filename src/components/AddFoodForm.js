// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import {useState} from 'react'

// Iteration 4
function AddFoodForm({createFood}) {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)

    const newName = (e) => {
        setName(e.target.value)
    }

    const newImage = (e) => {
        setImage(e.target.value)
    }

    const newCalories = (e) => {
        setCalories(e.target.value)
    }

    const newServings = (e) => {
        setServings(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let newFood = {name, image, calories, servings}
        createFood(newFood)

        setName('');
        setImage('');
        setCalories(0);
        setServings(0);
    }



  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={undefined} type="text" onChange={newName} />

      <label>Image</label>
      <Input value={undefined} type="text" onChange={newImage} />

      <label>Calories</label>
      <Input value={undefined} type="text" onChange={newCalories} />

      <label>Servings</label>
      <Input value={undefined} type="text" onChange={newServings} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
