import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './ReportPage';
import { GraphQLClient, ClientContext } from 'graphql-hooks'

const client = new GraphQLClient({
  url: 'https://4000-simonklausludwig-base-jayl1zuqnor.ws-eu80.gitpod.io/graphql'
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <ClientContext.Provider value={client}>
      <App />
    </ClientContext.Provider>
  </React.StrictMode>
);



