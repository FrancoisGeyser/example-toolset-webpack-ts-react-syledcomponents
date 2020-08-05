import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './components/Hello';

const App = () => {
  return <Hello />;
};

ReactDOM.render(<App />, document.getElementById('root'));
