# Bookmarklets collection

## General Info
* How to add Boomarklets
    * Drag the "Drag me to your bookmarks bar" to your bookmark bar. Alternatively click the bookmark button (star), a box will pop up and click more. Where it says URL, copy and paste the bookmarklet code. Then click save and your bookmarklet should appear with other bookmarks.
* Blocked Bookmarklets
    * If a bookmarklet is blocked when you click on the bookmarklet a little shield with a X on it will appear next to the bookmark button. Click on that shield and it will tell you that the page is trying to load "Scripts from unathenticated sources." You click on load unsafe scripts and then the page will refresh. You then click on the bookmarklet again and it should load.
    * Some bookmarklets may not work on certain browsers. All work on Google Chrome. 
* Sources
    * I have created none of these bookmarklets. The names I have listed them as may not be their original names. I will not site the original authors. Some bookmarklets may be found by just looking up the name.

### Asteroids
Spawns a spaceship which can destroy stuff. Arrow keys to move, space to shoot, and escape to quit.

```js
javascript:var KICKASSVERSION='2.0';var s = document.createElement('script');s.type='text/javascript';document.body.appendChild(s);s.src='//hi.kickassapp.com/kickass.js';void(0);
```

### Snake 
The classic game of snake. Arrow keys to move and P to pause. If you use this on a webpage with text forms (such as Google Forms) you will no longer be able to type.
* You can change the siza of the game by changing "Q=44" in the beginning of the bookmarklet.

```js
javascript:Q=44;m=b=Q*Q;a=[P=l=u=d=p=S=w=0];u=89;f=(h=j=t=(b+Q)/2)-1;(B=(D=document).body).appendChild(x=D.createElement("p"));(X=x.style).position="fixed";X.left=X.top=0;X.background="#FFF";x.innerHTML="<p></p><canvas>";v=(s=x.childNodes)[0];(s=s[1]).width=s.height=5*Q;c=s.getContext("2d"); onkeydown=onblur=F=function(e,g){g?a[f]?(w+=m,f=Math.random(l+=8)*(R=Q-2)*R|(u=0),F(f+=Q+1+2*(f/R|0),g)):F(f):0>e?(l?--l:(y=t,t=a[t]-2,F(y)),S+=(w*=0.8)/4,m=999/(u++ +10),a[h+=[-1,-Q,1,Q][d=p]]?B.removeChild(x,alert("Game Over")):(F(h),F(e,j=h),v.innerHTML=P?(setTimeout(F,50,e,0),S|0):"Press P")):-e?(y=(a[e]=e<Q|e>=Q*Q-Q|!(e%Q)|e%Q==Q-1|2*(e==h))+(e==f),e==h&&(a[j]=2+h),c.fillStyle="hsl("+99*!a[e]+","+2*m+"%,"+50*y+"%)",c.fillRect(e%Q*5,5*(e/Q|0),5,5)):isNaN(y=e.keyCode-37)|43==y?(P=y&&!P)&&F(-1): p=!P|y&-4|!(y^2^d)?p:y;return!1};for(;--b;F(b));void F(-1);
```

### Edit
Allows you to edit the page. 

```js
javascript:document.body.contentEditable = 'true'; document.designMode='on'; void 0
```

### Unedit
Removes editing ability (also removes cursor from edit).

```js
javascript:document.body.contentEditable = 'false'; document.designMode='off'; void 0
```

### Asteroids rip-off
A complete rip-off of the previously mentioned asteroids. Same controls, but you bounce off walls.

```js
javascript:var s=document.createElement('script');s.type='text/javascript';s.onerror=function(e){alert('Failed to load the script. The site\'s Content Security Policy might be blocking it. Feel free to try again.');};document.body.appendChild(s);s.src='https://blog.roysolberg.com/js/dom2.min.js';void(0);
```

### Katamari
Spawns a big ball which picks up stuff. Controls are editable.
* Blocked by default. See top for more info.

```js
javascript:var i,s,ss=['http://kathack.com/js/kh.js','http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js'];for(i=0;i!=ss.length;i++){s=document.createElement('script');s.src=ss[i];document.body.appendChild(s);}void(0);
```

