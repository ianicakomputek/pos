function omenu_m(id,xarg1) {
   var x = document.getElementById(id);
   if (xarg1 == null) {
      if (x.style.display == 'none') {
         x.style.display = 'block';
         x.style.visibility = 'visible';
         x.style.opacity = '1.0';
         document.getElementById('xtrigram').src = 'https://raw.githubusercontent.com/ianicakomputek/pos/master/close.png';
         document.getElementById('xslide').style.display = 'none';
         document.getElementById('xrow').style.display = 'none';
         document.getElementById('xfooter').style.display = 'none';
      }
      else {
         x.style.display = 'none';
         x.style.visibility = 'hidden';
         x.style.opacity = '0.0';
         document.getElementById('xtrigram').src = 'https://raw.githubusercontent.com/ianicakomputek/pos/master/trigram.png';
         document.getElementById('xslide').style.display = 'block';
         document.getElementById('xrow').style.display = 'block';
         document.getElementById('xfooter').style.display = 'block';
         parent.location.href = '#ngetop';
      }
   }
   else if (xarg1 == 'o') { x.style.display = 'block'; }
   else if (xarg1 == 'c') {
         x.style.display = 'none';
         x.style.visibility = 'hidden';
         x.style.opacity = '0.0';
         document.getElementById('xtrigram').src = 'https://raw.githubusercontent.com/ianicakomputek/pos/master/trigram.png';
         document.getElementById('xslide').style.display = 'block';
         document.getElementById('xrow').style.display = 'block';
         document.getElementById('xfooter').style.display = 'block';
      }
}

    function labnolThumb(id) {
        var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',    <!--gak bisa dirubah nih ! -->
            play = '<div class="play"></div>';
        return thumb.replace("ID", id) + play;
    }

    function labnolIframe() {
        var iframe = document.createElement("iframe");
        var embed = "https://www.youtube.com/embed/ID?autoplay=1";
        iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", "1");
        this.parentNode.replaceChild(iframe, this);
    }
