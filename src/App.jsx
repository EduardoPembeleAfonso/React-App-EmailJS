import React from 'react';

import Index from './components/form/index';
import Template from './components/template';

function App() {
  return (
    <div style={Apps}>
        <Template />
        <Index />
    </div>
  );
}

/**
 * Styles do App.jsx 
 */
const Apps = {
    backgroundColor: '#fff',
    flex: '1',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }


export default App;
