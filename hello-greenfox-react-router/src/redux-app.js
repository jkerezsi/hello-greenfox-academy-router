import React from 'react';
import BuyAcorn from './containers/buyAcorn';
import EatAcorn from './containers/eatAcorn';
import DisplayAcorn from './containers/displayAcorn';

const App = () => (
  <main>
    <div>
      <h2 className="title">Golden Acorn application with Redux!🌰</h2>
    </div>
    <BuyAcorn />
    <DisplayAcorn />
    <EatAcorn />
  </main>
);

export default App;