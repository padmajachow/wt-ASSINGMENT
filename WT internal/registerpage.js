function validation(){
    var user=document.getElementById("txtusername").value;
    var name=document.getElementById("txtname").value;
    var num=document.getElementById("txtnum"),value;
    var adress=document.getElementById("txtaddress").value;
    var password=document.getElementById("txtpassword").value;
    var Occupation=document.getElementById("txtOccupation").value;
    var Qualification=document.getElementById("txtQualification").value;
    var gaurdian=document.getElementById("txtgaurdian").value;
    var gaurdian num=document.getElementById("txtgaurdian num").value;
    var gaurdian address=document.getElementById("txtgaurdian address").value;
   var u=/^[A-Z][a-z]{4,8}$/;
   var n=/^[A-Z][.][a-z]*$/;
   var num=/^[0-9]{10}*$/;
   var a=/^[A-z][0-9./][a-z]*$/;
   var p=/^[A-Z][a-z@.-_0-9]$/;
   var o=/^[A-Z][a-z]{15}$/;
   var q=/^[A-Z][a-z]{10}$/;
   var g=/^[A-Z][.][a-z]*$/;
   var gn=/^[0-9]{10}*$/;
   var ga=/^[A-Z][0-9./][a-z]*$/;
if( user=='' || name==''|| num=='' || dept='' || adress='' || password='' || Occupation='' || Qualification='' || gaurdian=''|| gaurdian num='' gaurdian address=''){
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