### Font Bomb
Click to spawn a bomb at your cursor that sends text flying. 
* Can be laggy for some computers or webpages.

```js
javascript:(function () {var s = document.createElement('script');s.setAttribute('src', 'http://fontbomb.ilex.ca/js/main.js');document.body.appendChild(s);}());
```

### Kill Element
Click on an element to delete it.

```js
javascript:for(var i=0; i<(document.getElementsByTagName('a')).length; i++) {(document.getElementsByTagName('a')[i]).style.pointerEvents = 'none';}function handler(e) {e = e || window.event;var target = e.target || e.srcElement;target.style.display = 'none';document.removeEventListener('click', handler, false);cursor('default');for(var i=0; i<(document.getElementsByTagName('a')).length; i++) {(document.getElementsByTagName('a')[i]).style.pointerEvents = 'initial';}}document.addEventListener('click', handler, false);cursor('crosshair');function cursor(cur) { document.body.style.cursor = cur; }
```

### Reveal Password
Reveals your password. The same as clicking the "eye" on many password entries.

```js
javascript:Array.prototype.slice.call(document.querySelectorAll('input[type=password]')).map(function(el){el.setAttribute('type','text')})
```

### Piano
Spawns a playable piano. Has letters on keys, preloaded songs, and can save songs.
* Saving songs will not work across different pages. Nor if you refresh the page.

```js
javascript:(function(){var js=document.body.appendChild(document.createElement("script"));js.onerror=function(){alert("Sorry, the script could not be loaded.")};js.src="https://rawgit.com/Krazete/bookmarklets/master/piano.js"})();
```

### AdVark
Allows you to change certain elements on the page.
* A control box will show the hotkeys when "H" is pressed.
* Blocked by default. See top for more info.

```js
javascript:document.getElementsByTagName('head')[0].appendChild(document.createElement('script')).setAttribute('src','http://www.karmatics.com/aardvark/bookmarklet.js')
```

### Shortwave
Allows you to use shortcuts to get to pages.
* This bookmarklet has a website. I strongly encourage you to visit it to use this bookmarklet to its full effect.

```js
javascript:SISW();function SISW(){var t=window.getSelection?window.getSelection():(document.getSelection?document.getSelection():(document.selection?document.selection.createRange().text:''));var c=window.prompt('Type `help` for a list of commands:');if(t!=''){if(c){c+=' '+t;}else{c=''+t;};};if(c){var u='http://shortwaveapp.com/?go&c='+c+'&t='+(document.title?encodeURI(document.title):'')+'&s=http://';if(c.substring(0,1)==' '){var w=window.open(u);w.focus();}else{window.location.href=u;};};};
```

### Coordinates
Shows the coordinates of you mouse's position. 
* Coordinates shown at end of URL.

```js
javascript:document.addEventListener('mousemove',function(e)%7Blocation.hash=(window.scrollX+e.clientX)+','+(window.scrollY+e.clientY)%7D,true);
```

### Open
This opens a mini website in the top right corner of your screen.
* The website to visit is customizable.
* This is very buggy and may only work on some websites.
* Size of window is customizable.
* Edit "frame.src" for website.
* Varitaions:

Original:
```js
javascript:var frame = document.createElement('iframe'); frame.src="https://skilstak.io"; frame.style.position="fixed"; frame.style.top="5%"; frame.style.right="0%";frame.style.height="200px";frame.style.width="275px"; frame.style.zIndex="100000"; document.body.appendChild(frame);var btn = document.createElement('button');btn.style.position="fixed";btn.style.top="5%";btn.style.right="25%";btn.zIndex="100000";btn.innerHTML="HIDE";document.body.appendChild(btn);
```

Minecraft:
```js
javascript:var frame = document.createElement('iframe'); frame.src="https://classic.minecraft.net"; frame.style.position="fixed"; frame.style.top="5%"; frame.style.right="0%";frame.style.height="700px";frame.style.width="750px"; frame.style.zIndex="100000"; document.body.appendChild(frame);var btn = document.createElement('button');btn.style.position="fixed";btn.style.top="5%";btn.style.right="25%";btn.zIndex="100000";btn.innerHTML="HIDE";document.body.appendChild(btn);
```

