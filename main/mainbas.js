function brcekcors(method, url) {
  var xhr = new XMLHttpRequest();
  if ('withCredentials' in xhr) {
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != 'undefined') {
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    xhr = null;
  }
  return xhr;
}

function brformlogin(c_client) {
  var xurl = 'https://' + c_client.toString() + '.ianica.xyz/cgi-bin/fmlogin.cgi';
  var xhr = brcekcors('GET', xurl);
  if (!xhr) {
    alert('Tidak mendukung CORS !');
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
    alert('Server busy, please try again later.');
  };
  xhr.send();
}
