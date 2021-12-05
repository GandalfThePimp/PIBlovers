function login_button(){
    user_exists_async(document.getElementById('username').vlaue).then((res)=>{
        JSON.parse(res).exists == 1;
    });
}