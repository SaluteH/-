function myAjax(type, url, isAsyn, data, callBack) {
	let xhr;
	if (window.ActiveXObject) {
		//ie
		xhr = new ActiveXObject("Microsoft.XMLHttp");
	} else {
		//非ie
		xhr = new XMLHttpRequest();
	}
	
	type = type.toLowerCase();
	
	if(type == "get"){
		let urlParam = url;
		if(data != ""){
			urlParam += "?"+data;
		}
		xhr.open(type,urlParam,isAsyn);
		xhr.send();
	}else{
		xhr.open(type,url,isAsyn);
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		xhr.send(data);
	}
	
	xhr.onreadystatechange = function(){
		if(xhr.status == 200 && xhr.readyState == 4){
			callBack(xhr.responseText);
		}
	}
}

// myAjax("post", "AjaxReg.php", true, url, turnLogin);

function setCookie(key, value, date) {
  document.cookie = key + '=' + value + ';expires=' + date;
}

function getCookie(key) {
  var str = document.cookie.split('; ');
  for (let i = 0; i < str.length; i++) {
    let newStr = str[i].split('=');
    if (newStr[0] == key) {
      return newStr[1];
    }
  }
}