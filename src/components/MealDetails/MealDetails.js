import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const MealDetails = () => {
    const [meal, setMeal] = useState({});
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
        .then(res => res.json())
        .then(data => setMeal(data.meals))
    }, [])
    return (
        <div>
            <h1>Meal Details</h1>
        </div>
    );
};

export default MealDetails;