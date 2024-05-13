var name=document.getElementById('name').value;
var dob=document.getElementById('dob').value;
var gender=document.getElementById('gender').value;
var email=document.getElementById('email').value;
var number=document.getElementById('number').value;
var address=document.getElementById('address').value;
var city=document.getElementById('city').value;
var state=document.getElementById('state').value;
var zip_code=document.getElementById('zip_code').value;
var preference=document.getElementById('preference').value;
var diet=document.getElementById('diet').value;
var size=document.getElementById('size').value;
function data(){
if(name==""||dob==""||gender==""||email==""||number==""||address==""||city==""||state==""||zip_code==""||preference==""||diet==""||size=="")
{
  alert("all fields are mandatory");
  return false;
}
else if(number.length<10||number.lenght>10){
  alert("enter valid number");
}
else if()isNaN(number){
  alert("enter valid number ");
}
else{
   true;
}
}