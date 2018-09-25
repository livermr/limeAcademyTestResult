function getMovieTitles(title, pageNum){
    const http = new XMLHttpRequest();
    var url = 'https://jsonmock.hackerrank.com/api/movies/search/?Title='+title;
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "";
    var json;

    if(pageNum != undefined && pageNum.length > 0 && !isNaN(pageNum)){
        url += '&page='+pageNum;
    }

    http.open("GET", url);
    http.send();
    http.onreadystatechange=function(){

        if(this.readyState == 4 && this.status == 200){
            json = JSON.parse(http.responseText);
            fillResult(json.data, resultElement);
        }
    }    
}

function fillResult(jsonArray,resultElement){
    var titles = new Array();

    if(jsonArray.length < 1){
        resultElement.innerHTML = "No Titles found!";
        return;
    }

    for (var i = 0; i < jsonArray.length; i++){
        titles[i] = jsonArray[i].Title;
    }

    titles.sort();

    for (var i = 0; i < titles.length; i++){
        resultElement.innerHTML += (i+1) + ". " +titles[i];

        if(i < titles.length-1){
            resultElement.innerHTML += "\n";
        }
    }
}
