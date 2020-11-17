/*
 * App.js
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/11/17 18:59:40
 *
 * Copyright (c) 2020 Shuriken
 */

import './App.css'
import SwitchPricing from './SwitchPricing'
import { ThemeProvider, Grid } from '@material-ui/core'
import theme from './theme'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Grid
          container
          justify='center'
        >
          <header className="App-header">
            <h1>Our Pricing</h1>
            <SwitchPricing />
          </header>

        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
