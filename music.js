var f = [];

function numOfPlaylists(N, K, L){
    
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "";
    N = Number(N);
    K = Number(K);
    L = Number(L);

    if(isNaN(N) || N < 1 || N > 100){
        return "Invalid parameter 'N'! It should be between 1 and 100";
    }

    if(isNaN(K) || K < 0 || K > N){
        return "Invalid parameter 'K'! It should be between 0 and "+N;
    }

    if(isNaN(L) || L < N || L > 100){
        return "Invalid parameter 'L'! It should be between "+ N +" and 100";
    }

    if(K > 0){
        if(L==N){
            return factorial(N);
        } else {
            return 0;
        }    
    } else {
        var result = N**L;
        if(result > (10**9+7)){
            return 1000000007;
        }
    }
}

function factorial(n) {
    if (n == 0 || n == 1){
        return 1;
    }

    if (f[n] > 0){
        return f[n];
    }
    return f[n] = factorial(n-1) * n;
}
