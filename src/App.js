import React from 'react';
import './App.css';

import { Flex } from "./components";
import AppRoute from "./routes/AppRoute";

const App = () => {
  return (
    <Flex direction="column">
      <AppRoute />
    </Flex>
  );
}

export default App;
