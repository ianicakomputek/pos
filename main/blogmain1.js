   function br_dtpd_email() {
      xfile=document.getElementById("xreg_id").value;
      xlink=document.getElementById("linkdl");
      ctx = document.getElementById("xcanvas");
      dt = ctx.toDataURL("image/jpeg", 1.0);
      fname = "reg"+xfile+".jpg";
      xlink.setAttribute("href",dt);
      xlink.setAttribute("download",fname);
      spem=document.getElementById("sp_email");
      spdl=document.getElementById("sp_dload");
      spem.style.display="none";
      spdl.style.display="block";
      var xele=document.getElementById("xtoemail").value;
      if (xele=='x') {
         alert("Email tidak terkirim, silahkan download form dan kirim via WA.");
      } else {
         xto  = xele;
         xsu  = "PPDB No. reg"+document.getElementById("xreg_id").value;
         xbd  = document.getElementById("xebody").value;

         var xurl="https://alizhar.toha20.com/cgi-bin/thmailpub.cgi";
         var xhr=brdef_cors("post",xurl);
         if (!xhr) { alert("Tidak mendukung CORS !"); return false; }
         document.getElementById("divanigif1").style.display="block";
         var xjson;
         var xpara="pto="+xto+"&psu="+xsu+"&pbd="+xbd;
         xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
         xhr.onload = function() {
            if (xhr.status === 200) {
               try {
                  xjson = JSON.parse(xhr.responseText);
               } catch(e) {
                  xjson = "";
               }
               if (xjson=="") {
                  /* bukan json, tampilkan hasil di browser */
               } else {
                  alert(xjson.jnote);
                  if (xjson.jstatus=="0") {
                     alert("Email tidak terkirim, silahkan download form nomor pendaftaran dan kirim via WA.");
                  } else if (xjson.jstatus=="1") {
                     alert("Silahkan download form nomor pendaftran.");
                  }
                  document.getElementById("divanigif1").style.display="none";
               }
            } else if (xhr.status !== 200) {
               alert('Request failed.  Returned status of ' + xhr.status);
            }
         };
         xhr.send(xpara);
      }
   }
   function brtrimin(xarg) { 
      return xarg.replace(/^\s+|\s+$/g,''); 
   }
   function brtoogle_rad(xid,xarg) {
         var aels1,aels2,x;
         if (xarg==2) {
            aels1=document.querySelectorAll('span[id^="spugen"]');
            aels2=document.querySelectorAll('input[id^="tgen"]');
            xpos=xid.id.slice(4);
         }
         for (x=0;x<aels1.length;x++) {
            aels1[x].setAttribute("class","splabeloff splabeloff2");
         }
         for (x=0;x<aels2.length;x++) {
            aels2[x].checked=false;
         }
         xid.checked=true;
         if (xarg==2) {
            document.querySelector("#spugen"+xpos).setAttribute("class","splabelon splabelon2");
            document.getElementById("xgender").value=xpos;
         }
   }

   function brtoogle_ting(xhasil) {
         var sating = document.getElementById("blokselsat");
         var aels1 = sating.querySelectorAll('select[id^="xting"]');
         var x;
         for (x=0;x<aels1.length;x++) {
            aels1[x].style.display="none";
            aels1[x].value="0";
         }
         if (xhasil!=="0") {
            document.getElementById("xting"+xhasil).style.display="inline-block";
         }
         document.getElementById("xu_satuan").value=xhasil;
   }
   function brtoogle_romb(xhasil) {
      var xdd  = new Date();
      if (xhasil=="O") {
         var cth = xdd.getFullYear() - 1;
      } else if (xhasil=="T") {
         var cth = xdd.getFullYear() - 2;
      } else if (xhasil=="J") {
         var cth = xdd.getFullYear() - 3;
      } else if (xhasil=="S") {
         var cth = xdd.getFullYear() - 4;
      } else if (xhasil=="A") {
         var cth = xdd.getFullYear() - 5;
      } else if (xhasil=="B") {
         var cth = xdd.getFullYear() - 6;
      } else if (xhasil=="1") {
         var cth = xdd.getFullYear() - 7;
      } else if (xhasil=="2") {
         var cth = xdd.getFullYear() - 8;
      } else if (xhasil=="3") {
         var cth = xdd.getFullYear() - 9;
      } else if (xhasil=="4") {
         var cth = xdd.getFullYear() - 10;
      } else if (xhasil=="5") {
         var cth = xdd.getFullYear() - 11;
      } else if (xhasil=="6") {
         var cth = xdd.getFullYear() - 12;
      } else if (xhasil=="7") {
         var cth = xdd.getFullYear() - 13;
      } else if (xhasil=="8") {
         var cth = xdd.getFullYear() - 14;
      } else if (xhasil=="9") {
         var cth = xdd.getFullYear() - 15;
      } else if (xhasil=="10") {
         var cth = xdd.getFullYear() - 16;
      } else if (xhasil=="11") {
         var cth = xdd.getFullYear() - 17;
      } else if (xhasil=="12") {
         var cth = xdd.getFullYear() - 18;
      }
      xmm = (xdd.getMonth()+2)>12?1:(xdd.getMonth()+2);
      xldate = new Date( cth, xmm, 0 ).getDate();
      xdd2 = xldate + "-" +
             ( xmm<10?"0"+xmm:xmm ) + "-" + ( (xdd.getMonth()+2)>12?cth+1:cth );
      gxu_dob.setDate(xdd2,true);
      document.getElementById("xu_dob").value=xdd2;
      document.getElementById("xu_tingkat").value=xhasil;
   }

   function br_dtpd_save() {
         var xu_name=document.getElementById("xu_name");
         if (xu_name.value==null || brtrimin(xu_name.value)=="") {
            alert("Nama Lengkap belum diisi.");
            xu_name.focus();
            return false;
         } else {
            if (xu_name.value.length<3) {
               alert("Nama Lengkap minimal 3 huruf.");
               return false;
            }
            var validname = /^[a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*$/;
            if (!xu_name.value.match(validname)) {
               alert("Nama Lengkap hanya huruf/titik, tanpa angka, tanda baca lain.");
               xu_name.focus();
               return false;
            } else {
               xu_name = xu_name.value;
            }
         }

         var xsatuan=document.getElementById("xu_satuan").value;
         if (xsatuan=="0") { alert("Satuan/Unit belum dipilih."); return false; }
         var xtingkat=document.getElementById("xu_tingkat").value;
         if (xtingkat=="0") { alert("Tingkat belum dipilih."); return false; }
         var xu_gender=document.getElementById("xgender").value;
         if (xu_gender=="0") { alert("Jenis kelamin belum dipilih."); return false; }

         var xi_name=document.getElementById("xi_name");
         if (brtrimin(xi_name.value)=="") { 
            alert("Nama Ibu wajib diisi.");
            xi_name.focus();
            return false;
         } else {
            xi_name = xi_name.value;
         }

         var xi_phone=document.getElementById("xi_phone");
         if (xi_phone.value==null || brtrimin(xi_phone.value)=="") {
            alert("Nomor HP Ibu wajib diisi.");
            xi_phone.focus();
            return false;
         } else {
            if (xi_phone.value.length<10) {
               alert("Nomor HP Ibu kurang lengkap.");
               xi_phone.focus();
               return false;
            }
            var validphone = /^[0-9]+$/;
            if(!xi_phone.value.match(validphone)) {
               alert("Nomor HP Ibu harus angka saja.");
               xi_phone.focus();
               return false;
            } else {
               xi_phone = xi_phone.value;
            }
         }

         var xu_email=document.getElementById("xu_email");
         if (xu_email.value!==null && brtrimin(xu_email.value)!=="") {
            var validemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(!xu_email.value.match(validemail)) {
               alert("Alamat email kurang lengkap.");
               xu_email.focus();
               return false;
            }
         }

         var xu_cob=document.getElementById("xu_cob").value;
         var xu_dob=document.getElementById("xu_dob").value;
         var xa_name=document.getElementById("xa_name").value;
         var xagelard=document.getElementById("xagelard").value;
         var xagelarb=document.getElementById("xagelarb").value;
         var xa_phone=document.getElementById("xa_phone").value;
         var xa_job=document.getElementById("xa_job").value;

         var xigelard=document.getElementById("xigelard").value;
         var xigelarb=document.getElementById("xigelarb").value;
         var xi_job=document.getElementById("xi_job").value;

         var xu_perum=document.getElementById("xu_perum").value;
         var xu_jl=document.getElementById("xu_jl").value;
         var xu_rtrw=document.getElementById("xu_rtrw").value;
         var xu_dskel=document.getElementById("xu_dskel").value;
         var xu_kec=document.getElementById("xu_kec").value;
         var xu_city=document.getElementById("xu_city").value;
         var xu_kdpos=document.getElementById("xu_kdpos").value;

         var xurl="https://alizhar.toha20.com/cgi-bin/bcrudpub.cgi";
         var xhr=brdef_cors("post",xurl);
         if (!xhr) { alert("Tidak mendukung CORS !"); return false; }
         document.getElementById("divanigif1").style.display="block";
         var xjson;
         var xpara="br=pdpmb&jen=pdpmb_save&psat="+xsatuan+"&pting="+xtingkat+"&pnm="+xu_name+
               "&pgen="+xu_gender+"&pcob="+xu_cob+"&pdob="+xu_dob+
               "&panm="+xa_name+"&pagd="+xagelard+"&pagb="+xagelarb+"&papo="+xa_phone+"&pajo="+xa_job+
               "&pinm="+xi_name+"&pigd="+xigelard+"&pigb="+xigelarb+"&pipo="+xi_phone+"&pijo="+xi_job+
               "&peml="+xu_email.value+
               "&pper="+xu_perum+"&pjl="+xu_jl+"&prr="+xu_rtrw+"&pdsk="+xu_dskel+"&pkpo="+xu_kdpos+"&pkec="+xu_kec+"&pcit="+xu_city;
         xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
         xhr.onload = function() {
            if (xhr.status === 200) {
               try {
                  xjson = JSON.parse(xhr.responseText);
               } catch(e) {
                  xjson = "";
               }
               if (xjson=="") {
                  document.getElementById("formbase").style.display="none";
                  document.getElementById("formfinal").innerHTML=xhr.responseText;
                  document.getElementById("formfinal").style.display="block";
               } else {
                  if (xjson.jstatus=="0") {
                     alert(xjson.jnote);
                  } else if (xjson.jstatus=="1") {
                     document.getElementById("formbase").style.display="none";
                     var ctx = document.getElementById("xcanvas").getContext('2d');
                     ctx.rect(0, 0, 320, 320);
                     ctx.fillStyle = "white";
                     ctx.fill();                     
                     var img = document.getElementById("iwtm");
                     ctx.drawImage(img, 60, 60);                     
                     ctx.font = '14px serif';
                     ctx.fillStyle = "black";
                     ctx.fillText('Al-Izhar Cendekia - Makassar', 10, 20);
                     ctx.fillText('PPDB Online', 10, 50);
                     ctx.fillText('No. Pendaftaran: reg'+xjson.jnote, 10, 70);
                     ctx.fillText('Nama Calon Murid:', 10, 120);
                     ctx.fillText(xjson.ju_name+" ("+xu_gender+")", 30, 140);
                     ctx.fillText('Satuan/Tingkat:', 10, 160);
                     ctx.fillText(xjson.jsating, 30, 180);
                     ctx.fillText('Kontak:', 10, 200);
                     ctx.fillText(xjson.ji_name, 30, 220);
                     ctx.fillText(xi_phone, 30, 240);
                     if (xu_email.value!==null && brtrimin(xu_email.value)!=="") {
                        ctx.fillText(xu_email.value, 30, 260);
                     }
                     today=new Date();
                     ctx.font = '10px serif';
                     ctx.fillText(today, 2, 305);
                     document.getElementById("formfinal").style.display="block";
                     document.getElementById("xtoemail").value=xjson.jtoemail;
                     document.getElementById("xreg_id").value=xjson.jnote;
                     document.getElementById("xebody").value=xjson.ju_name+","+xu_gender+","+xjson.jsating+","+xjson.ji_name+","+xi_phone+","+xu_email.value;
                  }
               }
               document.getElementById("divanigif1").style.display="none";
            } else if (xhr.status !== 200) {
               alert('Request failed.  Returned status of ' + xhr.status);
            }
         };
         xhr.send(xpara);
   }
   function brdef_cors(method, url) {
      var xhr = new XMLHttpRequest();
      if ("withCredentials" in xhr){
         xhr.open(method, url, true);
      } else if (typeof XDomainRequest != "undefined"){
         xhr = new XDomainRequest();
         xhr.open(method, url);
      } else {
         xhr = null;
      }
      return xhr;
   }

