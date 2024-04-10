import burger1 from './burger1.jpg'
import burger2 from './burger2.jpg'
import burger3 from './burger3.jpg'
import burger4 from './burger4.jpg'
import burger5 from './burger5.jpg'

import gyros1 from './gyros1.jpg'
import gyros2 from './gyros2.jpg'
import gyros3 from './gyros3.jpg'
import gyros4 from './gyros4.jpg'
import gyros5 from './gyros5.jpg'

import pizza1 from './pizza1.jpg'
import pizza2 from './pizza2.jpg'
import pizza3 from './pizza3.jpg'
import pizza4 from './pizza4.jpg'
import pizza5 from './pizza5.jpg'

import pasta1 from './pasta1.jpg'
import pasta2 from './pasta2.jpg'
import pasta3 from './pasta3.jpg'
import pasta4 from './pasta4.jpg'
import pasta5 from './pasta5.jpg'


export const foodTypes = [
	{
		name: 'burger',
		img: burger1,
		id: crypto.randomUUID()
	},
	{
		name: 'gyros',
		img: gyros1,
		id: crypto.randomUUID()
	},
	{
		name: 'pizza',
		img: pizza1,
		id: crypto.randomUUID()
	},
	{
		name: 'pasta',
		img: pasta1,
		id: crypto.randomUUID()
	},
]


// 24 foods (6 burger, 6 gyros, 6 pizza, 6 pasta)
export const foods = [
	{
		name: 'Burger 1',
		category: 'burger',
		img: burger1,
		id: crypto.randomUUID(),
		price: Math.floor(Math.random() * 20 + 7)
	},
	{
		name: 'Burger 2',
		category: 'burger',
		img: burger2,
		id: crypto.randomUUID(),
		price: Math.floor(Math.random() * 20 + 7)
	},
	{
		name: 'Burger 3',
		category: 'burger',
		img: burger3,
		id: crypto.randomUUID(),
		price: Math.floor(Math.random() * 20 + 7)
	},
	{
		name: 'Burger 4',
		category: 'burger',
		img: burger4,
		id: crypto.randomUUID(),
		price: Math.floor(Math.random() * 20 + 7)
	},
	{
		name: 'Burger 5',
		category: 'burger',
		img: burger5,
		id: crypto.randomUUID(),
		price: Math.floor(Math.random() * 20 + 7)
	},
	{
		name: 'Pizza 1',
		category: 'pizza',
		img: pizza1,
		id: crypto.randomUUID(),
		price: Math.floor(Math.random() * 20 + 7)
	},
	{
		name: 'Pizza 2',
		category: 'pizza',
		img: pizza2,
		id: crypto.randomUUID(),
		price: Math.floor(Math.random() * 20 + 7)
	},
	{
		name: 'Pizza 3',
		category: 'pizza',
		img: pizza3,
		id: crypto.randomUUID(),
		price: Math.floor(Math.random() * 20 + 7)
	},
	{
		name: 'Pizza 4',
		category: 'pizza',
		img: pizza4,
		id: crypto.randomUUID(),
		price: Math.floor(Math.random() * 20 + 7)
	},
	{
		name: 'Pizza 5',
		category: 'pizza',
		img: pizza5,
		id: crypto.randomUUID(),
		price: Math.floor(Math.random() * 20 + 7)
	},
	{
		name: 'Gyros 1',
		category: 'gyros',
		img: gyros1,
		id: crypto.randomUUID(),
		price: Math.floor(Math.random() * 20 + 7)
	},
	{
		name: 'Gyros 2',
		category: 'gyros',
		img: gyros2,
		id: crypto.randomUUID(),
		price: Math.floor(Math.random() * 20 + 7)
	},
	{
		name: 'Gyros 3',
		category: 'gyros',
		img: gyros3,
		id: crypto.randomUUID(),
		price: Math.floor(Math.random() * 20 + 7)
	},
	{
		name: 'Gyros 4',
		category: 'gyros',
		img: gyros4,
		id: crypto.randomUUID(),
		price: Math.floor(Math.random() * 20 + 7)
	},
	{
		name: 'Gyros 5',
		category: 'gyros',
		img: gyros5,
		id: crypto.randomUUID(),
		price: Math.floor(Math.random() * 20 + 7)
	},
	{
		name: 'Pasta 1',
		category: 'pasta',
		img: pasta1,
		id: crypto.randomUUID(),
		price: Math.floor(Math.random() * 20 + 7)
	},
	{
		name: 'Pasta 2',
		category: 'pasta',
		img: pasta2,
		id: crypto.randomUUID(),
		price: Math.floor(Math.random() * 20 + 7)
	},
	{
		name: 'Pasta 3',
		category: 'pasta',
		img: pasta3,
		id: crypto.randomUUID(),
		price: Math.floor(Math.random() * 20 + 7)
	},
	{
		name: 'Pasta 4',
		category: 'pasta',
		img: pasta4,
		id: crypto.randomUUID(),
		price: Math.floor(Math.random() * 20 + 7)
	},
	{
		name: 'Pasta 5',
		category: 'pasta',
		img: pasta5,
		id: crypto.randomUUID(),
		price: Math.floor(Math.random() * 20 + 7)
	},
]