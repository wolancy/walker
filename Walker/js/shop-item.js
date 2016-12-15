
 	var demond = document.getElementById('demond');
 	var price = document.getElementById('price');
 	var numbers = document.getElementById('numbers');
 	var pro_image = document.getElementById('pro_image');
 	var user_pro = {};
    var add = document.getElementById('add');
    var result=false;
    add.onclick = function(){
    	var logined_name = sessionStorage.getItem('logined_name');
    	if(logined_name!=null){
    	 for (var i=0;i<localStorage.length;i++) {
    	 	 var username = localStorage.key(i).substring(0,3); 
    	 	 var pro = localStorage.key(i).substring(4,7);
    	 	if(logined_name == username && pro == demond.innerText)
               { 
               	  var mykey =localStorage.key(i);
               	  var mypro = {};
               	  mypro = JSON.parse(localStorage.getItem(mykey));
               	  mypro.numbers= parseInt(mypro.numbers)+parseInt(numbers.value);
               	  mypro=JSON.stringify(mypro);
               	  localStorage.setItem(localStorage.key(i),mypro);
               	  var result = true;	
               	  
          alert('添加成功');
               	} 
	     }
	      if(!result)
	      {
          user_pro.demond = demond.innerText;
				 	user_pro.price = price.innerText;
				  user_pro.numbers = numbers.value;
				 	user_pro.pro_image = pro_image.getAttribute('src');
				 	console.log(user_pro);
				 	userpros=JSON.stringify(user_pro);
				 	var nowname = sessionStorage.getItem('logined_name');
				  localStorage.setItem(nowname+"_"+user_pro.demond,userpros); 	
          alert('添加成功');
	      }
	      
	     }else{
	     	alert("请先登录或注册");
	     }
 	}
                	function onlyNum(){
                		if(!((event.keyCode>=48&&event.keyCode<=57)||
                		(event.keyCode>=96&&event.keyCode<=105)||
                		(event.keyCode==8)))
                		event.returnValue=false;
                	}
                	