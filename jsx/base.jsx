const recipes = [
  {
    name: 'Baked Salmon',
    ingredients: [
      { name: 'Salmon', amount: 1, measurement: 'lb' },
      { name: 'Pine Nuts', amount: 1, measurement: 'cup' },
    ],
    steps: [
      "Preheat the oven to 350 degrees.",
      "Spread the olive oil around a glass baking dish.",
      "Add the salmon, garlic, and pine nuts to the dish.",
      "Bake for 15 minutes."
    ]
  },
  {
    name: 'Fish Tacos',
    ingredients: [
      { name: 'Whitefish', amount: 1, measurement: 'lb' },
      { name: 'Cheese', amount: 1, measurement: 'cup' },
    ],
    steps: [
      "Cook the fish on the grill until hot.",
      "Place the fish on the 3 tortillas.",
      "Top them with cheese."
    ]
  }
]

// Menuのコンポーネント
function Menu (props) { // function Menu ({ title, recipes }) とすると、デストラクチャリングで受け取れる
  return (
    <article>
      <h1>{props.title}</h1>
      <div className="recipes">
        {
          props.recipes.map((recipe, i) => (
            <Recipe key={i} name={recipe.name} ingredients={recipe.ingredients} steps={recipe.steps} />
            // <Recipe key={i} {...recipe} /> // でスプレッド構文を使うとよりスッキリ
          ));
        }
      </div>
    </article>
  );
}

// Recipeのコンポーネント
function Recipe (props) {
  return (
    <section id={props.name.toLowerCase().replace(/ /g, '-')}>
      <h1>{props.name}</h1>
      <ul className="ingredients">
        {
          props.ingredients.map((ingredient, i) => (
            <li key={i}>{ingredient.name}</li>
          ))
        }
      </ul>
      <section className="instructions">
        <h2>Cooking instructions</h2>
        {
          steps.map((step, i) => (
            <p key={i}>{step}</p>
          ))
        }
      </section>
    </section>
  )
}

ReactDOM.render(
  <Menu recipes={recipes} title="Delicious Recipes"/>,
  document.getElementById('root')
);
