var request = new XMLHttpRequest();

//Peticion Http en Javascript Puro
request.open('GET', 'https://reqres.in/api/users', true);
//Para mandar argumentos
request.send(null);

request.onreadystatechange = function(state) {
    if (request.readyState === 4) {
        var resp = request.response;
        var respObj = JSON.parse(resp);

        console.log(respObj);
        console.log(respObj.page);
    }
};