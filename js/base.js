const reactElement = React.createElement('h1', { id: 'recipe-0'}, 'Baked Salmon');
console.log(reactElement);

/*
$$typeof: Symbol(react.element)
key: null
props: {id: 'recipe-0', children: 'Baked Salmon'}
ref: null
type: "h1"
_owner: null
_store: {validated: false}
_self: null
_source: null
*/

ReactDOM.render(reactElement, document.getElementById('root'));
