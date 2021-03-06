angular
    .module('app')
    .controller('CasasOracaoController', CasasOracaoController);

CasasOracaoController.$inject = ['$scope', 'Data', 'Modal'];

function CasasOracaoController($scope, Data, Modal) {
    $scope.Modal = Modal;
    $scope.Data = Data;
    $scope.usuario = Data.getUsuario();
    
    $scope.$watch('Data.getCasasOracao()', function(casas_oracao) {
        $scope.casas_oracao = casas_oracao;
    });

    $scope.gerarCor = function(valor) {
        if (valor == 'sim')
            return 'success';
        if (valor == 'nao')
            return 'danger';
        return '';
    };

    $scope.gerarIcone = function(valor) {
        if (valor == 'sim')
            return [ "fa", "fa-check" ];
        if (valor == 'nao')
            return [ "fa", "fa-times" ];
        return '';
    };

    $scope.novaCasaOracao = function(modal) {
        if ($scope.usuario.tipo == 'Administrador') {
            Modal.open(modal, null);
        }
    };

    $scope.editarCasaOracao = function(modal, casa_oracao) {
        if ($scope.usuario.tipo != 'Geral') {
            Modal.open(modal, casa_oracao);
        }
    };
}
