    var app = angular.module('appContact', []);

    app.controller('contactCtrl', function($scope) {

    	$scope.contacts = [
    		{
    			nom : 'Topin',
    			prenom : 'Michel',
    			email : 'mt@laposte.net',
    			photo: 'cam.jpg',
    			tags: 'basket'
    		},
    		{
    			nom : 'Robert',
    			prenom : 'Durant',
    			email : 'rdurant@gmail.net',
    			photo: 'robert.jpg',
    			tags: 'front end'
    		}
  		];

  		$scope.removeContact = function (index) {
  			$scope.contacts.splice(index,1);
  		}

  		$scope.addContact = function () {


  			var reader = new FileReader();
  		
  			$scope.contacts.push({
  				nom : $scope.newNom,
  				prenom : $scope.newPrenom,
  				email : $scope.newEmail,
  				photo : $scope.newPhoto,
  				tags : $scope.newTags,
  			})



  		}



    });


   

		