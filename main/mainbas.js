function brcekcors(method, url) {
  var xhr = new XMLHttpRequest();
  if (&quot;withCredentials&quot; in xhr) {
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != &quot;undefined&quot;) {
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    xhr = null;
  }
  return xhr;
}

function brformlogin(c_client) {
  var xurl = &#39;https://&#39; + c_client + &#39;.ianica.xyz/cgi-bin/fmlogin.cgi&#39;;
  var xhr = brcekcors(&#39;GET&#39;, xurl);
  if (!xhr) {
    alert(&#39;Tidak mendukung CORS !&#39;);
    return;
  }
  xhr.onreadystatechange = function() {
    if (this.readyState == 4) {
      if (this.status == 200) {
      	document.getElementById('i_pub_container').style.display='none';
      	document.getElementById('i_pri_container').style.display='block';
      	document.getElementById('i_pri_container').innerHTML=this.responseText;
      	alert('Ok');
      }
    }  
  };
  xhr.onerror = function() {
    alert(&#39;Server busy, please try again later.&#39;);
  };
  xhr.send();
}

function brpreload() {
	var xhr = new XMLHttpRequest();
	var url = "https://XXX.ianica.xyz/cgi-bin/brin.cgi";  ==> GANTI XXX DENGA CLIENT
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			var json = JSON.parse(xhr.responseText);
			if (json.xstatus == "1" ) {
				window.location.replace( json.xredir );
				return false;
			} else {
				document.getElementById("row").style.display= "block";
				document.getElementById("footer").style.display= "block";
				document.body.style.backgroundImage = getCssValuePrefix() + 'linear-gradient(blue,orange,darkgreen,black)';
				brprelogin();                 
			}
		}
	};
	var data = JSON.stringify({"xstatus": "0", "xredir": "localhost"});
	xhr.send(data);      
}

function brprelogin() {
	if (typeof(Storage) !== "undefined") {
		var xs_user = localStorage.getItem("l_u_l");
		if ( xs_user == null ) {
			document.flogin.xu_alias.focus();
		} else {
			document.getElementById("xalias").value = xs_user;
			document.getElementById("xpass").value = "";
			document.flogin.xu_pass.focus();
		}
	} else {
		document.flogin.xu_alias.focus();
	}
}

function getCssValuePrefix() {
	var rtrnVal = '';		//default to standard syntax
	var prefixes = ['-o-', '-ms-', '-moz-', '-webkit-'];
	// Create a temporary DOM object for testing
	var dom = document.createElement('div');
	for (var i = 0; i < prefixes.length; i++) {
		// Attempt to set the style
		dom.style.background = prefixes[i] + 'linear-gradient(#000000, #ffffff)';
		// Detect if the style was successfully set
		if (dom.style.background) {
			rtrnVal = prefixes[i];
		}
	}
	dom = null;
	delete dom;
	return rtrnVal;
}

function brdatevalid(s){
	var day, A= s.match(/[1-9][\d]*/g);
	try{
		A[0]-= 1;
		day= new Date(+A[2], A[0], +A[1]);
		if(day.getMonth()== A[0] && day.getDate()== A[1]) return day;
		throw new Error('rabener');
	} 
	catch(er){
		return er.message;
	}
}   

function strzero(n_angka, n_panjang, c_tambah) {
	var iii = n_angka.toString().length;
	return ( ( new Array( ( n_panjang + 1 ) - iii ).join( c_tambah ) ) + n_angka );
}

function brleft(str, n){
	if (n <= 0)
		return "";
	else if (n > String(str).length)
		return str;
	else
		return String(str).substring(0,n);
}

function brright(str, n){
	if (n <= 0)
		return "";
	else if (n > String(str).length)
		return str;
	else {
		var iLen = String(str).length;
		return String(str).substring(iLen, iLen - n);
	}
}

