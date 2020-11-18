/*
 * App.js
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/11/17 18:59:40
 *
 * Copyright (c) 2020 Shuriken
 */

import './App.css'
import SwitchPricing from './components/SwitchPricing'
import PriceCard from './components/PriceCard'
import { ThemeProvider, Grid } from '@material-ui/core'
import theme from './theme/theme'
import { useState } from 'react'

const pricing = [
  {
    name: 'Basic',
    price: {
      montly: '$ 19.99',
      annual: '$ 199.99'
    },
    storage: '500 GB Storage',
    users: '2 Users Allowed',
    sendUp: 'Send up to 3 GB',
    btnLink: '#'
  },
  {
    name: 'Professional',
    price: {
      montly: '$ 24.99',
      annual: '$ 249.99'
    },
    storage: '1 TB Storage',
    users: '5 Users Allowed',
    sendUp: 'Send up to 10 GB',
    btnLink: '#'
  },
  {
    name: 'Master',
    price: {
      montly: '$ 39.99',
      annual: '$ 399.99'
    },
    storage: '2 TB Storage',
    users: '10 Users Allowed',
    sendUp: 'Send up to 20 GB',
    btnLink: '#'
  }
]

function App() {
  const [state, setState] = useState({
		pricingType: 'annually'
  })
  
  const onChangePricing = () => {
    setState((state) => ({
      'pricingType': (state.pricingType === 'montly') ? 'annually' : 'montly'
    }))
  }
  
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Grid
          container
          justify='center'
        >
          <header className="App-header">
            <h1>Our Pricing: {state.pricingType}</h1>
            <SwitchPricing
              changePricing={onChangePricing}
            />
          </header>
          <section>
            <PriceCard></PriceCard>
          </section>

        </Grid>
      </ThemeProvider>
    </div>
  )
}

export default App;
