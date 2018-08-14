import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Recipes from './components/Recipes';
// import recipe from './data/recipe.json';

const API_Key="83ba50fdaa4216b3496cbf372dd6343b";

class App extends Component {
 
  state={
    recipes:[]
  }

 getRecipe=async (e) => {
    const recipeName=e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call= await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_Key}&q=${recipeName}&count=12`) 
    const data=await api_call.json();
    this.setState({recipes: data.recipes});
    console.log(this.state.recipes);
 }

  componentDidMount = () => {
      const json=localStorage.getItem("recipes");
      const recipes=JSON.parse(json);
      this.setState({recipes});
  } 

  componentDidUpdate =(prevProps,prevState) => {
    const recipes=JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes",recipes);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1 className="App-title">Pick Your Receipe....</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
        <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;
