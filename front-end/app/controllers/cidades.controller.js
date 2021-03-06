angular
    .module('app')
    .controller('CidadesController', CidadesController);

CidadesController.$inject = ['$scope', 'Data', 'Modal'];

function CidadesController($scope, Data, Modal) {
    $scope.Modal = Modal;
    $scope.Data = Data;
    
    $scope.usuario = Data.getUsuario();
    if ($scope.usuario.tipo != 'Administrador') {
        $location.path('/informacoes-gerais');
    }

    $scope.$watch('Data.getCidades()', function(cidades) {
        $scope.cidades = cidades;
    });

    $scope.novaCidade = function() {
        Modal.open('cidade', null);
    }

    $scope.editarCidade = function(cidade) {
        Modal.open('cidade', cidade);
    }

}
