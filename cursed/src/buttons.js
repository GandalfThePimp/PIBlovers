function login_button(){
    user_exists_async(document.getElementById('username').value).then((res)=>{
        var v = JSON.parse(res).exists;
        console.log(res);
        if(v == 1){
            //goto welcome_login
            sessionStorage.setItem('user', document.getElementById('username').value);
            document.location = "welcome_login.html";
        }else{
            document.getElementById("loginbtn").remove();
        }
    }).catch((err)=>{throw err})
}

function signup_button(){
    api_login(document.getElementById('username').value,document.getElementById('password').value);
    sessionStorage.setItem('user',document.getElementById('username').value);
    document.location = "welcome_login.html";
}

function noacc_button(){
    //goto no acc
    document.location = "welcome_noacc.html";

}