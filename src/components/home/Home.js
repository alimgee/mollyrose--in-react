import React from 'react';
import {Container, Row, Col} from 'reactstrap'
import Intro from './Intro'
import Quote from './Quote'
import CardSection from './Cards'

const App = () => {
  return (
      <main>
      <Intro />
      <Quote />
      <CardSection />
      </main>)
}
export default App;
