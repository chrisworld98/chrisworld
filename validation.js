function validateForm(){  
var name=document.form1.name.value;   
var num=document.form1.mobile.value;
var dob=document.form1.dob.value;
var email=document.form1.email.value;
var gender=document.form1.gender.value;
var mark=document.form1.mark.value; 
var x=document.form1.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (name==null || name==""){  
  alert("Name can't be blank");  
  return false;  
}

if (dob==null || dob==""){  
  alert("Date of Birth can't be blank");  
  return false;  
}


if (num==null || num==""){  
  alert("Phone can't be blank");  
  return false;  
}


if (isNaN(num)){  
 alert("Enter Numeric value only");  
  return false;  
}else if (num.length!=10) {
	alert("Enter a valid number");
	return false;
}

if (email==null || email==""){  
  alert("Email can't be blank");  
  return false;  
}
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address ");  
  return false;  
  }  


if (gender==null || gender==""){  
  alert("Provide a gender");  
  return false;  
}

if (mark==null || mark==""){  
  alert("Mark can't be blank");  
  return false;  
}

else{
alert("Submited Successfully")  
  return true;  
  }  

}
