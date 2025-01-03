import '/src/style/Main.css'
import React from "react"

export default function Main(){

    const [ingredients,setIngredients]=React.useState([])

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
                        <h3>Feeling inspired?</h3>
                        <p>Let Remy whip up something delightful with these ingredients.</p>
                    </div>
                    <button>Cook with Remy!</button>
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

        </main>
    )
}