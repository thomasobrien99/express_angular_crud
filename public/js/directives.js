app.component('caCarsList', {
	templateUrl: '../templates/partials/carsList.html',
	controller: 'CarsController',
	controllerAs: 'cars'
})
app.component('caCarDetails', {
	templateUrl: '../templates/partials/carDetails.html',
	controller: 'ShowCarController',
	controllerAs: 'showCar'
})
app.component('caEditForm', {
	templateUrl: '../templates/partials/editForm.html',
	controller: 'EditCarController',
	controllerAs: 'editCar'
})
app.component('caNewForm', {
	templateUrl: '../templates/partials/newForm.html',
	controller: 'NewCarController',
	controllerAs: 'newCar'
})