!function(){"use strict";function a(){}angular.module("onBoardingApp.home",["onBoardingApp.home.controllers","onBoardingApp.home.services"]).config(a)}(),function(){"use strict";function a(a,t){function e(){d.lazyLoadParams=["/Scripts/app/shared/directive/candidateGrid.js"],d.showAction=!1,d.type="Admin Page",d.candidates=t}var d=this;e()}angular.module("onBoardingApp.home.controllers",[]).controller("HomeController",a),a.$inject=["homeService","getSecondaryCandidateService"]}(),function(){"use strict";function a(a){function t(){return a.nonParameter("GET","/Home/GetSecondaryCandidateData")}var e={getAllSecondaryCandidates:t};return e}angular.module("onBoardingApp.home.services",[]).factory("homeService",a),a.$inject=["webApi"]}(),function(){"use strict";angular.module("onBoardingApp.layout",["onBoardingApp.layout.controllers"])}(),function(){"use strict";function a(){}angular.module("onBoardingApp.layout.controllers",[]).controller("ShellController",a),a.$inject=["$scope"]}(),function(){"use strict";function a(a){a.go("adminHome")}function t(a){function t(a){return a.getAllSecondaryCandidates()}a.state("adminHome",{url:"/",controller:"HomeController",controllerAs:"vm",templateUrl:"/Scripts/app/modules/home/views/onBoardingApp.home.html",resolve:{getSecondaryCandidateService:t}}).state("allCandidates",{url:"/candidates",controller:"CandidateController",controllerAs:"vm",templateUrl:"/Scripts/app/modules/candidate/views/onBoardingApp.candidate.html",resolve:{allCandidates:["$ocLazyLoad",function(a){return a.load([{name:"onBoardingApp.candidate",files:["/Scripts/app/modules/candidate/onBoardingApp.candidate.js"],cache:!1},{name:"onBoardingApp.candidate.controllers",files:["/Scripts/app/modules/candidate/js/onBoardingApp.candidate.controller.js"],cache:!1},{name:"onBoardingApp.candidate.services",files:["/Scripts/app/modules/candidate/js/onBoardingApp.candidate.services.js"],cache:!1}])}]}}),t.$inject=["homeService"]}angular.module("onBoardingApp").config(t).run(a),a.$inject=["$state"],t.$inject=["$stateProvider"]}(),function(){"use strict";angular.module("onBoardingApp",["onBoardingApp.Core","onBoardingApp.Module"]),angular.module("onBoardingApp.Core",["ui.router","oc.lazyLoad"]),angular.module("onBoardingApp.Module",["onBoardingApp.home","onBoardingApp.layout"])}(),function(){"use strict";function a(a,t,e){function d(d,n,i){var o=e.defer();return a({method:d,url:n,data:i,cache:t}).success(o.resolve).error(o.resolve),o.promise}function n(d,n){var i=e.defer();return a({method:d,url:n,cache:t}).success(i.resolve).error(i.resolve),i.promise}var i={withParameter:d,nonParameter:n};return i}angular.module("onBoardingApp").factory("webApi",a),a.$inject=["$http","$templateCache","$q"]}(),angular.module("onBoardingApp").run(["$templateCache",function(a){a.put("scripts/app/modules/candidate/views/onBoardingApp.candidate.html",'<div><h2 class=page-title>Candidates</h2><div oc-lazy-load=vm.lazyLoadParams><div candidate-data-grid datasource=vm.candidates showaction=true canceledit=vm.cancelEdit editcandidate=vm.edit currentedit=vm.currentEdit savecandidate=vm.save><table><tr><td><input type=text class=form-control placeholder="First Name" ng-model=vm.newCandidate.first_name></td><td><input type=text class=form-control placeholder="Middle Initial" ng-model=vm.newCandidate.middle_initial></td><td><input type=text class=form-control placeholder="Last Name" ng-model=vm.newCandidate.last_name></td><td><input type=text valid-email class=form-control placeholder="Email Address" ng-model=vm.newCandidate.email></td><td><input type=text max-length-for-numbers class=form-control placeholder="Expected Salary" ng-model=vm.newCandidate.expected_salary></td><td><button type=submit class="btn btn-primary" ng-click=vm.add() tooltip="Click here to add new candidate" tooltip-placement=left><span class="glyphicon glyphicon-plus"></span> Add</button></td></tr></table></div></div></div>'),a.put("scripts/app/modules/home/views/onBoardingApp.home.html","<div><h2>{{vm.type}}</h2><div class=jumbotron><div><p>To start using Onboarding Utility, select the <a data-ui-sref=allCandidates>candidates</a> first. Once you select candidates, you will then process <span class=bold-text>Onboarding</span> for your them.</p><div oc-lazy-load=vm.lazyLoadParams><div candidate-data-grid datasource=vm.candidates showaction=false></div></div></div></div></div>"),a.put("scripts/app/modules/layout/views/shell.html",'<div data-ng-controller=ShellController><div id=adminNavBar class="navbar navbar-default navbar-fixed-top"><div class=container-fluid><div class=navbar-header><button type=button data-ng-init="navCollapsed = true" data-ng-click="navCollapsed = !navCollapsed" class=navbar-toggle data-toggle=collapse data-target=.navbar-collapse><span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a class=navbar-brand href="/"><i class=icon-home></i> <span>Sample TAC Angular Utility</span></a></div><div class="collapse navbar-collapse" data-ng-class="{\'in\': !navCollapsed}"><ul class="nav navbar-nav"><li><a data-toggle=collapse data-target=.navbar-collapse ui-sref=adminHome>Home</a></li><li><a data-toggle=collapse data-target=.navbar-collapse ui-sref=allCandidates>Users</a></li></ul></div></div></div><div data-ui-view></div></div>'),a.put("scripts/app/shared/directive/template/candidateGrid.html",'<table class="table table-bordered table-hover table-striped"><thead><tr><th>First Name</th><th>Middle Initial</th><th>Last Name</th><th>Email</th><th>Expected Salary</th><th ng-show={{vm.showaction}}>Action</th></tr></thead><tbody><ng-transclude></ng-transclude><tr><input class type=text placeholder="search first name" ng-model=search.first_name> <input class type=text placeholder="search middle name" ng-model=search.middle_initial> <input class type=text placeholder="search last name" ng-model=search.last_name> <input class type=text placeholder="search email" ng-model=search.email> <input class type=text placeholder="search salary" ng-model=search.expected_salary></tr><tr ng-repeat="candidate in vm.candidates | orderBy: \'first_name\' | filter: search"><td><div ng-hide=vm.currentEdit[candidate.candidate_id]>{{candidate.first_name}}</div><div ng-show=vm.currentEdit[candidate.candidate_id]><input type=text class=form-control ng-model=vm.itemToEdit.first_name></div></td><td><div ng-hide=vm.currentEdit[candidate.candidate_id]>{{candidate.middle_initial | uppercase}}</div><div ng-show=vm.currentEdit[candidate.candidate_id]><input type=text class=form-control ng-model=vm.itemToEdit.middle_initial></div></td><td><div ng-hide=vm.currentEdit[candidate.candidate_id]>{{candidate.last_name}}</div><div ng-show=vm.currentEdit[candidate.candidate_id]><input type=text class=form-control ng-model=vm.itemToEdit.last_name></div></td><td><div ng-hide=vm.currentEdit[candidate.candidate_id]>{{candidate.email}}</div><div ng-show=vm.currentEdit[candidate.candidate_id]><input type=text class=form-control ng-model=vm.itemToEdit.email></div></td><td><div ng-hide=vm.currentEdit[candidate.candidate_id]>{{candidate.expected_salary | currency}}</div><div ng-show=vm.currentEdit[candidate.candidate_id]><input type=text class=form-control ng-model=vm.itemToEdit.expected_salary></div></td><td ng-show={{vm.showaction}}><button class="btn btn-sm btn-info" ng-hide=vm.currentEdit[candidate.candidate_id] ng-click=vm.edit(candidate)>Edit</button> <button class="btn btn-sm btn-danger" ng-hide=vm.currentEdit[candidate.candidate_id] ng-click=vm.delete(candidate.candidate_id)>Delete</button> <button class="btn btn-sm btn-success" ng-show=vm.currentEdit[candidate.candidate_id] ng-click=vm.save(candidate)>Save</button> <button class="btn btn-sm btn-danger" ng-show=vm.currentEdit[candidate.candidate_id] ng-click=vm.cancelEdit(candidate.candidate_id)>Cancel</button></td></tr></tbody></table>')}]);