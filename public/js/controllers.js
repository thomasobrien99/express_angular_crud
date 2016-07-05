app.controller('CarsController', CarsController)
CarsController.$inject = ["CarService"];

function CarsController(CarService){
  vm = this;
  CarService.getAllCars().then(function(res){
		vm.cars = res.data
  });
}

app.controller('ShowCarController', ShowCarController)
ShowCarController.$inject = ["CarService", "$route"];

function ShowCarController(CarService, $route){
	vm = this;
	CarService.getCar($route.current.params.id).then(function(res){
		vm.car = res.data;
	})
}

app.controller('EditCarController', EditCarController);
EditCarController.$inject = ["CarService", "$route"];

function EditCarController(CarService, $route){
	vm = this;
	CarService.getCar($route.current.params.id).then(function(res){
		vm.car = res.data
	})
	vm.submit = function(){
		CarService.editCar(vm.car).then(function(res){
			location.pathname = '/'
		})
	}
	vm.delete = function(){
		CarService.deleteCar(vm.car.id).then(function(res){
			location.pathname = '/'
		})
	}
}

app.controller("NewCarController", NewCarController)
NewCarController.$inject = ["CarService"];

function NewCarController(CarService){
	vm = this;
	vm.submit = function(){
		CarService.addCar(vm.car).then(function(res){
			location.pathname = '/'
	  })
	}
}