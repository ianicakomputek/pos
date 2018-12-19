
function getXmlHttp() 
{ 
   var obj=null;

   if( window.XMLHttpRequest )  
   {
      obj = new XMLHttpRequest();
   } 
   else if( window.ActiveXObject )  
   {
      obj = new ActiveXObject("Microsoft.XMLHTTP");
   }
   if ( obj == null ) 
   {
      alert("Browser does not support HTTP Request");
   } 
   return obj;
}

function ubrcall(id,param)
{
   var tbl = document.getElementById(id);
   var r = getXmlHttp();
   r.open("GET", "?ajax=" + id + "&" + param, true);
   r.onreadystatechange=function () 
   {
      if( r.readyState == 4 ) 
      {
         if( r.status == 200 )
         {
            tbl.innerHTML = r.responseText;
         }
         r = null;
      }
   }
   r.send(null);
}

function left(str, n){
	if (n <= 0)
	    return "";
	else if (n > String(str).length)
	    return str;
	else
	    return String(str).substring(0,n);
}

function right(str, n){
    if (n <= 0)
       return "";
    else if (n > String(str).length)
       return str;
    else {
       var iLen = String(str).length;
       return String(str).substring(iLen, iLen - n);
    }
}

function decision(message, url)
{
	if(confirm(message))
	{
		parent.location.href = url;
	}
}

function brjslink(url)
{
	parent.location.href = url;
}

function number_format(a, b, c, d, idname) 
{
	a = Math.round(a * Math.pow(10, b)) / Math.pow(10, b);
	e = a + '';
	f = e.split('.');
	if (!f[0]) 
	{
		f[0] = '0';
	}
	if (!f[1]) 
	{
		f[1] = '';
	}
	if (f[1].length < b) 
	{
		g = f[1];
		for (i=f[1].length + 1; i <= b; i++) 
		{
			g += '0';
		}
		f[1] = g;
	}
	if(d != '' && f[0].length > 3) 
	{
		h = f[0];
		f[0] = '';
		for(j = 3; j < h.length; j+=3) 
		{
			i = h.slice(h.length - j, h.length - j + 3);
			f[0] = d + i +  f[0] + '';
		}
		j = h.substr(0, (h.length % 3 == 0) ? 3 : (h.length % 3));
		f[0] = j + f[0];
	}
	c = (b <= 0) ? '' : c;
	document.getElementById(idname).innerHTML = f[0] + c + f[1];
}

function updaddsal() 
{
  var aa = document.getElementById("itunai");
  var bb = document.getElementById("ivoucher");
  var cc = document.getElementById("isale_prc2");
  var dd = document.getElementById("ibg_stmet");
  var ee = document.getElementById("ien_stmet");
  var ff = document.getElementById("iqty_nt");

  vtunai     = aa.value;
  vvoucher   = bb.value;
  vsale_prc2 = cc.value;
  vbg_stmet  = dd.value;
  ven_stmet  = ee.value;
  vqty_nt    = ff.value

  if(parseInt(vvoucher) && parseInt(vtunai))
  {
  			 topr = parseInt(vvoucher)+parseInt(vtunai);
  }
  else
  {
  			 if(!parseInt(vvoucher) && parseInt(vtunai))
  			 {
  			 			topr = parseInt(vtunai);
  			 }
  			 else
  			 {
  			 			if(parseInt(vvoucher) && !parseInt(vtunai))
  			 			{
  			 					  topr = parseInt(vvoucher);
  			 			}
  			 			else
  			 			{
  			 					  topr = 0;
  			 			}
  			 }
  }

  tsale  = parseFloat(ven_stmet)-parseFloat(vbg_stmet)-parseFloat(vqty_nt);
  rpsale = tsale*parseInt(vsale_prc2);
  tsel   = topr-rpsale;

  document.getElementById("itotopr").value=topr;
  number_format(itotopr.value, 2,',','.','idtotopr');
  document.getElementById("isel").value=tsel;
  number_format(isel.value, 2,',','.','idsel');
}

