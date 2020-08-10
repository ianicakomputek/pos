history.pushState(null, null, location.href);
history.back();
history.forward();
window.onpopstate = function () { history.go(1); };

window.addEventListener('load', function() {
			var xurl="https://amcc.toha20.com/cgi-bin/brin.cgi";
			var xhr=brdef_cors("post",xurl);
			if (!xhr) { alert("Tidak mendukung CORS !"); return false; }
			var xjson;
			var xpara="br=cek";
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			xhr.onload = function() {
				if (xhr.status === 200) {
					xjson = JSON.parse(xhr.responseText);
					if (xjson.jstatus=="1") {
						parent.location.href="/cgi-bin/"+xjson.jnote;
					}
				} else if (xhr.status !== 200) {
					alert('Request failed.  Returned status of ' + xhr.status);
				}
			};
			xhr.send(xpara);
});

function br_login() {
			var ztype=document.getElementById("xutype").value;
			var zuser=document.getElementById("xuser").value;
			var zpass=document.getElementById("xpass").value;
			if (ztype==null || ztype=="" || zuser==null || zuser=="" || zpass==null || zpass=="") {
				alert("Tipe/nama/password wajib diisi.");
				return false;
			}
			var xurl="https://amcc.toha20.com/cgi-bin/brin.cgi";
			var xhr=brdef_cors("post",xurl);
			if (!xhr) { alert("Tidak mendukung CORS !"); return false; }
			var xjson;
			var xpara="puser="+zuser+"&ppass="+zpass+"&ptype="+ztype;
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			xhr.onload = function() {
				if (xhr.status === 200) {
					xjson = JSON.parse(xhr.responseText);
					if (xjson.jstatus=="0" || parseInt(xjson.jstatus)>=3) {
						alert(xjson.jnote);
					} else if (xjson.jstatus=="1" || xjson.jstatus=="2") {
						parent.location.href="/cgi-bin/"+xjson.jnote;
					}
				} else if (xhr.status !== 200) {
					alert('Request failed.  Returned status of ' + xhr.status);
				}
			};
			xhr.send(xpara);
}

function brdef_cors(method, url) {
	var xhr = new XMLHttpRequest();
	if ("withCredentials" in xhr){
		// XHR has 'withCredentials' property only if it supports CORS
		xhr.open(method, url, true);
	} else if (typeof XDomainRequest != "undefined"){ // if IE use XDR
		xhr = new XDomainRequest();
		xhr.open(method, url);
	} else {
		xhr = null;
	}
	return xhr;
}

function brtoggle_rad(xid) {
	var aels1=document.querySelectorAll('span[id^="sptype"]');
	var aels2=document.querySelectorAll('input[id^="xutype"]');
	var x;
	for (x=0;x<aels1.length;x++) {
		aels1[x].setAttribute("class","sptype");
	}
	for (x=0;x<aels2.length;x++) {
		aels2[x].checked=false;
	}
	var xpos=xid.id.slice(6);
	document.getElementById("sptype"+xpos).setAttribute("class","sptype spon");
	xid.checked=true;
	document.getElementById("xutype").value=xpos;
}

