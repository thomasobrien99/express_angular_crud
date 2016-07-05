app.service('CarService', function($http){
	return {
		getAllCars: function(){
			return $http.get('/cars');
		},
		addCar: function(car){
			return $http.post('/cars', {car})
		},
		editCar: function(car){
			let id = car.id
			return $http.put('/cars/'+id, {car})
		},
		getCar: function(id){
			return $http.get('/cars/'+id)
		},
		deleteCar: function(id){
			return $http.delete('/cars/'+id)
		}
	}
})