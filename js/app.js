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

      // Fonction d'ajout de contact
  		$scope.addContact = function () {

  		
  			$scope.contacts.push({
  				nom : $scope.newNom,
  				prenom : $scope.newPrenom,
  				email : $scope.newEmail,
  				photo : $scope.newPhoto,
  				tags : $scope.newTags,
  			})

  		}

      // Fonction de suppression de contact
      $scope.removeContact = function (index) {
        $scope.contacts.splice(index,1);
      }

      // Fonction d'injection de contact dans le formulaire lorsqu'il y a une modification
      $scope.injectContact = function (index) {

          $scope.modifyPrenom = $scope.contacts[index]['prenom'];
          $scope.modifyNom = $scope.contacts[index]['nom'];
          $scope.modifyEmail = $scope.contacts[index]['email'];
          $scope.modifyPhoto = $scope.contacts[index]['photo'];
          $scope.modifyTags = $scope.contacts[index]['tags'];

          $scope.index = [index];

      }

      // Fonction de modification de contact
      $scope.modifyContact = function () {

          // alert ($scope.index);
          
          $scope.contacts[$scope.index]['prenom'] = $scope.modifyPrenom;
          $scope.contacts[$scope.index]['nom'] = $scope.modifyNom;
          $scope.contacts[$scope.index]['email'] = $scope.modifyEmail;
          $scope.contacts[$scope.index]['photo'] = $scope.modifyPhoto;
          $scope.contacts[$scope.index]['tags'] = $scope.modifyTags;

          $('#myModalModify').modal('hide');
      
      }




    });


   

		