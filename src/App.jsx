

import { useState } from 'react';
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'

import RecipeList from './Components/RecipeList/RecipeList'
import SideBar from './Components/SideBar/SideBar';
import RecipeCard from './Components/RecipeCard/RecipeCard';




function App() {
  // const [wantToCookRecipes, setWantToCookRecipes] = useState([]);

  // const addToWantToCook = (recipe) => {
  //   setWantToCookRecipes(prevRecipes => [...prevRecipes, recipe]);
  
  
  return (
    <>
      
      <Navbar></Navbar>
      <Banner></Banner>
      <RecipeList></RecipeList>
    
     
      <div className='mx-auto flex sm:col-span-1 gap-2'>
        <RecipeCard></RecipeCard>
     <SideBar></SideBar>
      </div>
    </>
  )
}

export default App
