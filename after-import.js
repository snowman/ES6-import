import { cube, foo, graph } from './module.js';

graph.options = {
  color: 'blue',
  thickness: '3px',
};

graph.draw = () => console.log(`hello world`)
