angular
	.module("testApp")
	.controller("testController", ["$scope", "$http", function($scope, $http) {

		console.log("Controller initialized.");
		$scope.outTask1 = "...solution here";
		$scope.outTask2 = "...solution here";
		$scope.outTask3 = "...solution here";

		
		//Here comes the code deployed for the tasks
		
		//TASK 1
		var calculatorAux = [];
		function calculate(string){
		    if (string == ""){
		    	return 0;
		    }
		    for (var i=0;i<string.length;i++){
		    	console.log(string);
		    	if (!isNaN(Number(string.charAt(i))) ){
		    	  if (string.charAt(i-1) == "+"){
		    		calculatorAux.push(Number(string.charAt(i)));
		    	  }
		    	  if (string.charAt(i-1) == "-"){
		    	  	calculatorAux.push(Number(string.charAt(i))* -1);
		        }
		        if (string.charAt(i-1) == "*"){
		        	if(string.charAt(i-3) == "-"){
		        		calculatorAux.push((Number(string.charAt(i-2))*-1)*Number(string.charAt(i)));
		        		calculatorAux[calculatorAux.length-2] = 0;
		        	}else{
		    	  		calculatorAux.push(Number(string.charAt(i-2))*Number(string.charAt(i)));
		    	  	     calculatorAux[calculatorAux.length-2] = 0;
		        	}
		        }
		        if (string.charAt(i-1) == "/"){
		        	if(string.charAt(i-3) == "-"){
		        		calculatorAux.push((Number(string.charAt(i-2))*-1)/Number(string.charAt(i)));
		        		calculatorAux[calculatorAux.length-2] = 0;
		        	}else{
		    	  	calculatorAux.push(Number(string.charAt(i-2))/Number(string.charAt(i)));
		    	  	calculatorAux[calculatorAux.length-2] = 0;
		        	}
		        }
		        
		        if (i == 0){
		        	calculatorAux.push(Number(string.charAt(i)));
		        }
			}
			if ( i==0 && (string.charAt(0) == "*")){
			    calculatorAux.push(string.charAt(i));
			}
		    }
		    console.log(calculatorAux);
		    var res = calculatorAux.reduce(function(previousValue,currentValue,index){
				return previousValue+currentValue;
		    });
		    //var res2 = res;
		    calculatorAux = [];
		    return res;
		}
		
		
		$scope.runTask1 = function(){
		   var exp = $scope.task1_input;
		   var array1 = [];
		   var temp = "";
		   
		   while (exp.indexOf("(") != -1 || exp.indexOf(")") != -1){
			var index1 = exp.indexOf("(");
			var index2 = exp.indexOf(")");
			
			var first = exp.substring(index1+1,index2);
			var rest = exp.substring(index2+1,exp.length);
			array1.push(calculate(first));
			
			if (rest.indexOf("(") == -1){
			    array1.push(calculate(rest));
			    exp = "";
			}else{
				index1 = rest.indexOf("(");
				array1.push(calculate(rest.substring(0,index1)));
				exp = rest.substring(index1,rest.length);
			}
		    }
		    if ($scope.task1_input.indexOf("(") == -1){
		    	$scope.outTask1 = calculate($scope.task1_input);
		    	console.log("nodeberiaestar aqui");
		    }
		    console.log(array1);
			$scope.outTask1 = array1.reduce(function(previousValue,currentValue,index){
		    	   return previousValue+currentValue;
		    });;
		};
		//TASK 2
		
		var auxiliar = "";
		function aux(string){
			if (string == ""){
				return "";
			}
			if(isSorted(string)){
				    $scope.outTask2 = string;
			}else{
			if(Number(string.charAt(0)) < Number(string.charAt(1))){
				      console.log(string.charAt(0)+" is lesser than "+string.charAt(1));
					auxiliar = auxiliar.concat(string.charAt(0));
					console.log(string.substring(1,string.length));
					aux(string.substring(1,string.length));
			} else {
				auxiliar = auxiliar.concat((Number(string.charAt(0))-1).toString());
				
				console.log(auxiliar);
				for (var j=0;j<string.length-1;j++){
					auxiliar = auxiliar.concat("9");
				}
				console.log(auxiliar);
				aux(auxiliar);
			}
			
			auxiliar = "";
			}
			return true;
		}
		function isSorted(number){
			for (var x = 0; x < number.length - 1; x++) {
			        if (Number(number.charAt(x+1)) < Number(number.charAt(x))) {
			            return false;
			        }
				}
			return true;
		}
		
		
		
		$scope.runTask2 = function(){
			var number = $scope.task2_input;
			//for (var z=0;z<number.length;z++){
			aux(number);
			//}
			
		};
		//TASK 3
		$scope.runTask3 = function(){
			$scope.outTask3 = "...input empty!";
		};

}]);