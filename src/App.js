import React from 'react';
import { Layout } from './components/Layout/Layout';
import {CountriesList} from './containers/CountriesList';
import './css/normalize.css'
import './css/skeleton.css'


function App() {
  return (
    <div className="container">
      <Layout>
        <CountriesList />
      </Layout>
    </div>
  );
}

export default App;
