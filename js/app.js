angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('AccordionDemoCtrl', function ($scope) {
  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
});
angular.module('ui.bootstrap.demo').controller('TooltipDemoCtrl', function ($scope) {
  $scope.dynamicTooltip = 'Literas de tres pisos';
  $scope.dynamicTooltipText = 'literas';
  $scope.htmlTooltip = 'I\'ve been made <b>bold</b>!';
});