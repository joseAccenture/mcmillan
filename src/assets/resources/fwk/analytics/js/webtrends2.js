function WebTrends(){var a=this;this.dcsid="dcswqo4cm1000082fn4kknjfm_7k9g",this.domain="statse.webtrendslive.com",this.timezone=1,this.fpcdom=".gencat.cat",this.onsitedoms="gencat.cat,www.gencat.cat,www20.gencat.cat,www10.gencat.cat,www14.gencat.cat,www15.gencat.cat,www6.gencat.cat,www6.gencat.net,turisme-web.agilecontents.com,c1.cercalia.com,c2.cercalia.com,c4.cercalia.com,c5.cercalia.com,fitxers.dadesobertes.gencat.cat",this.downloadtypes="xls,xlsx,doc,docx,pdf,txt,csv,zip,epub,rdf,xml,flv,ics,json,kml,kmz,odf,rss,shp,sparql,tms,wms,gpx,mp3,exe,jnlp,msi",this.navigationtag="div,table",this.adclickparam="WT.ac",this.trackevents=!0,this.trimoffsiteparams=!0,this.enabled=!0,this.i18n=!1,this.fpc="WT_FPC",this.paidsearchparams="gclid",this.DCS={},this.WT={},this.DCSext={},this.images=[],this.index=0,this.exre=function(){return window.RegExp?new RegExp("dcs(uri)|(ref)|(aut)|(met)|(sta)|(sip)|(pro)|(byt)|(dat)|(p3p)|(cfg)|(redirect)|(cip)","i"):""}(),this.re=function(){return window.RegExp?a.i18n?{"%25":/\%/g}:{"%09":/\t/g,"%20":/ /g,"%23":/\#/g,"%26":/\&/g,"%2B":/\+/g,"%3F":/\?/g,"%5C":/\\/g,"%22":/\"/g,"%7F":/\x7F/g,"%A0":/\xA0/g}:""}(),this.status="1"}function dcsMultiTrack(){if("undefined"!=typeof _tag)return _tag.dcsMultiTrack()}function dcsDebug(){if("undefined"!=typeof _tag)return _tag.dcsDebug()}function rplCadena(a){var d,b="",c=!1;if(null!=a&&isNaN(a)&&"function"!=typeof a){var f={};f.A={rg:[192,198]},f.a={rg:[224,230]},f.C={eq:[199]},f.c={eq:[231]},f.E={rg:[200,203]},f.e={rg:[232,235]},f.I={rg:[204,207]},f.i={rg:[236,239]},f.N={eq:[209]},f.n={eq:[241]},f.O={rg:[210,214]},f.o={rg:[242,246]},f.U={rg:[217,220]},f.u={rg:[249,252]},f["'"]={eq:[8217,8220,8221]};for(var g,h,i,j=0;j<a.length;j++){d=a.charCodeAt(j),c=!1;for(g in f)for(h in f[g])if("rg"==h)d>=f[g][h][0]&&d<=f[g][h][1]&&(b+=g,c=!0);else for(i=0;i<f[g][h].length;i++)d==f[g][h][i]&&(b+=g,c=!0);c||(b+=a.charAt(j))}return b}return a}function testDomain(){var a=new String(window.location.hostname);"www"!=a.slice(0,3)||".gencat.net"!=a.slice(a.indexOf("."))&&".gencat.es"!=a.slice(a.indexOf("."))||(DCS.dcssip=a.slice(0,a.indexOf("."))+".gencat.cat")}function isoGencat(a){if("string"==typeof a)return rplCadena(a);for(var e in a)a[e]=rplCadena(a[e]);return!1}function onPlayBIG(a,b,c,d){if(_tag){var e=_tag.dcsid;_tag.dcsid="dcso26u0400000c5ozrsb4268_8f7p","string"==typeof b&&b&&"null"!=b||(b=window.location.href),this.dcsMultiTrack("WT.titol_player",d,"WT.url_player",a,"WT.url_pag_player",b,"WT.tipus_player",c+""),_tag.dcsid=e}}function getTag(){if("undefined"!=typeof _tag)return _tag}WebTrends.prototype.dcsGetId=function(){this.enabled&&document.cookie.indexOf(this.fpc+"=")==-1&&document.cookie.indexOf("WTLOPTOUT=")==-1&&document.write("<script type='text/javascript' src='http"+(0==window.location.protocol.indexOf("https:")?"s":"")+"://"+this.domain+"/"+this.dcsid+"/wtid.js'></script>")},WebTrends.prototype.dcsGetCookie=function(a){var b=document.cookie.split("; "),c=[],d=0,e=0,f=a.length,g=b.length;for(e=0;e<g;e++){var h=b[e];h.substring(0,f+1)==a+"="&&(c[d++]=h)}var i=c.length;if(i>0){if(d=0,i>1&&a==this.fpc){var j=new Date(0);for(e=0;e<i;e++){var k=parseInt(this.dcsGetCrumb(c[e],"lv")),l=new Date(k);l>j&&(j.setTime(l.getTime()),d=e)}}return unescape(c[d].substring(f+1))}return null},WebTrends.prototype.dcsGetCrumb=function(a,b,c){for(var d=a.split(c||":"),e=0;e<d.length;e++){var f=d[e].split("=");if(b==f[0])return f[1]}return null},WebTrends.prototype.dcsGetIdCrumb=function(a,b){for(var c=a.substring(0,a.indexOf(":lv=")),d=c.split("="),e=0;e<d.length;e++)if(b==d[0])return d[1];return null},WebTrends.prototype.dcsIsFpcSet=function(a,b,c,d){var e=this.dcsGetCookie(a);return e?b==this.dcsGetIdCrumb(e,"id")&&c==this.dcsGetCrumb(e,"lv")&&d==this.dcsGetCrumb(e,"ss")?0:3:2},WebTrends.prototype.dcsFPC=function(){if(document.cookie.indexOf("WTLOPTOUT=")==-1){var a=this.WT,b=this.fpc,c=new Date,d=6e4*c.getTimezoneOffset()+36e5*this.timezone;c.setTime(c.getTime()+d);var e=new Date(c.getTime()+31536e7),f=new Date(c.getTime());if(a.co_f=a.vtid=a.vtvs=a.vt_f=a.vt_f_a=a.vt_f_s=a.vt_f_d=a.vt_f_tlh=a.vt_f_tlv="",document.cookie.indexOf(b+"=")==-1){if("undefined"!=typeof gWtId&&""!=gWtId)a.co_f=gWtId;else if("undefined"!=typeof gTempWtId&&""!=gTempWtId)a.co_f=gTempWtId,a.vt_f="1";else{a.co_f="2";for(var g=c.getTime().toString(),h=2;h<=32-g.length;h++)a.co_f+=Math.floor(16*Math.random()).toString(16);a.co_f+=g,a.vt_f="1"}"undefined"==typeof gWtAccountRollup&&(a.vt_f_a="1"),a.vt_f_s=a.vt_f_d="1",a.vt_f_tlh=a.vt_f_tlv="0"}else{var i=this.dcsGetCookie(b),j=this.dcsGetIdCrumb(i,"id"),k=parseInt(this.dcsGetCrumb(i,"lv")),l=parseInt(this.dcsGetCrumb(i,"ss"));if(null==j||"null"==j||isNaN(k)||isNaN(l))return;a.co_f=j;var m=new Date(k);a.vt_f_tlh=Math.floor((m.getTime()-d)/1e3),f.setTime(l),(c.getTime()>m.getTime()+18e5||c.getTime()>f.getTime()+288e5)&&(a.vt_f_tlv=Math.floor((f.getTime()-d)/1e3),f.setTime(c.getTime()),a.vt_f_s="1"),c.getDay()==m.getDay()&&c.getMonth()==m.getMonth()&&c.getYear()==m.getYear()||(a.vt_f_d="1")}a.co_f=escape(a.co_f),a.vtid="undefined"==typeof this.vtid?a.co_f:this.vtid||"",a.vtvs=(f.getTime()-d).toString();var n="; expires="+e.toGMTString(),o=c.getTime().toString(),p=f.getTime().toString();document.cookie=b+"=id="+a.co_f+":lv="+o+":ss="+p+n+"; path=/"+(""!=this.fpcdom?"; domain="+this.fpcdom:"");var q=this.dcsIsFpcSet(b,a.co_f,o,p);0!=q&&(a.co_f=a.vtvs=a.vt_f_s=a.vt_f_d=a.vt_f_tlh=a.vt_f_tlv="","undefined"==typeof this.vtid&&(a.vtid=""),a.vt_f=a.vt_f_a=q)}},WebTrends.prototype.dcsAdSearch=function(){if(document.links){var g,a=this.adclickparam+"=",b=a.length,c=new RegExp(a,"i"),d=document.links.length,e=end=-1,f=urlp=value="",h=document.URL+"",i=h.search(c);i!=-1&&(end=h.indexOf("&",i),urlp=h.substring(i,end!=-1?end:h.length),g=new RegExp(urlp+"(&|#)","i"));for(var j=0;j<d;j++)document.links[j].href&&(f=document.links[j].href+"",urlp.length>0&&(f=f.replace(g,"$1")),e=f.search(c),e!=-1&&(i=e+b,end=f.indexOf("&",i),value=f.substring(i,end!=-1?end:f.length),this.WT.ad=this.WT.ad?this.WT.ad+";"+value:value))}},WebTrends.prototype.dcsIsOnsite=function(a){if(a.length>0){if(a=a.toLowerCase(),a==window.location.hostname.toLowerCase())return!0;if("function"==typeof this.onsitedoms.test)return this.onsitedoms.test(a);if(this.onsitedoms.length>0)for(var b=this.dcsSplit(this.onsitedoms),c=b.length,d=0;d<c;d++)if(a==b[d])return!0}return!1},WebTrends.prototype.dcsTypeMatch=function(a,b){for(var c=a.toLowerCase().substring(a.lastIndexOf(".")+1,a.length),d=this.dcsSplit(b),e=d.length,f=0;f<e;f++)if(c==d[f])return!0;return!1},WebTrends.prototype.dcsEvt=function(a,b){for(var c=a.target||a.srcElement;c.tagName&&c.tagName.toLowerCase()!=b.toLowerCase();)c=c.parentElement||c.parentNode;return c},WebTrends.prototype.dcsNavigation=function(a){var f,g,h,b="",c="",d=this.dcsSplit(this.navigationtag),e=d.length;for(f=0;f<e&&(h=d[f],!(h.length&&(g=this.dcsEvt(a,h),b=g.getAttribute&&g.getAttribute("id")?g.getAttribute("id"):"",c=g.className||"",b.length||c.length)));f++);return b.length?b:c},WebTrends.prototype.dcsBind=function(a,b){"function"==typeof b&&document.body&&(document.body.addEventListener?document.body.addEventListener(a,b.wtbind(this),!0):document.body.attachEvent&&document.body.attachEvent("on"+a,b.wtbind(this)))},WebTrends.prototype.dcsET=function(){var a=navigator.appVersion.indexOf("MSIE")!=-1?"click":"mousedown";this.dcsBind(a,this.dcsDownload),this.dcsBind(a,this.dcsOffsite),this.dcsBind("contextmenu",this.dcsRightClick)},WebTrends.prototype.dcsMultiTrack=function(){var a=dcsMultiTrack.arguments?dcsMultiTrack.arguments:arguments;if(a.length%2==0){this.dcsSetProps(a);var b=new Date;this.DCS.dcsdat=b.getTime(),this.dcsFPC(),this.dcsTag()}},WebTrends.prototype.dcsCleanUp=function(){this.DCS={},this.WT={},this.DCSext={},arguments.length%2==0&&this.dcsSetProps(arguments)},WebTrends.prototype.dcsSetProps=function(a){for(var b=0;b<a.length;b+=2)0==a[b].indexOf("WT.")?this.WT[a[b].substring(3)]=a[b+1]:0==a[b].indexOf("DCS.")?this.DCS[a[b].substring(4)]=a[b+1]:0==a[b].indexOf("DCSext.")&&(this.DCSext[a[b].substring(7)]=a[b+1])},WebTrends.prototype.dcsSplit=function(a){for(var b=a.toLowerCase().split(","),c=b.length,d=0;d<c;d++)b[d]=b[d].replace(/^\s*/,"").replace(/\s*$/,"");return b},WebTrends.prototype.dcsDownload=function(a){if(a=a||window.event||"",a&&("number"!=typeof a.which||1==a.which)){var b=this.dcsEvt(a,"A");if(null!=b&&"undefined"!=b&&null!=b.href&&"undefined"!=b.href){var c=b.hostname?b.hostname.split(":")[0]:"";if(this.dcsIsOnsite(c)&&(this.dcsTypeMatch(b.pathname,this.downloadtypes)||this.dcsTypeMatch(b.search,this.downloadtypes))){var e=(b.search?b.search.substring(b.search.indexOf("?")+1,b.search.length):"",b.pathname?0!=b.pathname.indexOf("/")?"/"+b.pathname:b.pathname:"/"),f="",g=document.all?b.innerText:b.text,h=this.dcsEvt(a,"IMG"),i=b.getAttribute("title");h.alt?f=h.alt:g?f=g:b.innerHTML&&(f=b.innerHTML),f=i||f,f=isoGencat(f),this.dcsMultiTrack("DCS.dcssip",c,"DCS.dcsuri",e,"DCS.dcsqry",b.search||"","WT.ti","Download:"+f,"WT.dl","20","WT.nv",this.dcsNavigation(a)),this.DCS.dcssip=this.DCS.dcsuri=this.DCS.dcsqry=this.WT.ti=this.WT.dl=this.WT.nv=""}}}},WebTrends.prototype.dcsRightClick=function(a){if(a=a||window.event||""){var b=a.which||a.button;if(1!=b||navigator.userAgent.indexOf("Safari")!=-1){var c=this.dcsEvt(a,"A");if("undefined"!=typeof c.href&&c.href&&"undefined"!=typeof c.protocol&&c.protocol&&c.protocol.indexOf("http")!=-1&&"undefined"!=typeof c.pathname&&this.dcsTypeMatch(c.pathname,this.downloadtypes)){var d=c.pathname?0!=c.pathname.indexOf("/")?"/"+c.pathname:c.pathname:"/",e=c.hostname?c.hostname.split(":")[0]:"";this.dcsMultiTrack("DCS.dcssip",e,"DCS.dcsuri",d,"DCS.dcsqry","","WT.ti","RightClick:"+d,"WT.dl","25"),this.DCS.dcssip=this.DCS.dcsuri=this.DCS.dcsuri_bis=this.WT.ti=this.WT.dl=this.WT.nv=""}}}},WebTrends.prototype.dcsOffsite=function(a){if(a=a||window.event||"",a&&("number"!=typeof a.which||1==a.which)){var b=this.dcsEvt(a,"A");if(null!=b&&"undefined"!=b&&null!=b.href&&"undefined"!=b.href){var c=b.hostname?b.hostname.split(":")[0]:"",d=b.protocol||"";if(c.length>0&&0==d.indexOf("http")&&!this.dcsIsOnsite(c)){var e=b.search?b.search.substring(b.search.indexOf("?")+1,b.search.length):"",f=b.pathname?0!=b.pathname.indexOf("/")?"/"+b.pathname:b.pathname:"/";this.dcsMultiTrack("DCS.dcssip",c,"DCS.dcsuri",f,"DCS.dcsqry",this.trimoffsiteparams?"":e,"DCS.dcsref",window.location,"WT.ti","Offsite:"+c+f+"?"+e,"WT.dl","24","WT.nv",this.dcsNavigation(a)),this.DCS.dcssip=this.DCS.dcsuri=this.DCS.dcsqry=this.DCS.dcsref=this.WT.ti=this.WT.dl=this.WT.nv=""}}}},WebTrends.prototype.dcsAdv=function(){this.trackevents&&"function"==typeof this.dcsET&&(window.addEventListener?window.addEventListener("load",this.dcsET.wtbind(this),!1):window.attachEvent&&window.attachEvent("onload",this.dcsET.wtbind(this))),this.dcsFPC(),this.dcsAdSearch()},WebTrends.prototype.dcsVar=function(){var a=new Date,b=this.WT,c=this.DCS;if(b.tz=parseInt(a.getTimezoneOffset()/60*-1)||"0",b.bh=a.getHours()||"0",b.ul="Netscape"==navigator.appName?navigator.language:navigator.userLanguage,"object"==typeof screen&&(b.cd="Netscape"==navigator.appName?screen.pixelDepth:screen.colorDepth,b.sr=screen.width+"x"+screen.height),"boolean"==typeof navigator.javaEnabled()&&(b.jo=navigator.javaEnabled()?"Yes":"No"),document.title)if(window.RegExp){var d=new RegExp("^"+window.location.protocol+"//"+window.location.hostname+"\\s-\\s");b.ti=document.title.replace(d,"")}else b.ti=document.title;if(b.js="Yes",b.jv=function(){var a=navigator.userAgent.toLowerCase(),b=parseInt(navigator.appVersion),c=a.indexOf("mac")!=-1,d=a.indexOf("firefox")!=-1,e=a.indexOf("firefox/0.")!=-1,f=a.indexOf("firefox/1.0")!=-1,g=a.indexOf("firefox/1.5")!=-1,h=a.indexOf("firefox/2.0")!=-1,i=d&&!e&&!f&!g&!h,j=!d&&a.indexOf("mozilla")!=-1&&a.indexOf("compatible")==-1,k=j&&4==b,l=j&&b>=5,m=a.indexOf("msie")!=-1&&a.indexOf("opera")==-1,n=m&&4==b&&a.indexOf("msie 4")!=-1,o=m&&!n,p=a.indexOf("opera")!=-1,q=a.indexOf("opera 5")!=-1||a.indexOf("opera/5")!=-1,r=a.indexOf("opera 6")!=-1||a.indexOf("opera/6")!=-1,s=p&&!q&&!r,t="1.1";return i?t="1.8":h?t="1.7":g?t="1.6":e||f||l||s?t="1.5":c&&o||r?t="1.4":o||k||q?t="1.3":n&&(t="1.2"),t}(),b.ct="unknown",document.body&&document.body.addBehavior)try{document.body.addBehavior("#default#clientCaps"),b.ct=document.body.connectionType||"unknown",document.body.addBehavior("#default#homePage"),b.hp=document.body.isHomePage(location.href)?"1":"0"}catch(a){}if(document.all?b.bs=document.body?document.body.offsetWidth+"x"+document.body.offsetHeight:"unknown":b.bs=window.innerWidth+"x"+window.innerHeight,b.fv=function(){var a,b;if(window.ActiveXObject)for(a=10;a>0;a--)try{return b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+a),a+".0"}catch(a){}else if(navigator.plugins&&navigator.plugins.length)for(a=0;a<navigator.plugins.length;a++)if(navigator.plugins[a].name.indexOf("Shockwave Flash")!=-1)return navigator.plugins[a].description.split(" ")[2];return"Not enabled"}(),b.slv=function(){var a="Not enabled";try{if(navigator.userAgent.indexOf("MSIE")!=-1){var b=new ActiveXObject("AgControl.AgControl");b&&(a="Unknown")}else navigator.plugins["Silverlight Plug-In"]&&(a="Unknown")}catch(a){}if("Not enabled"!=a){var c,d,e;if("object"==typeof Silverlight&&"function"==typeof Silverlight.isInstalled)for(c=3;c>0;c--){for(d=9;d>=0;d--)if(e=c+"."+d,Silverlight.isInstalled(e)){a=e;break}if(a==e)break}}return a}(),this.i18n&&("string"==typeof document.defaultCharset?b.le=document.defaultCharset:"string"==typeof document.characterSet?b.le=document.characterSet:b.le="unknown"),b.tv="8.6.2",b.dl="0",b.ssl=0==window.location.protocol.indexOf("https:")?"1":"0",c.dcsdat=a.getTime(),c.dcssip=window.location.hostname,c.dcsuri=window.location.pathname,c.dcsuri_bis=window.location.pathname.substring(3),b.es=c.dcssip+c.dcsuri,window.location.search&&(c.dcsqry=window.location.search),c.dcsqry)for(var e=c.dcsqry.toLowerCase(),f=this.paidsearchparams.length?this.paidsearchparams.toLowerCase().split(","):[],g=0;g<f.length;g++)if(e.indexOf(f[g]+"=")!=-1){b.srch="1";break}""!=window.document.referrer&&"-"!=window.document.referrer&&("Microsoft Internet Explorer"==navigator.appName&&parseInt(navigator.appVersion)<4||(c.dcsref=window.document.referrer))},WebTrends.prototype.dcsEscape=function(a,b){if(""!=b){a=a.toString();for(var c in b)b[c]instanceof RegExp&&(a=a.replace(b[c],c));return a}return escape(a)},WebTrends.prototype.dcsA=function(a,b){if(this.i18n&&""!=this.exre&&!this.exre.test(a))if("dcsqry"==a){for(var c="",d=b.substring(1).split("&"),e=0;e<d.length;e++){var f=d[e],g=f.indexOf("=");if(g!=-1){var h=f.substring(0,g),i=f.substring(g+1);0!=e&&(c+="&"),c+=h+"="+this.dcsEncode(i)}}b=b.substring(0,1)+c}else b=this.dcsEncode(b);return"&"+a+"="+this.dcsEscape(b,this.re)},WebTrends.prototype.dcsEncode=function(a){return"function"==typeof encodeURIComponent?encodeURIComponent(a):escape(a)},WebTrends.prototype.dcsCreateImage=function(a){document.images?(this.images[this.index]=new Image,this.images[this.index].src=a,this.index++):document.write('<IMG ALT="" BORDER="0" NAME="DCSIMG" WIDTH="1" HEIGHT="1" SRC="'+a+'">')},WebTrends.prototype.dcsMeta=function(){var a;if(document.all?a=document.all.tags("meta"):document.documentElement&&(a=document.getElementsByTagName("meta")),"undefined"!=typeof a)for(var b=a.length,c=0;c<b;c++){var d=a.item(c).name,e=a.item(c).content;a.item(c).httpEquiv;d.length>0&&(0==d.toUpperCase().indexOf("WT.")?this.WT[d.substring(3)]=e:0==d.toUpperCase().indexOf("DCSEXT.")?this.DCSext[d.substring(7)]=e:0==d.toUpperCase().indexOf("DCS.")&&(this.DCS[d.substring(4)]=e))}},WebTrends.prototype.dcsTag=function(){if(document.cookie.indexOf("WTLOPTOUT=")==-1){var a=this.WT,b=this.DCS,c=this.DCSext;"BenestarSocialFamilia"==c.wt_departament?c.wt_departament="Treball":"Economia i Coneixement"==c.wt_departament?c.wt_departament="Economia":"Empresa i Ocupacio"==c.wt_departament?c.wt_departament="Empresa":"Afers i Relacions Institucionals, Exteriors i Transparencia"==c.wt_departament?c.wt_departament="Exteriors":"Governacio i Relacions Institucionals"==c.wt_departament&&(c.wt_departament="Governacio");var d=this.i18n,e="http"+(0==window.location.protocol.indexOf("https:")?"s":"")+"://"+this.domain+(""==this.dcsid?"":"/"+this.dcsid)+"/dcs.gif?";d&&(a.dep="");for(var f in b)b[f]&&"function"!=typeof b[f]&&(e+=this.dcsA(f,b[f]));for(var g=["co_f","vtid","vtvs","vt_f_tlv"],h=0;h<g.length;h++){var i=g[h];a[i]&&(e+=this.dcsA("WT."+i,a[i]),delete a[i])}for(f in a)a[f]&&"function"!=typeof a[f]&&(e+=this.dcsA("WT."+f,a[f]));for(f in c)c[f]&&"function"!=typeof c[f]&&(d&&(a.dep=0==a.dep.length?f:a.dep+";"+f),e+=this.dcsA(f,c[f]));d&&a.dep.length>0&&(e+=this.dcsA("WT.dep",a.dep)),e.length>2048&&navigator.userAgent.indexOf("MSIE")>=0&&(e=e.substring(0,2040)+"&WT.tu=1"),this.dcsCreateImage(e),this.WT.ad=""}},WebTrends.prototype.dcsDebug=function(){var a=this,b=a.images[0].src,c=b.indexOf("?"),d=b.substring(0,c).split("/"),e="<b>Protocol</b><br><code>"+d[0]+"<br></code>";e+="<b>Domain</b><br><code>"+d[2]+"<br></code>",e+="<b>Path</b><br><code>/"+d[3]+"/"+d[4]+"<br></code>",e+="<b>Query Params</b><code>"+b.substring(c+1).replace(/\&/g,"<br>")+"</code>",e+="<br><b>Cookies</b><br><code>"+document.cookie.replace(/\;/g,"<br>")+"</code>",a.w&&!a.w.closed&&a.w.close(),a.w=window.open("","dcsDebug","width=500,height=650,scrollbars=yes,resizable=yes"),a.w.document.write(e),a.w.focus()},WebTrends.prototype.dcsCollect=function(){this.enabled&&(this.dcsVar(),this.dcsMeta(),this.dcsAdv(),isoGencat(this.WT),this.dcsTag())},Function.prototype.wtbind=function(a){var b=this,c=function(){return b.apply(a,arguments)};return c};