Insanity (Game made by some kid at Skilstak)
```js
javascript:var frame = document.createElement('iframe'); frame.src="https://insanity.netlify.com/"; frame.style.position="fixed"; frame.style.top="5%"; frame.style.right="0%";frame.style.height="575px";frame.style.width="700px"; frame.style.zIndex="100000"; document.body.appendChild(frame);var btn = document.createElement('button');btn.style.position="fixed";btn.style.top="5%";btn.style.right="25%";btn.zIndex="100000";btn.innerHTML="HIDE";document.body.appendChild(btn);
```

### Alert
Opens a box at the top of the screen with customizable text.

```js
javascript:alert("Heckle deckle dee, that's quite the fee.");
```

### Clone Page
This clones the current page into an about blank page.
* Some elements may not load correctly.
* Any edits done to the page (including the pre-mentioned bookmarklet) will save, even after refresh.

```js
javascript:(function(){var i, nd; function copyChildren(a,b){var i, nn; for(i=0;i<a.childNodes.length;++i) { nn = a.childNodes[i].cloneNode(true); if(nd.importNode) nn = nd.importNode(nn, true); b.appendChild(nn); } } nd=window.open().document; nd.open(); nd.close(); /*140681*/ copyChildren(document.getElementsByTagName("head")[0], nd.getElementsByTagName("head")[0]); copyChildren(document.body, nd.body);})();
```

### Slowly Clone Page
This slowly clones the page.
* Some elements may load better using this than the instant clone.
* Same as before edits will save even after refresh.
* For a "quick clone" use a big number such as '918237209'.

```js
javascript:(function(){var y,x,e,i,speed,L; while(x=document.getElementsByTagName("script")[0])x.parentNode.removeChild(x); speed=parseInt(prompt("Print how many characters at a time?\n1 is slowest.",30)); function T(){x.write(e.substr(i,speed)); if (i<L) setTimeout(T,1); else x.close(); i+=speed; if (i>L)i=L; y.status=i+"/"+L } if (speed>0) { e=document.documentElement.innerHTML; L=e.length; i=0; y=open(); x=y.document; T(); } })()
```

### Play Audio
This plays any mp3s on the page.
* If there are no mp3s it will prompt you to type in the name of a song. It will then look it up (results will be mp3s.)

