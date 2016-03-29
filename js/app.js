    var app = angular.module('appContact', []);

    app.controller('contactCtrl', function($scope) {

      var fileInput = $('#fileInput');
      var spanInputFile = $('#spanInputFile');
      var divPhotoPrev = $('#divPhotoPrev');
      var imageType = /image.*/;




      $scope.contacts = [
        {
          nom : 'Topin',
          prenom : 'Michel',
          email : 'mt@laposte.net',
          photo: 'img/cam.jpg',
          tags: 'basket'
        },
        {
          nom : 'Robert',
          prenom : 'Durant',
          email : 'rdurant@gmail.net',
          photo: 'img/robert.jpg',
          tags: 'front end'
        }
      ];



      // Fonction d'ajout de contact
      $scope.addContact = function() {

          var fileInput = $('#fileInput')[0].files[0];
              
          var charge=new FileReader();
              
          charge.readAsDataURL(fileInput);

          // On charge l'image
          charge.onloadend = function(e){   

                var newPhoto = e.target.result; 
                // console.log(newPhoto);

                // Puis on insert les données dans le tableau des contacts
                $scope.contacts.push({
                  nom : $scope.newNom,
                  prenom : $scope.newPrenom,
                  email : $scope.newEmail,
                  photo : newPhoto,
                  tags : $scope.newTags,
                })

                // console.log($scope.contacts);
      
                $('#myModalAdd').modal('hide');
                
          }


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

          $('#myModalAdd').modal('hide');

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


   

		