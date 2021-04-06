
import React from 'react';


const Form = props => (
    <form onSubmit = {props.getRecipe} style={{marginBottom:"3rem"}}>
      <input className="formInput " type="text" name ="recipeName" />
      <button className="formButton" >Search</button>
    </form>
  );
  
 
 
export default Form ;


