
	 	var inputdata =document.getElementById('inputdata');
	 	var password = document.getElementById('password');
	 	var enter = document.getElementById('enter');	
	 	function check() {
		 	   var obj = JSON.parse(localStorage.getItem(inputdata.value));
              if(obj != null&&obj.password == password.value){
                  alert('登录成功');
                  sessionStorage.logined_name = obj.username;
                  console.log(sessionStorage.logined_usename);
                  window.location.href = 'shop.html';
                
               }else {
                  alert('失败');
               }
            } 
            
            enter.addEventListener("click" , check, false);
