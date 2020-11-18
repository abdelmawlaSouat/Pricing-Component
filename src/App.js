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
import Grid from '@material-ui/core/Grid'
import { useState } from 'react'


const pricing = [
  {
    name: 'Basic',
    classes: 'card white-card',
    price: {
      montly: '$ 19.99',
      annually: '$ 199.99'
    },
    storage: '500 GB Storage',
    users: '2 Users Allowed',
    sendUp: 'Send up to 3 GB',
    btn: {
      link: '#',
      classes: 'btn blue-btn'
    }
  },
  {
    name: 'Professional',
    classes: 'card blue-card',
    price: {
      montly: '$ 24.99',
      annually: '$ 249.99'
    },
    storage: '1 TB Storage',
    users: '5 Users Allowed',
    sendUp: 'Send up to 10 GB',
    btn: {
      link: '#',
      classes: 'btn white-btn'
    }
  },
  {
    name: 'Master',
    classes: 'card white-card',
    price: {
      montly: '$ 39.99',
      annually: '$ 399.99'
    },
    storage: '2 TB Storage',
    users: '10 Users Allowed',
    sendUp: 'Send up to 20 GB',
    btn: {
      link: '#',
      classes: 'btn blue-btn'
    }
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

  const cards = pricing.map((item, idx) => {
    return (
      <Grid item key={idx} xs={11} md={3} lg={2}>
        <PriceCard card={item} pricingType={state.pricingType} />
      </Grid>
    )
  })
  
  return (
    <div className="App">
        <Grid
          container
          align='center'
          direction="column"
        >
          <header className="App-header">
            <h1>Our Pricing:</h1>
            <SwitchPricing changePricing={onChangePricing} />
          </header>

          <Grid container justify="center">
            {cards}
          </Grid>

        </Grid>
    </div>
  )
}

export default App;
