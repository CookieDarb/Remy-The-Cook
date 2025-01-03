export default function Recipe(){
    return(
        <section className="Remy-message recipe-container">
            <h2>Remy's Recipe:</h2>
            <article className="suggested-recipe-container" aria-live="polite">
                <p>Based on the ingredients you have available, I would recommend making a simple and delicious <strong>Potato & Onion Sandwich</strong>. Here is the recipe:</p>
                <h3>Potato & Onion Sandwich</h3>
                <strong>Ingredients:</strong>
                <ul>
                    <li>2 slices of bread</li>
                    <li>2 medium potatoes, boiled and mashed</li>
                    <li>1 onion, thinly sliced</li>
                    <li>2 tablespoons mayonnaise</li>
                    <li>Spices (e.g., salt, pepper, cumin, chili powder) to taste</li>
                    <li>A handful of fresh coriander, chopped</li>
                </ul>
                <strong>Instructions:</strong>
                <ol>
                    <li>Toast the slices of bread to your desired crispness.</li>
                    <li>In a mixing bowl, mash the boiled potatoes until smooth.</li>
                    <li>Add the mayonnaise to the mashed potatoes and mix well.</li>
                    <li>Season with salt, pepper, cumin, and chili powder according to your taste.</li>
                    <li>In a separate pan, sauté the sliced onions with a bit of oil until golden brown and caramelized.</li>
                    <li>Spread a generous amount of the mashed potato mixture onto one slice of toasted bread.</li>
                    <li>Top with the sautéed onions and sprinkle with fresh chopped coriander.</li>
                    <li>Place the second slice of bread on top to close the sandwich.</li>
                    <li>Serve immediately, optionally with a side of crispy fries or a simple salad.</li>
                </ol>
            </article>
        </section>
    )
}