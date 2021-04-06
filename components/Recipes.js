
import React from 'react';
import { Link } from 'react-router-dom';




const Recipes = props => (
   <div className="container">
     <div className="row">
        { props.recipes.map((recipe) => {
                 return (

                      <div key={recipe.title} className="col-md-3" style={{marginBottom:"3rem"}}>
                          <div className ="recipesBox" >
                            <img className="recipeBox-img" 
                            src={recipe.image_url} 
                            alt={recipe.title}/>
                          
                          </div>
                          <div className="recipeText">
                          <h4 className="recipesTitle">
                          {recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 25)} ...`}</h4>
                          <p className="recipesSubtitle">Publisher : <span>{recipe.publisher}</span></p>
                          <button className="recipeButtons">
                          <Link to={{ 
                              pathname: `/recipe/${recipe.recipe_id}`,
                              state: { recipe: recipe.title }
                            }}>Show more...</Link>
                          </button>
                          
                          </div>

                      </div>
                  
                  );

            }) }
     </div> 
  </div>
);
 
export default Recipes;




