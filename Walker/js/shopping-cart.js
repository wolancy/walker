
       var allPro = [];
       var table = document.getElementById('table');
       
         function getMydata(){
         	var logined_name = sessionStorage.getItem('logined_name');
         	
         	for(var i = 0;i < localStorage.length;i ++){
         		
         		var index = localStorage.key(i).indexOf('_');
         		var username = localStorage.key(i).substring(0,index);
         		if(logined_name == username && index != -1){
         			var keys = localStorage.key(i);
         			var values = localStorage.getItem(keys);
         			allPro.push(JSON.parse(values));
         		}
         	}
         	render(allPro);
         }
         function render(allPro){
         	var str='';
         	for(var i in allPro){
         		str += "<tr><td rowspan = '5' style = 'width:150px'><img style = 'width:100px;height:100px;' src = '"+allPro[i].pro_image+"'/><td>"+
         		"<tr><td>商品名：</td>"+"<td>"+allPro[i].demond+"</td></tr>"+
         		"<tr><td>单价：</td>"+"<td>"+allPro[i].price+"</td></tr>"+
         		"<tr><td>数量：</td>"+"<td>"+allPro[i].numbers+"</td></tr>"+
         		"<tr><td>小计：</td>"+"<td>"+allPro[i].price*allPro[i].numbers+"</td></tr>";
         	}
         	table.innerHTML = str;
         }
         var pay1=document.getElementById('pay');
         pay.onclick=function(){
         	   if(allPro.length!=0){
         	window.location.href="pay.html";
         	}else{
         		alert("请选择要购买的商品");
         	}
         	
         }
         	
         window.onload = getMydata;
       