const express = require("express");
const router = express.Router();
const knex = require("../db/knex");

router.route('/')
	.get((req, res)=>{
		knex('cars', '*')
		.then((cars)=>{
			res.send(cars)
		})
	})
	.post((req, res)=>{
		knex('cars')
		.insert(req.body.car)
		.then((car)=>{
			res.send(car)
		})
	})

router.route('/:id')
	.get((req, res)=>{
		knex('cars')
		.where('id', req.params.id)
		.first()
		.then((car)=>{
			res.send(car)
		})
	})
	.put((req, res)=>{
		knex('cars')
		.where('id', req.params.id)
		.update(req.body.car)
		.then(()=>{
			knex('cars', '*')
			.then((cars)=>{
				res.send(cars)
			})
		})
	})
	.delete((req, res)=>{
	  knex('cars')
	  .where('id', req.params.id)
	  .delete()
	  .returning('*')
	  .then((car)=>{
	  	res.send(car)
	  });
	})

module.exports = router;