function hitungpcs(xarg1) 
{
	var bb = document.getElementById("iconvpur").value;
	cc = Math.round(xarg1/bb);
	number_format(cc, 2,',','.','ipur_prc2');
}

function brconfsub( xpesan, xform)
{
	if(confirm(xpesan))
	{
			  document.forms[xform].submit();
	}
}

function brlink(url)
{
	parent.location.href = url;
}

function updsp(xarg1,xarg2) 
{
  var x = document.getElementById(xarg1);
  		y = x.value;
  document.getElementById(xarg2).innerHTML=y;
}

function chbayar(xarg1,xarg2)
{
  var x = document.getElementById(xarg1);
  if(x.checked)
  {
     document.getElementById(xarg2).value=x.value;
  } else {
     document.getElementById(xarg2).value='';
  }  			 
  
}

function kembalianspp() 
{
  var aa = document.getElementById("spptunai");
  var bb = document.getElementById("pasbb");
  vtunai     = aa.value;
  vtotal     = bb.value;
  kembalian  = parseInt(vtunai)-parseInt(vtotal);
  if(kembalian >=0)
  {
  	  number_format(kembalian, 0,',','.','idkembalian');
  } else {
     document.getElementById("idkembalian").innerHTML="error";
  }  
}  

function bku_akun2(xarg1)
{
  y = xarg1
  document.getElementById("il1_akun").value=y;
  document.acc1.submit();
}

function bku_akun3(xarg1)
{
  y = xarg1
  document.getElementById("il2_akun").value=y;
  document.acc1.submit();
}

function bku_akun4(xarg1)
{
  y = xarg1
  document.getElementById("il3_akun").value=y;
  document.acc1.submit();
}

function aturjam(asal,xjin,xjout)
{
  bb=asal.value;
  if(bb=="1")
  {
	  document.getElementById("bjam").value=xjin;
     document.getElementById("bjam").innerHTML=xjin;
	  document.getElementById("ejam").value="";
     document.getElementById("ejam").innerHTML="";
     document.getElementById("bjam").disabled= true;
     document.getElementById("ejam").disabled= false;
  } else if(bb=="3")
  {
	  document.getElementById("bjam").value="";
     document.getElementById("bjam").innerHTML="";
	  document.getElementById("ejam").value=xjout;
     document.getElementById("ejam").innerHTML=xjout;
     document.getElementById("bjam").disabled= false;
     document.getElementById("ejam").disabled= true;
  } else
  {
	  document.getElementById("bjam").value="";
     document.getElementById("bjam").innerHTML="";
	  document.getElementById("ejam").value="";
     document.getElementById("ejam").innerHTML="";
     document.getElementById("bjam").disabled= false;
     document.getElementById("ejam").disabled= false;
  }
}
  			 
function cekjamlembur(asal,xarg1)
{
  var aa = document.getElementById(xarg1);
  bb = aa.value;
  cc = bb.length; 
  dd = asal.value;
  if(cc == 6)
  {
  			 ee = bb.substring(1,3) + right(bb,2);
  			 if(parseInt(dd)<parseInt(ee))
  			 {
  			 	 ff = "harus mulai jam " + left(ee,2) + ":" + right(ee,2)		
    			 document.getElementById("klemburi").innerHTML= ff;
    		 } else
    		 {
    			 document.getElementById("klemburi").innerHTML= "";
    		 }
  }
}

function okisijam(asal)
{
		  aa=asal.value;
		  if(aa=="x")
		  {
		  			 document.getElementById("ilemburi").value= "";
		  			 document.getElementById("ilemburo").value= "";
		  			 document.getElementById("ilemburi").innerHTML= "";
		  			 document.getElementById("ilemburo").innerHTML= "";
		  			 document.getElementById("ilemburi").disabled= true;
		  			 document.getElementById("ilemburo").disabled= true;
		  } else { 
		  			 document.getElementById("ilemburi").disabled= false;
		  			 document.getElementById("ilemburo").disabled= false;
		  }
}


