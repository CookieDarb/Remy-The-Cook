import '/src/style/Main.css'
import React from "react"

export default function Main(){

    const [ingredients,setIngredients]=React.useState(["Jam", "Bread"])

    const ingredientsArray=ingredients.map(item=>{
        return <li key={item}>{item}</li>
    })

    function addIngredient(formData){
        const newIngredient=formData.get("ingredient")
        setIngredients(prevIngredients=>[...prevIngredients, newIngredient])
        console.log(formData)
    }

    return(
        <main>
            
            <div className='welcome-message'>
                <div className='Remy'>
                    <img src="images/logo.png" alt="Remy-pfp" width="40"/>
                    <p>Remy</p> 
                </div>
                <p>Oh, welcome! I guess you're here for a little help whipping up something delicious, huh? Great! Just list the ingredients you’ve got down below, and we’ll cook up some magic!</p>
            </div>

            <form action={addIngredient}>
                <input type="text" placeholder="e.g. Carrots" aria-label="Add ingredients" name="ingredient" id="ingredient"/>
                <button type='submit'>+ Add</button>
            </form>

            <ul>
                {ingredientsArray}
            </ul>
        </main>
    )
}