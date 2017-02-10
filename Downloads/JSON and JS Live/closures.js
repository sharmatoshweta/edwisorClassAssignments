// this is a function


var firstFunction = function(){

	var aGlobalVariable = "I am global";
	var aVariableInsideFirstFunction = "My value is 1";
	console.log(aVariableInsideFirstFunction);
	secondFunction(aGlobalVariable,aVariableInsideFirstFunction);	

}// end first function

var secondFunction = function(var1,var2){

	console.log(var1);
	console.log(var2);
	var aVariableInsideSecondFunction = "My value is 2";
	console.log(aVariableInsideSecondFunction);

}

firstFunction();

