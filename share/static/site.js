if(window==window.parent){document.observe("dom:loaded",function(){var a=new Alice.Application();window.alice=a;var b={images:"show",avatars:"show"};var c=/site\.js\?(.*)?$/;$$("script[src]").findAll(function(d){return d.src.match(c)}).each(function(d){var e=d.src.match(c)[1];e.split("&").each(function(g){var f=g.split("=");b[f[0]]=f[1]})});a.options=b;$$("ul.messages li.avatar:not(.consecutive) + li:not(.consecutive)").each(function(d){d.previous().setStyle({minHeight:"42px"})});$("helpclose").observe("click",function(){$("help").hide()});$$("#config_overlay option").each(function(d){d.selected=false});$("tab_overflow_overlay").observe("change",function(f){var d=a.getWindow($("tab_overflow_overlay").value);if(d){d.focus()}});$("config_overlay").observe("change",function(f){switch($("config_overlay").value){case"Logs":a.toggleLogs(f);break;case"Connections":a.toggleConfig(f);break;case"Preferences":a.togglePrefs(f);break;case"Logout":if(confirm("Logout?")){window.location="/logout"}break;case"Help":var d=$("help");d.visible()?d.hide():d.show();break}$$("#config_overlay option").each(function(e){e.selected=false})});window.onkeydown=function(f){var d=a.activeWindow();if(d&&!$("config")&&!Alice.isSpecialKey(f.which)){d.input.focus()}};window.onresize=function(){if(a.activeWindow()){if(Prototype.Browser.Gecko){a.activeWindow().resizeMessagearea()}a.activeWindow().scrollToBottom()}};window.onfocus=function(){window.document.body.removeClassName("blurred");if(a.activeWindow()){a.activeWindow().input.focus()}a.isFocused=true};window.status=" ";window.onblur=function(){window.document.body.addClassName("blurred");a.isFocused=false};window.onhashchange=a.focusHash.bind(a);window.onorientationchange=function(){a.activeWindow().scrollToBottom(true)};a.addFilters([function(e){var d=e;d=d.replace(/(<a href=\"(:?.*?\.(:?wav|mp3|ogg|aiff))")/gi,'<img src="/static/image/play.png" onclick="Alice.playAudio(this)" class="audio"/>$1');return d},function(e){var d=e;if(a.options.images=="show"){d=d.replace(/(<a[^>]*>)([^<]*\.(:?jpe?g|gif|png|bmp|svg)(:?\?v=0)?)</gi,'$1<img src="http://i.usealice.org/$2" onload="Alice.loadInlineImage(this)" alt="Loading Image..." title="$2" style="display:none"/><')}return d}])})};