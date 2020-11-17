/*
 * SwitchPricing.js
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/11/16 19:54:51
 *
 * Copyright (c) 2020 Shuriken
 */

import { withStyles } from '@material-ui/core/styles'
import Switch from '@material-ui/core/Switch'
import { useState } from 'react'

const PricingSwitch = withStyles((theme) => ({
	root: {
		width: 42,
		height: 26,
		padding: 0,
		margin: theme.spacing(2)
	},
	switchBase: {
		color: 'white',
		padding: 1,
		'&$checked': {
			color: 'white',
			'& + $track': {
				backgroundColor: theme.palette.secondary.light,
				opacity: 1
			}
		}
	},
	thumb: {
		width: 24,
		height: 24
	},
	track: {
		borderRadius: 26 / 2,
		backgroundColor: theme.palette.secondary.light,
    opacity: 1
	},
	checked: {}
}))(Switch)


function SwitchPricing () {
	const [state, setState] = useState({
		checked: true
	})

	const handleChange = (event) => {
		console.log(event.target.name);
		console.log(event.target.checked);
		console.log(state);
		setState({ ...state, [event.target.name]: event.target.checked })
	} 

	return (
		<div>
			<span>Annually</span>
			<PricingSwitch
				name="checked"
				checked={state.checked}
				onChange={handleChange}
			/>
			<span>Montly</span>
		</div>
	)
}
export default SwitchPricing