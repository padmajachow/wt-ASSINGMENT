function validation(){
    var user=document.getElementById("txtusername").value;
    var name=document.getElementById("txtname").value;
    var num=document.getElementById("txtnum"),value;
    var adress=document.getElementById("txtaddress").value;
    var password=document.getElementById("txtpassword").value;
   var u=/^[A-Z][a-z]{4,8}$/;
   var n=/^[A-Z][.][a-z]*$/;
   var num=/^[0-9]{10}*$/;
   var a=/^[A-z][0-9./][a-z]*$/;
   var p=/^[A_Z][a-z@.-_0-9]$/;
if( user=='' || name=='' || dept='' || adress='' || password='' ){
    window.alert('please enter all the fields');
    return false;
}
else{
    if(u.test(user)&&n.test(name)&&d.test(dept)&&a.test(adress)&&p.test(password)){
        window.alert("sucessfully registered");
        return true;
    }
    else{
        window.alert("something went wrong");
        return false;
    }
}
