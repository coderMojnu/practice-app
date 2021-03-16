import React, { useEffect, useState } from 'react';

const MealFinder = () => {
    const [search, setSearch] = useState('');
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    }, [search])

     const handleChange = event => {
            console.log(event.target.value)
            setSearch(event.target.value)
        }
    return (
        <div>
            <h1>Find Meal</h1>
            <input placeholder="find meal" type="text" onChange={handleChange}/>
            <p>searching: {search}</p>
            <p>Meal Found: {meals?.length || 0}</p>
            {
                meals?.map(meal => <div>{meal.strMeal}</div>)
            }
        </div>
    );
};

export default MealFinder;