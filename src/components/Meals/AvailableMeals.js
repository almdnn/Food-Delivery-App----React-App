import { useEffect, useState} from 'react';
import classes from "./AvailableMeals.module.css";
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';



const AvailableMeals = (props) => {
const [meals, setMeals] = useState([]);
const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchedMeals = async () => {
      const response = await fetch('https://foodapp-d57f0-default-rtdb.europe-west1.firebasedatabase.app/meals.json');
      const responseData = await response.json();
      
      const loadedMeals = [];

      for(const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
        });
        
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    }
      
      fetchedMeals();
      
  }, [])


    const mealsList = meals.map(meal => 
    <MealItem 
    id={meal.id}
    name={meal.name}
    key={meal.id}
    description={meal.description}
    price={meal.price} />)
    
    return (
       
       <section className={classes.meals}>
       <Card>
         {isLoading && <p style={{textAlign: 'center'}}>Loading Data..</p>}
       <ul>
       {mealsList}
       </ul>
       </Card>
       </section>
       
    )
};

export default AvailableMeals;