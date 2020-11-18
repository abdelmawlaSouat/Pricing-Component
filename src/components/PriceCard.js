/*
 * PriceCard.js
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/11/17 19:33:11
 *
 * Copyright (c) 2020 Shuriken
 */

import './PriceCard.css'
import PropTypes from 'prop-types'
import {
	Button,
	Card,
	Divider,
	Typography
} from '@material-ui/core'

function PriceCard({ card, pricingType }) {
	return (
		<Card className={card.classes}>
			<Typography>
				{card.name}
			</Typography>

			<Typography className='card-item' variant="h2">
				{card.price[pricingType]}
			</Typography>
			<Divider />

			<Typography className='card-item' >
				{card.storage}
			</Typography>
			<Divider />

			<Typography className='card-item' >
				{card.users}
			</Typography>
			<Divider />

			<Typography className='card-item' >
				{card.sendUp}
			</Typography>
			<Divider />

			<a href={card.btn.link}>
				<Button
					className={card.btn.classes}
					fullWidth
				>
					Learn More
				</Button>
			</a>
			
		</Card>
	)
}

PriceCard.propTypes = {
	card : PropTypes.object,
	pricingType: PropTypes.string
}


export default PriceCard