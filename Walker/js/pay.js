     var allPro = [];
       var table = document.getElementById('table');
       var clear = document.getElementById('clear_car');
         function getMydata(){
         	for(var i = 0;i < localStorage.length;i ++){
         		var logined_name = sessionStorage.getItem('logined_name')
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
  str += "<tr><td  style='width:100px'><img  style='width:120px;height:120px;' src='"+allPro[i].pro_image+"'/></td>"+
  "<td class='detail'>"+allPro[i].demond+"</td>"+
"<td class='detail'>"+allPro[i].numbers+"</td>"+
  "<td class='detail'>"+allPro[i].price +"</td>"+
  "<td class='detail'><span class='price'>"+parseInt(allPro[i].price)*parseInt(allPro[i].numbers)+"</span></td></tr>";
         	}
         	console.log(str);
         	table.innerHTML = str;
         	setTotal();
         }
         function setTotal(){ 
var s=0; 
$("#table tr").each(function(){ 
s+=parseFloat($(this).find('span[class*=price]').text()); 
}); 
$("#total").html(s.toFixed(2)); 
} 
clear_car.onclick = function (){
	for(i=localStorage.length-1;i>=0;i--){
    var logined_name = sessionStorage.getItem('logined_name')
		var index = localStorage.key(i).indexOf('_');
		var username = localStorage.key(i).substring(0,index);
		if(logined_name == username && index != -1){
			var keys = localStorage.key(i);
			localStorage.removeItem(keys);
		}
	}
			alert('你已经成功结算本次购物，您的包裹正在派送中。本页面将在三秒后跳转至首页。');
			window.setTimeout("window.location='index.html'",3000);
}
 window.onload = getMydata;