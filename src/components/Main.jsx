import '/src/style/Main.css'
import Recipe from './Recipe'
import React from "react"
import { getRecipeFromMistral } from '../../ai'

export default function Main(){

    const [ingredients,setIngredients]=React.useState([])
    const [recipe,setRecipe]=React.useState("")
    const [waitMessage,setWaitMessage]=React.useState(false)

    const ingredientsArray=ingredients.map(item=>{
        return <li key={item}> <span>{item}</span> <button onClick={() => removeIngredient(item)}>-</button> </li>
    })

    function addIngredient(formData){
        const newIngredient=formData.get("ingredient")
        setIngredients(prevIngredients=>[...prevIngredients, newIngredient])
    }

    function removeIngredient(itemToRemove){
        setIngredients(prevIngredients=>prevIngredients.filter(item=>item!==itemToRemove))
    }

    function getRecipeContainer(){
        if(ingredientsArray.length>3){
            return(
                <div className="get-recipe-container">
                    <div className='get-recipe-content'>
                        <h3>Ready for a recipe?</h3>
                        <p>Let Remy whip up something delightful with these ingredients.</p>
                    </div>
                    <button onClick={displayRecipe}>Cook with Remy!</button>
                    {(waitMessage) && <p>Please wait while Remy works his magic!</p>}
                </div>
            )
        }
        else{
            return null
        }
    }

    function Remy(){
        return (
            <div className='Remy'>
                <img src="images/logo.png" alt="Remy-pfp" width="40"/>
                <p>Remy</p> 
            </div>
        )
    }

    async function displayRecipe(){
        setWaitMessage(true)
        const recipeMarkdown=await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
        setWaitMessage(false)
    }

    return(
        <main>
            <div className='welcome-message Remy-message'>
                {Remy()}
                <p>Oh, welcome! I guess you're here for a little help whipping up something delicious, huh? Great! Just list the ingredients you’ve got down below, and we’ll cook up some magic!</p>
            </div>

            <form action={addIngredient}>
                <input type="text" placeholder="e.g. Carrots" aria-label="Add ingredients" name="ingredient" id="ingredient" required/>
                <button type='submit'>+ Add</button>
            </form>

            {ingredientsArray.length?<section className='ingredients-list-container Remy-message'>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientsArray}</ul>
                {getRecipeContainer()}
            </section>:""}

            {recipe && <Recipe recipe={recipe}/>}

        </main>
    )
}