```js
javascript:var e,t,n=document.links,i=[],o=0;for(t in n){var a=n[t].toString().toUpperCase();0==a.indexOf("JAVASCRIPT:")||-1==a.indexOf(".MP3")&&-1==a.indexOf(".OGG")&&-1==a.indexOf(".WAV")||i.push(n[t])}if(0==i.length)w(prompt("No songs detected on the current page. What type of music would you like to hear?","okgo"));else{var d=x("div","player","","",""),r=x("div","playing","","",""),p=x("div","progressbar","","",function(t){var n=t.clientX;n/=window.innerWidth,e.currentTime=e.duration*n}),l=x("div","progress","","","");p.appendChild(l),r.appendChild(p);var s=x("div","songname","","","");r.appendChild(s);var u=x("div","buttons","","","");u.appendChild(x("button","","|◀","",y)),u.appendChild(x("button","","||","",function(){e.paused?(e.play(),this.innerHTML="||"):(e.pause(),this.innerHTML="▶")})),u.appendChild(x("button","","▶|","",C)),u.appendChild(x("button","","⤭","",function(){o=Math.floor(Math.random()*i.length),f()})),u.appendChild(x("button","","⌕","",function(){w(prompt("What type of music would you like to hear?","okgo"))})),r.appendChild(u),d.appendChild(r);var c=x("ul","playlist","","","");for(songIndex in i){var h=decodeURIComponent(unescape(i[songIndex].href));c.appendChild(x("li","",h.substring(h.lastIndexOf("/")+1),songIndex,function(){o=parseInt(this.getAttribute("data")),f()}))}d.appendChild(c);var g=x("style","","","","");g.innerHTML=".player{position:absolute;bottom:0;left:0;right:0;background:grey;font-size:x-large;color:#87ceeb;text-shadow:0 1px 1px #000;font-family:courier;font-weight:700}.playing{width:100%;height:160px}.playlist{position:fixed;top:0;bottom:170px;width:100%;background:grey;box-sizing:border-box;margin:0;overflow:scroll}.progressbar{position:relative;height:40px;margin:10px;border-radius:20px;text-align:center;overflow:hidden;border:1px solid #555}.progress{position:relative;width:99%;height:40px;background:#87ceeb}.songname{height:40px;width:100%;text-align:center;white-space:nowrap}.buttons{height:60px;width:100%;text-align:center}.player button{background:0 0;border:none;font-size:40px;color:#87ceeb;text-shadow:0 1px 1px #000}",d.appendChild(g);var m=document.createElement("meta"),b=document.createAttribute("name");b.value="viewport",m.setAttributeNode(b),(b=document.createAttribute("content")).value="width=device-width, initial-scale=1",m.setAttributeNode(b),document.head.appendChild(m),document.body.innerHTML="",document.body.appendChild(d),(e=new Audio).addEventListener("ended",C,!1),v(),f(),navigator.mediaSession.setActionHandler("previoustrack",y),navigator.mediaSession.setActionHandler("nexttrack",C)}function f(){e.src=i[o],e.play();var t=decodeURIComponent(i[o].href);s.innerHTML=t.substring(t.lastIndexOf("/")+1),navigator.mediaSession.metadata=new MediaMetadata({title:s.innerHTML})}function x(e,t,n,i,o){var a=document.createElement(e);""!=t&&a.classList.add(t);var d=document.createAttribute("data");return d.value=i,a.setAttributeNode(d),a.appendChild(document.createTextNode(n)),a.onclick=o,a}function v(){l.style.width=e.currentTime/e.duration*100+"%",requestAnimationFrame(v)}function w(e){e&&window.open("https://www.google.com/search?q=intitle:\"index.of\" (wma|mp3|midi) "+e,"_self")}function y(){o>0?o--:o=i.length-1,f()}function C(){o<i.length-1?o++:o=0,f()}
```

### Change Font
Type in the name of a font and the font will change.
* Only a couple of fonts are recogniized. There is a list with the bookmarklet.

```js
javascript:function font_c(){var f_name=prompt("Enter the name of font! (no caps) \n For list of fonts visit http://goo.gl/I06Lz");document.body.style.fontFamily=f_name;}font_c();
```

### Font Name
Click on text and it will tell you the font.

```js
javascript:var d=document,b=d.body,s=d.createElement('style'),m;s.innerHTML='*{cursor:help !important;}';b.appendChild(s);b.addEventListener('click',l,0);function l(e){m=/"([^"]+)"|'([^']+)'|([^,]+)/.exec(window.getComputedStyle(e.target).fontFamily);alert('That font is '+(m[1]||m[2]||m[3]));b.removeChild(s);b.removeEventListener('click',l);e.preventDefault()}
```

## Traps
* The next section will be more trap related things such as flipping the screen on an input, changing the text they type to something pre-determined, or even making their screen slowly spin around.
* None of these are permanent and can be fixed with a refresh.


### Flip 180
Instantly flips the screen upside down.

```js
javascript:(function(){['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix){document.body.style[prefix + 'transform'] = 'rotate(180deg)';});}())
```

### Flip Trap
Waits around 5 seconds then, when ther is a input, flips the screen.
* The waiting period can be changed.
* Does not apply to multiple tabs.
* The flipping has an animation, unlike the one above.

```js
javascript:(function(){setTimeout(function(){document.onmousemove = document.onkeypress = function(){['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix){document.body.style[prefix + 'transition'] = prefix + 'transform 3s';document.body.style[prefix + 'transform'] = 'rotate(180deg)';});}}, 5000);}())
```

### Randomized Tilt
Tilts each element at a different degree (only slightly,you wont be seeing things upside down.) 
* You can use this more than once to get different tilts.

```js
javascript:(function(){['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix){Array.prototype.slice.call(document.querySelectorAll('div,p,span,img,a,body')).map(function(el){el.style[prefix + 'transform'] = 'rotate(' + (Math.floor(Math.random() * 3) - 1) + 'deg)';});});}())
```

### Steamed Hams