function acclain(asal)
{
  bb=asal.value;
  if(bb=="")
  {
     document.getElementById("iacclain").disabled= false;
  } else
  {
     document.getElementById("iacclain").value= "";
	  document.getElementById("iacclain").innerHTML= "";
     document.getElementById("iacclain").disabled= true;
  }
}
  			 
function niyacc(asal)
{
  bb=asal.value;
  if(bb=="")
  {} else {
     document.getElementById("iniyacc").value= "";
  }
}
  			 
function bsplembur(xarg1)
{
	  document.getElementById("isplembur").value="1";
	  document.xarg1.submit();
}

function updabsman(asal,alain,xform)
{
	if(asal.checked)
	{
			  document.getElementById(alain).value= "1";
			  document.getElementById(alain).style.display= "none";
	}  else {
			  document.getElementById(alain).style.display= "block";
			  document.getElementById(alain).value= "=";
			  document.getElementById(alain).innerHTML= "=";
			  document.getElementById(alain).focus();
	}
}

function brd2w(asal,xarg1)
{
	 var xtgl = asal.value;	  
    var NamaHari = new Array("Ahad", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu");
    var chari;
    var dataSplit = xtgl.split('-');
    var dateConverted;
    
    if (dataSplit[2].split(" ").length > 1) 
    {
        var hora = dataSplit[2].split(" ")[1].split(':');
        dataSplit[2] = dataSplit[2].split(" ")[0];
        dateConverted = new Date(dataSplit[2], dataSplit[1]-1, dataSplit[0], hora[0], hora[1]);
    } else {
        dateConverted = new Date(dataSplit[2], dataSplit[1] - 1, dataSplit[0]);
    }
    
    chari = NamaHari[dateConverted.getDay()];
	 document.getElementById(xarg1).value= chari;
	 document.getElementById(xarg1).innerHTML= chari;
}

function tampilpgt(asal,xmapel,xpmapel,xpekskul,xket,xiket,xisiket)
{
	var aa = asal.value;
	if(aa=="")
	{
		  document.getElementById(xmapel).style.display= "none";
		  document.getElementById(xpmapel).style.display= "none";
		  document.getElementById(xpekskul).style.display= "none";
		  document.getElementById(xket).style.display= "none";
		  document.getElementById(xiket).style.display= "none";
	} else
	{
		  if(parseInt(aa)==0 || parseInt(aa)==1)
		  {
		  			 document.getElementById(xmapel).style.display= "block";
		  			 document.getElementById(xpmapel).style.display= "block";
		  			 document.getElementById(xpekskul).style.display= "none";
		  			 document.getElementById(xket).style.display= "none";
		  			 document.getElementById(xiket).style.display= "none";
		  } else if(parseInt(aa)==2)
		  {
		  			 document.getElementById(xmapel).style.display= "block";
		  			 document.getElementById(xpmapel).style.display= "none";
		  			 document.getElementById(xpekskul).style.display= "block";
		  			 document.getElementById(xket).style.display= "none";
		  			 document.getElementById(xiket).style.display= "none";
		  } else if(parseInt(aa)==3 || parseInt(aa)==6)
		  {
		  			 document.getElementById(xmapel).style.display= "none";
		  			 document.getElementById(xpmapel).style.display= "none";
		  			 document.getElementById(xpekskul).style.display= "none";
		  			 document.getElementById(xket).style.display= "block";
		  			 document.getElementById(xiket).style.display= "block";
		  			 document.getElementById(xisiket).focus();
		  }
	}
}
		  			 
function komgurnilai(asal,xarg1,mskor,xarg2)
{
	var aa = asal.value;
	bb = ( parseInt(aa) / mskor ) * 100;
	if(bb<=25)
	{
			  cc = 1;
	} else if(bb>25 && bb<=50) 
	{
			  cc = 2;
	} else if(bb>50 && bb<=75)
	{
			  cc = 3;
	} else if(bb>75 && bb<=100)
	{
			  cc = 4;
	}
			  
	document.getElementById(xarg1).value= cc;
	document.getElementById(xarg1).innerHTML= cc;
	document.getElementById(xarg2).value= cc;
}

function totgurnilai(kret,xarg1,xarg2)
{
	var xcount, aa, bb, cc, dd=0;	  
	for (xcount = 1; xcount<=parseInt(kret); xcount++)
	{
			  aa = xarg1 + xcount.toString();
			  bb = document.getElementById(aa);
			  cc = bb.value;
			  dd += parseInt(cc);
	}
	document.getElementById(xarg2).value= dd;
	document.getElementById(xarg2).innerHTML= dd;
}

function komkepsek_waka(xarg1,xarg2,tindi,xarg3,xarg4)
{
	var xcount, xid, xval, xtskor = 0, xskoravg, xskoravg2;
	
	for (xcount = 1; xcount <= parseInt(tindi); xcount++) {
			  xid = xarg1 + xcount.toString();
			  xval = document.getElementById(xid).value;
			  xtskor += parseInt(xval);
	}
	
	document.getElementById(xarg2).value= xtskor;
	document.getElementById(xarg2).innerHTML= xtskor;
	xskoravg = xtskor /  parseInt(tindi);
	xskoravg2 = parseFloat((xskoravg).toFixed(2))
	document.getElementById(xarg3).innerHTML= xskoravg2;
	document.getElementById(xarg4).value= xskoravg2;
}	

function updnilkin(arid,xarg1,xarg2)
{
		  var i, aa, bb, cc = 0, xper, xper2;
		  for (i = 0; i<arid.length; i++)
		  {
		  			 aa = document.getElementById(arid[i]);
		  			 bb = aa.value;
		  			 cc += parseFloat(bb);
		  }
		  if(xarg2==1){
		  			 xper = ( (cc/24) * 100 );
		  } else if(xarg2==2){
		  			 xper = ( (cc/20) * 100 );
		  } else {
		  			 xper = ( (cc/16) * 100 );
		  }
		  xper2 = parseFloat((xper).toFixed(2))
		  document.getElementById(xarg1).innerHTML= xper2;
}

function hutptkperbulan(asal,xarg1,xarg2)
{
		  var aa, bb, cc = 0;
		  aa = asal.value;
		  bb = document.getElementById(xarg1).value;
		  cc = parseInt(bb) / parseInt(aa);
		  number_format(cc, 0,',','.',xarg2);
}		  
		  
function hutptkeblth(asal,ibbl,ibth,sebl,seth)
{
		  aa = asal.value;
		  bb = document.getElementById(ibbl).value;
		  cc = parseInt(aa)+parseInt(bb)-1;
		  xx = document.getElementById(ibth).value;
		  if(cc>12) {
		  			 dd = Math.floor(cc/12);
		  			 ee = cc - ( dd*12 );
		  			 if(ee==0){
		  			 			ee = 12;
		  			 			yy = parseInt(xx)+dd-1;
		  			 } else {
		  			 			yy = parseInt(xx)+dd;
		  			 }
		  } else {
		  			 ee = cc;
		  			 yy = xx;
		  }
		  		
		  document.getElementById(sebl).innerHTML= ee;
		  document.getElementById(seth).innerHTML= yy;
}

function hutptkbbl(asal,ijbl,ibth,sebl,seth)
{
		  aa = asal.value;
		  bb = document.getElementById(ijbl).value;
		  cc = parseInt(aa)+parseInt(bb)-1;
		  xx = document.getElementById(ibth).value;
		  if(cc>12) {
		  			 dd = Math.floor(cc/12);
		  			 ee = cc - ( dd*12 );
		  			 if(ee==0){
		  			 			ee = 12;
		  			 			yy = parseInt(xx)+dd-1;
		  			 } else {
		  			 			yy = parseInt(xx)+dd;
		  			 }
		  } else {
		  			 ee = cc;
		  			 yy = xx;
		  }
		  		
		  document.getElementById(sebl).innerHTML= ee;
		  document.getElementById(seth).innerHTML= yy;
}

function hutptkbth(asal,ijbl,ibbl,sebl,seth)
{
		  aa = asal.value;
		  bb = document.getElementById(ijbl).value;
		  cc = document.getElementById(ibbl).value;
		  dd = parseInt(bb)+parseInt(cc)-1;
		  if(dd>12) {
		  			 ee = Math.floor(dd/12);
		  			 ff = dd - ( ee*12 );
		  			 if(ff==0){
		  			 			ff = 12;
		  			 			yy = parseInt(aa)+ee-1;
		  			 } else {
		  			 			yy = parseInt(aa)+ee;
		  			 }
		  } else {
		  			 ff = dd;
		  			 yy = aa;
		  }
		  		
		  document.getElementById(sebl).innerHTML= ff;
		  document.getElementById(seth).innerHTML= yy;
}

function brhitungspp(bulan,item,xtot,xlun)
{
		  var ztot,zsis,ftot,fsis,fbb,i,aa,aaa,bb,bbb,bbbb; 
		  ztot = 0;
		  zsis = 0;
		  ftot = "itot" + bulan;
		  fsis = "sisa" + bulan;
		  fbb  = "bb" + bulan;
		  for (i=1; i<=parseInt(item); i++)
		  {
		  			 aa = "icb" + bulan + i.toString();
		  			 aaa = document.getElementById(aa);
		  			 if (aaa!==null)
		  			 {
		  			 			if (aaa.checked)
		  			 			{
		  			 					  aaa.value='1';
		  			 					  bb = "item" + bulan + i.toString();
		  			 					  bbb = document.getElementById(bb);
		  			 					  if (bbb!==null)
		  			 					  {
		  			 					  			 bbbb = bbb.value;
		  			 					  			 ztot += parseInt(bbbb);
		  			 					  }
		  			 			} else {
		  			 					  aaa.value='0';
		  			 			}
		  			 					 
		  			 }
		  	}
		  	document.getElementById(fbb).value=ztot;
			zsis = parseInt(xtot) - ( parseInt(xlun) + ztot ) ;		  	
	  		number_format(zsis, 0,',','.',fsis);
	  		number_format(ztot, 0,',','.',ftot);
}

function cekadabyr()
{
		  var aa,aaa;
		  aa = document.getElementById("pasbb");
		  aaa = aa.value;
		  if(parseInt(aaa)>0)
		  {
		  			 tugel_div("cekbayar");
		  			 document.getElementById("spptunai").focus();
		  }
}	
		  			
function brtotbyr()
{
		  var i,aa,aaa,aaaa,zbyr;
		  zbyr = 0;
		  for (i=1; i<=12; i++)
		  {
		  			 aa  = "bb" + i.toString();
		  			 aaa = document.getElementById(aa);
		  			 if (aaa!==null)
		  			 {
		  			 			aaaa = aaa.value;
		  			 			if(aaaa!=="")
		  			 			{
		  			 					  zbyr += parseInt(aaaa);
		  			 			}
		  			 }
		  }
		  document.getElementById("pasbb").value=zbyr;
		  number_format(zbyr, 0,',','.',"totbyr");
		  number_format(zbyr, 0,',','.',"pasbyr");
}

function pmbtotbyr()
{
		  zbyr = 0;
		  aa = document.getElementById("iuregis");
		  bb = document.getElementById("iupang_n");
		  cc = document.getElementById("iuseragam");
		  dd = document.getElementById("iubuku");
		  ee = document.getElementById("iukomite");
		  ff = document.getElementById("iutabung");
		  gg = document.getElementById("iusppjul");
		  hh = document.getElementById("iukegiatan");
		  
		  if (aa!==null)
		  {
		  			 aaa=aa.value;
		  			 if(aaa!==""){ zbyr+=parseInt(aaa); }
		  }
		  if (bb!==null)
		  {
		  			 bbb=bb.value;
		  			 if(bbb!==""){ zbyr+=parseInt(bbb); }
		  }
		  if (cc!==null)
		  {
		  			 ccc=cc.value;
		  			 if(ccc!==""){ zbyr+=parseInt(ccc); }
		  }
		  if (dd!==null)
		  {
		  			 ddd=dd.value;
		  			 if(ddd!==""){ zbyr+=parseInt(ddd); }
		  }
		  if (ee!==null)
		  {
		  			 eee=ee.value;
		  			 if(eee!==""){ zbyr+=parseInt(eee); }
		  }
		  if (ff!==null)
		  {
		  			 fff=ff.value;
		  			 if(fff!==""){ zbyr+=parseInt(fff); }
		  }
		  if (gg!==null)
		  {
		  			 ggg=gg.value;
		  			 if(ggg!==""){ zbyr+=parseInt(ggg); }
		  }
		  if (hh!==null)
		  {
		  			 hhh=hh.value;
		  			 if(hhh!==""){ zbyr+=parseInt(hhh); }
		  }
		  document.getElementById("pasbb").value=zbyr;
		  number_format(zbyr, 0,',','.',"totbyr");
		  number_format(zbyr, 0,',','.',"pasbyr");
}


function tugel_div(id)
{
		  var e = document.getElementById(id);
		  if (e.style.display === 'block' || e.style.display === '') 
		  {
		  			 e.style.display = 'none';
		  } else {
		  			 e.style.display = 'block';
		  }
}
		  
function brtkinp3tot(xniy)
{
		  var aa,aaa,bb,bbb,cc,ccc,dd,ddd,ee,eee,ss;
		  var xtot=0;
		  aa='ikpp'+xniy;
		  aaa=document.getElementById(aa).value;
		  bb='iakh'+xniy;
		  bbb=document.getElementById(bb).value;
		  cc='ipdg'+xniy;
		  ccc=document.getElementById(cc).value;
		  dd='iorg'+xniy;
		  ddd=document.getElementById(dd).value;
		  ee='iloy'+xniy;
		  eee=document.getElementById(ee).value;
		  xtot=parseInt(aaa)+parseInt(bbb)+parseInt(ccc)+parseInt(ddd)+parseInt(eee);
		  ss='sp'+xniy;
		  number_format(xtot, 0,',','.',ss);
}

function brtkinp4tot(xniy)
{
		  var aa,aaa,bb,bbb,ss;
		  var xtot=0;
		  aa='idis'+xniy;
		  aaa=document.getElementById(aa).value;
		  bb='iloy'+xniy;
		  bbb=document.getElementById(bb).value;
		  if (aaa!=="") { xtot+=parseInt(aaa); }
		  if (bbb!=="") { xtot+=parseInt(bbb); }
		  ss='sp'+xniy;
		  number_format(xtot, 0,',','.',ss);
}
		  			  
function brpmbtingkat(asal)
{
		  aa = asal.value;
		  if(aa=="")
		  {
		  			 document.getElementById("tk").style.display= "none";
		  			 document.getElementById("sd").style.display= "none";
		  			 document.getElementById("smp").style.display= "none";
		  			 document.getElementById("sma").style.display= "none";
		  } else {
		  			 if (aa.trim()=="KBTKIT") {
		  			 			document.getElementById("tk").style.display= "inline";
		  			 			document.getElementById("sd").style.display= "none";
		  			 			document.getElementById("smp").style.display= "none";
								document.getElementById("sma").style.display= "none";
		  			 } else if (aa.trim()=="SDIT") {
		  			 			document.getElementById("tk").style.display= "none";
		  			 			document.getElementById("sd").style.display= "inline";
		  			 			document.getElementById("smp").style.display= "none";
								document.getElementById("sma").style.display= "none";
		  			 } else if (aa.trim()=="SMPIT") {
		  			 			document.getElementById("tk").style.display= "none";
		  			 			document.getElementById("sd").style.display= "none";
		  			 			document.getElementById("smp").style.display= "inline";
								document.getElementById("sma").style.display= "none";
		  			 } else if (aa.trim()=="SMAIT") {
		  			 			document.getElementById("tk").style.display= "none";
		  			 			document.getElementById("sd").style.display= "none";
		  			 			document.getElementById("smp").style.display= "none";
								document.getElementById("sma").style.display= "inline";
		  			 }
		  }
}

function brpmbdis1(asal)
{
		  aa = asal.value;
		  bruto = document.getElementById("iupang_b").value;
		  
		  if (aa=="")
		  {} else {
		  			 bb = aa.trim();
		  			 ll = bb.length;
		  			 cc = right(bb,1);
		  			 if (cc=="%")
		  			 {
		  			 			dd = left(bb,ll-1);
		  			 			ee = parseInt(bruto) * ( ( 100-parseInt(dd) ) / 100 );
		  			 			number_format(ee, 0,',','.',"spupang_n");
		  			 } else {
		  			 			ee = parseInt(bruto) - parseInt(bb);
		  			 			number_format(ee, 0,',','.',"spupang_n");
		  			 }
		  }
}
		  			 			
function pmbcekadabyr()
{
		  var aa,aaa,bb,bbb;
		  aa = document.getElementById("pasbb");
		  aaa = aa.value;
		  if(parseInt(aaa)>0)
		  {
		  			 tugel_div("cekbayar");
		  			 document.getElementById("spptunai").focus();
		  } else {
		  			 bb = document.getElementById("ilunreg");
		  			 if (bb!==null) { bbb = bb.value; } else { bbb = '0' }
		  			 cc = document.getElementById("ilunpang");
		  			 if (cc!==null) { ccc = cc.value; } else { ccc = '0' }
		  			 dd1 = document.getElementById("ilunser1");
		  			 if (dd1!==null) { ddd1 = dd1.value; } else { ddd1 = '0' }
		  			 dd2 = document.getElementById("ilunser2");
		  			 if (dd2!==null) { ddd2 = dd2.value; } else { ddd2 = '0' }
		  			 ee1 = document.getElementById("ilunbuk1");
		  			 if (ee1!==null) { eee1 = ee1.value; } else { eee1 = '0' }
		  			 ee2 = document.getElementById("ilunbuk2");
		  			 if (ee2!==null) { eee2 = ee2.value; } else { eee2 = '0' }
		  			 ff = document.getElementById("ilunkom");
		  			 if (ff!==null) { fff = ff.value; } else { fff = '0' }
		  			 gg = document.getElementById("iluntab");
		  			 if (gg!==null) { ggg = gg.value; } else { ggg = '0' }
		  			 hh = document.getElementById("ilunspp");
		  			 if (hh!==null) { hhh = hh.value; } else { hhh = '0' }
		  			 ii = document.getElementById("ilunkeg");
		  			 if (ii!==null) { iii = ii.value; } else { iii = '0' }
		  			 if(parseInt(bbb)>1||parseInt(ccc)>1||parseInt(ddd1)>1||parseInt(ddd2)>1||parseInt(eee1)>1||parseInt(eee2)>1||parseInt(fff)>1||parseInt(ggg)>1||parseInt(hhh)>1||parseInt(iii)>1)
		  			 {
		  			 			xx = document.getElementById("ispc");
		  			 			if (xx!==null) { xx.value="1"; }
		  			 			tugel_div("cekspesial");
		  			 }
		  }
}

function pmbspesial(asal,xvalue)
{
		  if (asal.checked)
		  {
		  			 asal.value=xvalue;
		  } else {
		  			 asal.value='0';
		  }
}

function brchtgl2(asal)
{
		  xtgl1 = asal.value;
		  document.getElementById("tanggal2").value=xtgl1;
		  document.getElementById("tanggal2").innerHTML=xtgl1;
}

function brjamspc(asal)
{
		  if (asal.checked)
		  {
		  			 asal.value='1';
		  } else {
		  			 asal.value='0';
		  }
}



		  			 			
		  
		  



