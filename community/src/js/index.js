angular.module("app",["ui.router"])
.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("a")
	$stateProvider.state({
		name:"a",
		url:'/a',
		templateUrl:"router/index1.html"
	}).state({
		name:"b",
		url:'/b',
		templateUrl:"router/index2.html"
	}).state({
		name:"c",
		url:'/c',
		templateUrl:"router/index3.html"
	}).state({
		name:"activity",
		url:'/activity',
		templateUrl:"router/index4.html"
	}).state({
		name:"activity-a",
		url:'/activity-a',
		templateUrl:"router/index4.html"
	}).state({
		name:"activity-b",
		url:'/activity-b',
		templateUrl:"router/index4.html"
	}).state({
		name:"return",
		url:'/return',
		templateUrl:"router/index2.html"
	})
})
.directive("inputFile",function(){
	return {
		template:'<div class="file-input">'+
                    '<label for="{{id}}" class="form-control file-upload"></label>'+
                    '<input type="file" class="form-control input-file" id="{{id}}" placeholder="Email">'+
                '</div>',
        restrict:'E',
        scope:{},
        controller:function($scope){
        	$scope.id = 'id'+$scope.$id
        },
        link:function(scope,ele){
        	var divinput = ele.find('div');
        	var input = $(divinput).find('input');
        	input.on('change',function(){
        		var reader = new FileReader();
        		reader.readAsDataURL(this.files[0]);
        		reader.onload = function(){
        			console.log(this.result)
        			$(divinput).find('label')[0].style.background = 'url('+this.result+') no-repeat center';
        		}
        	})
        }
	}
})
.run(function($rootScope){
	$rootScope.fn = function(tet){
		if(tet){
			$(".zuijia").append('<li class="list-group-item item1">'+tet+'<span class="badge badge-a">回复</span><span class="badge badge-a">2017-3-5 09:57</span></li>')
		}
		
	}
})
