/*
 * theme.js
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/11/17 14:10:53
 *
 * Copyright (c) 2020 Shuriken
 */

import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
	palette: {
		primary: {
			light: 'hsl(240, 78%, 98%)',
			main: 'hsl(233, 13%, 49%)',
			dark: 'hsl(232, 13%, 33%)'
		},
		secondary: {
			main: 'hsl(234, 14%, 74%)',
			light: 'hsl(239, 62%, 87%)'
		}
	}
})