function api_login(user,pass){
    // var data = {};
    // 
    // const params = new URLSearchParams({
    //     json : JSON.stringify(obj),
    //     name : user,
    // }).toString();

    // const url =
    // "http://0.0.0.0:8081/add?"  + params
    // ;

    // axios
    // .post(url)
    // .then(res => {
    //     console.log( res.data);
    // })
    // .catch(err => {
    //     console.log(err);
    // });

    var obj = {user: user, pass: pass};
    $.post('http://0.0.0.0:8081/add', {  json : JSON.stringify(obj),name: user}, 
        function(returnedData){
            console.log(returnedData);
    }).fail(function(e){
        console.log("error");
    });

    obj = {points: 0};
    $.post('http://0.0.0.0:8081/add', {  json : JSON.stringify(obj),name: user+".points"}, 
        function(returnedData){
            console.log(returnedData);
    }).fail(function(e){
        console.log("error");
    });

    

}

function add(entry, json){
    $.post('http://0.0.0.0:8081/add', {  json : JSON.stringify(json),name: entry}, 
    function(returnedData){
        console.log(returnedData);
    }).fail(function(e){
        console.log("error");
    });
}


function user_exists_async(user){

    return (async () => {
        var a = await $.post('http://0.0.0.0:8081/find', {name: user}, 
        function(returnedData){
            res = JSON.parse(returnedData);
        //user_exists_cbk(res);
        })
        return a;
    })();

    // return res;
    //res = JSON.parse(res);
    //

}


function aget(name){
    return (async () => {
        var a = await $.post('http://0.0.0.0:8081/get', {name: name}, 
        function(returnedData){
            
        })
        return a;
    })();
}