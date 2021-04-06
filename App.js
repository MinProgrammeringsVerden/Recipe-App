import React , {Component } from 'react';
import './App.css';
import Form from './components/Form';
import Recipes from './components/Recipes';



const API_KEY ='my-api-key';

class App extends Component {

  state = {
    recipes: []
  }
  
  getRecipe = async (e) =>{
   
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const apiCall = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=16`);
    const respons = await apiCall.json();
    this.setState({recipes:respons.recipes});
    
    
  }

  


  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes)
  }

   
 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Your Reacipe</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
} 


export default App;
