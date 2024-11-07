const items = [
  '1 lb Salmon',
  '1 cup Pine Nuts',
  '2 cups Butter Lettuce',
  '1 Yellow Squash',
  '1/2 cup Olive Oil',
  '3 cloves of Garlic'
];

function IngredientsList (props) { // propsはコンポーネントに渡す引数オブジェクト
  return React.createElement(
    'ul',
    { className: 'ingredients' },
    props.items.map((ingredient, i) =>
      React.createElement('li', { key: i }, ingredient)
    )
  );
}

ReactDOM.render(
  React.createElement(IngredientsList, { items }, null), // createElementの第一引数にコンポーネントを渡す
  document.getElementById('root')
);
