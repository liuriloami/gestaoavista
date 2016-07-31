angular
    .module('app')
    .controller('UsuariosController', UsuariosController);

UsuariosController.$inject = ['$scope', 'Data', 'Modal'];

function UsuariosController($scope, Data, Modal) {
    $scope.Modal = Modal;
    $scope.Data = Data;

    $scope.$watch('Data.getUsuarios()', function(usuarios) {
        $scope.usuarios = usuarios;
    });

    $scope.novoUsuario = function() {
        Modal.open('usuario', {});
    }

    $scope.editarUsuario = function(usuario) {
        Modal.open('usuario', usuario);
    }

}
