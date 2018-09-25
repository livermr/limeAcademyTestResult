function braces(input){
    var map = new Map();//map for expected values
    map.set('[', ']');
    map.set('(', ')');
    map.set('{', '}');
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "";
    var stack = new Array();//consists expected values in appropriate order
    var lines = input.split('\n');

    if(lines.length > 15){
        alert("Too many rows!");
        return;
    }

    for (var i = 0; i < lines.length; i++){
        var has_result = false;
        
        if(lines[i].length < 1){
            alert("No data in line: "+(i+1));
            return;
        } else if(lines[i].length > 100){
            alert("Too much data in line: "+(i+1));
            return;
        }

        for(var j = 0; j < lines[i].length; j++){
            var letter = lines[i].substr(j, 1);

            if(map.get(letter) != undefined){
                stack.push(map.get(letter)); //add expected letter
            } else{
                if(letter != stack.pop()){ //check expected value
                    resultElement.innerHTML += "NO";
                    has_result = true;
                    break;
                }
            }
        }
        if(!has_result){
            if(stack.length == 0){
                resultElement.innerHTML += "YES";
            }else{
                resultElement.innerHTML += "NO";
            }
        }

        if(i < lines.length-1) {
            resultElement.innerHTML += '\n';
        }
    }
}
