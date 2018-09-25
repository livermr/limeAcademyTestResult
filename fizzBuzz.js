function fizzBuzz(limit){
    var three = 'Fizz';
    var five = 'Buzz';
    var resultElement = document.getElementById("result");

    if(isNaN(limit)){
        resultElement.innerHTML = "Input value is invalid: not a number!";
    } else{

        if(limit < 1 || limit >= 2*10**5){
            resultElement.innerHTML = 'Value is out of range: between 1 and 199999';
        }else {
            resultElement.innerHTML = "";

            for(var i = 1; i <= limit; i++) {
                if(i %3 == 0){
                    resultElement.innerHTML += three;
            
                    if(i %5 == 0){
                        resultElement.innerHTML += five;
                    }
                } else if(i %5 == 0){
                    resultElement.innerHTML += five;

                } else {
                    resultElement.innerHTML += i;
                }
                
                if(i < limit) {
                    resultElement.innerHTML += '\n';
                }
            }
        }
    }
}
