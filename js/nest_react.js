// React要素の子要素にReact要素を持たせて、DOMツリーを表現
elm = React.createElement('ul', null,
  React.createElement('li', null, 'Baked Salmon'),
  React.createElement('li', null, 'Baked Potatoes'),
  React.createElement('li', null, 'Baked Brussel Sprouts')
);

ReactDOM.render(elm, document.getElementById('root'));

// 配列を子要素に持つ場合は、key属性を指定する必要がある
elm2 = React.createElement('ul', null,
  [
    React.createElement('li', { key: 1 }, 'Baked Salmon'),
    React.createElement('li', { key: 2 }, 'Baked Potatoes'),
    React.createElement('li', { key: 3 }, 'Baked Brussel Sprouts')
  ]
);

ReactDOM.render(elm2, document.getElementById('root'));
