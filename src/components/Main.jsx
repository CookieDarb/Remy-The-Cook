import '/src/style/Main.css'

export default function Main(){
    return(
        <main>
            
            <div className='welcome-message'>
                <div className='Remy'>
                    <img src="images/logo.png" alt="Remy-pfp" width="40"/>
                    <p>Remy</p> 
                </div>
                <p>Oh, welcome! I guess you're here for a little help whipping up something delicious, huh? Great! Just list the ingredients you’ve got down below, and we’ll cook up some magic!</p>
            </div>

            <form>
                <input type="text" placeholder="e.g. Carrots" aria-label="Add ingredients" />
                <button type='submit'>+ Add</button>
            </form>
        </main>
    )
}