
	   	var username = document.getElementById('inputdata');
		var password = document.getElementById('password');
	 	var email = document.getElementById('email');
	 	var enter = document.getElementById('enter'); 
	 	
       	var  users={};
       	
	 	function CreateData(){ 
	 		
				users.username=username.value;
				users.password=password.value;
				users.email=email.value;
				users=JSON.stringify(users);
				localStorage.setItem(username.value,users);
				
	 	}
	 	function doit(){
     	var res=true;
    	var username1=username.value;
    	var password1=password.value;
    	if(password1==''){
    		//alert("用户名不能为空");
    		res=false;
    	}
    	if(username1==''){
    		//alert("密码不能为空");
    		res=false;
    	}
    	
    	
  	return res;
    }
	 	function ckMail(){
	 		var ser=true;
	 	    var email1=email.value;
	 		
	 		//var reg=/^\w+(\.[a-zA-Z]{2,3}){1,2}$/;
	 		//var reg=/^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.]+[A-Za-zd]{2,5})$/;
	 		var reg=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
	 		if(reg.test(email1)){
	 			alert("邮箱验证通过");
	 			ser=true;
	 		}else{
	 			alert("邮箱验证失败");
	 			ser=false;
	 		}
	 		return ser;
	 	}
	 	function validate(){
	 		var stra = '';
	 		var username1=username.value;
	 		//var s=true;
	 		if((localStorage.getItem(username1))!=null){
	 			alert("此用户名已注册");
	 			//stra +="此用户名已注册";
	 			//str += "<tr><td rowspan = '5' style = 'width:150px'><img style = 'width:100px;height:100px;' src = '"+allPro[i].pro_image+"'/><td>"+
	 			//s=false;
	 			
	 		}
	 		//username.placeholder.innerText = stra;
	 		//return s;
	 		
	 	}
	 	function stroge1() 
	 	 { 
	 	 	
	 		var username1=username.value;
	 	 	if(typeof(Storage)!=="undefined"){
	 	 	  //doit();
	 	 	 if((doit())&&(ckMail())&&((localStorage.getItem(username1))==null))
	 	 	 {
	 	 	  CreateData();    
	 	 	  alert("注册成功");
	 	 	  window.location.href='sign-in.html';
	 	 	 }else{
	 	 	 	alert("注册失败");
	 	 	 }
           }
		else
		  {
		  console.log( "Sorry! No web storage support..");
		  }
	 	}
	 	 
	 	 
	 	  enter.addEventListener("click" , stroge1, false);
