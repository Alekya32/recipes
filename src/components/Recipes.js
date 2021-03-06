import React from 'react';
import {Link} from "react-router-dom";

const Recipes =(props) => (
    <div className="container">
        <div className="row">
            {props.recipes.map((recipe)=>{
                return(
                    <div  key={recipe.title}  className="col-md-4">
                        <div className="recipes__box">
                            <img 
                                className="recipe__box-img" 
                                src={recipe.image_url} 
                                alt={recipe.title}/>
                                <div className="recipe__text">
                                    <h5 className="recipe__title">{recipe.title.length<20?`${recipe.title}`:
                                    `${recipe.title.substring(0,50)}...`}</h5>
                                    <p className="recipe__subtitle">
                                    PUBLISHER:<span>{recipe.publisher}</span></p>
                                </div>
                                <button className="recipe_buttons">
                                    <Link to={{pathname:`/recipe/${recipe.recipe_id}`,
                                state:{recipe: recipe.title}}}>View Recipe</Link>
                                </button>
                        </div>
                    </div>
                );
             })
            }
        </div>
    </div>
);

export default Recipes;