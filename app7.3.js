//Counter function using clousure


var add= (function (){
  
    var counter = 0;
    return function(){
        return counter += 1;
    }
    
})();

function counter1(){
   var x = add(); // calling clousure function
    console.log("You have Clicked Button for "+ x +" Times")
}
//console.log("Area of Circle with radius 5 is:" + area);
