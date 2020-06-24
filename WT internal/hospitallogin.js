function validation(){
    var username=document.getElementById("txtusername").value;
    var password=document.getElementById("txtpassword").value;
    var u=/^[A-Z][a-z]{4,8}$/;
    var p=/^[A_Z][a-z@.-_0-9]$/;
if( username=='' || password=='' ){
    window.alert('please enter all the fields');
    return false;
}
else{
    if(u.test(username) && p.test(password)){
        window.alert("sucessfull login");
        return true;
    }
    else{
        window.alert("something went wrong");
        return false;
    }
}
