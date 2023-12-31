import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
//import {motion} from 'framer-motion';
import {Link, useParams} from 'react-router-dom';


function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) =>{
    const data = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
    const recipes = await data.json();
    setCuisine(recipes.results);
    //console.log(`THE RECIPE IS${recipes}`);
    //console.log(`THE CUISINE IS ${cuisine}`);
  };

  useEffect(() =>{
    getCuisine(params.type); 
    console.log(params);
  }, [params.type]);

  return (
    <Grid>
      {cuisine.map((item) =>{
        return(
          <Card key={item.id}>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
          </Card>
        )
      })}
    </Grid>
  )
}


const  Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-row-gap: 3rem;
`;

const Card = styled.div`
    position: relative;
    min-height: 15rem; 
    /*width: 7rem;*/
    border-radius: 2rem;
    overflow: hidden;

    img{
        border-radius: 2rem;
        width: 100%;
    }
    a{
      text-decoration: none;
    }
    h4{
      text-align: center;
      padding: 1rem;
    }
`;


export default Cuisine;