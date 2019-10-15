# Bookmarklets collection

## General Info
* How to add Boomarklets
    * Drag the "Drag me to your bookmarks bar" to your bookmark bar. Alternatively click the bookmark button (star), a box will pop up and click more. Where it says URL, copy and paste the bookmarklet code. Then click save and your bookmarklet should appear with other bookmarks.
* Blocked Bookmarklets
    * If a bookmarklet is blocked when you click on the bookmarklet a little shield with a X on it will appear next to the bookmark button. Click on that shield and it will tell you that the page is trying to load "Scripts from unathenticated sources." You click on load unsafe scripts and then the page will refresh. You then click on the bookmarklet again and it should load.
    * Some bookmarklets may not work on certain browsers. All work on Google Chrome. 
* Sources
    * I have created none of these bookmarklets. The names I have listed them as may not be their original names. I will not site the original authors. Some bookmarklets may be found by just looking up the name.
* Updates
    * New bookmarklets will be at the top. 
    * Added 




### Check Host

### Notepad

### Font?

### Faces

### Rolling SKy

### Dealbot
This is a bookmarklet from a website that allows you to see deals (amazon and other online shopping.)
* Go to https://thedealbot.com/Bookmarklet for more.
```js
javascript: (function() {    try {        function include(scriptUrl) {            var xmlhttp = new XMLHttpRequest();            xmlhttp.open('GET', scriptUrl);            xmlhttp.onreadystatechange = function()            {                if ((xmlhttp.status === 200) && (xmlhttp.readyState  === 4))                {                    eval(xmlhttp.responseText);                }            };            xmlhttp.send();        }        include('https://thedealbot.com/Bookmarklet/Bookmarklet.js?time=' + new Date().getTime());    } catch (e) {        console.log('Error', e);    }})();
```

### Gravity
This enables gravity on the page.
* This only works on some pages and elements.
```js
javascript:var script = document.createElement("script"); script.src="//gravityscript.github.io/grav.js"; document.body.appendChild(script);void(0);
```


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
Makes all text entered a set sentence or word.
* May not work on some websites.
* Change "var TEXT =" to set sentence or word.

```js
javascript:(function(){(function(){var TEXT = 'steamed hams 99 is the most underated battle royale game on steam ';Array.prototype.slice.call(document.querySelectorAll('input[type=text],textarea')).map(function(el){el.onkeypress=function(evt){var charCode = typeof evt.which == 'number' ? evt.which : evt.keyCode;if (charCode && charCode > 31) {var start = this.selectionStart, end = this.selectionEnd;this.value = this.value.slice(0, start) + TEXT[start % TEXT.length] + this.value.slice(end);this.selectionStart = this.selectionEnd = start + 1;}return false;}});}());}())
```

### Wavy Pictures
Makes pictures move in a wave like movement.

```js
javascript:R=0; x1=.1; y1=.05; x2=.25; y2=.24; x3=1.6; y3=.24; x4=300; y4=200; x5=300; y5=200; DI=document.getElementsByTagName("img"); DIL=DI.length; function A(){for(i=0; i-DIL; i++){DIS=DI[ i ].style; DIS.position='absolute'; DIS.left=(Math.sin(R*x1+i*x2+x3)*x4+x5)+"px"; DIS.top=(Math.cos(R*y1+i*y2+y3)*y4+y5)+"px"}R++}setInterval('A()',5); void(0)
```

### Pony
Spawns a pony that follows your cursor.
* Blocked by default. See top for more info.

```js
javascript:(function(){var fs=document.createElement("script");fs.onload=function(){Derpy();};fs.src="http://juju2143.ca/mousefly.js";document.head.appendChild(fs);}());
```

### 360
Makes the page spin in a circle.

```js
javascript:(function(){var s=document.createElement('style');s.innerHTML='%40-moz-keyframes roll { 100%25 { -moz-transform: rotate(129600deg); } } %40-o-keyframes roll { 100%25 { -o-transform: rotate(129600deg); } } %40-webkit-keyframes roll { 100%25 { -webkit-transform: rotate(129600deg); } } body{ -moz-animation-name: roll; -moz-animation-duration: 1440s; -moz-animation-iteration-count: 360; -o-animation-name: roll; -o-animation-duration: 1440s; -o-animation-iteration-count: 360; -webkit-animation-name: roll; -webkit-animation-duration: 1440s; -webkit-animation-iteration-count: 360; }';document.getElementsByTagName('head')[0].appendChild(s);}());
```

### Uglify
Changes the font to comic sans, messes up pictures, changes font sizes, changes colors to pink and green, and when you click the screen spins.
* Highly destructive. Can make any page unrecognizable.

```js
javascript:(function(){var elems=document.getElementsByTagName("*");for(var i = 0; i<elems.length;i++){elems[i].style.fontFamily="Comic Sans MS";elems[i].style.fontSize=Math.random()*75+"px";elems[i].style.color='#'+Math.random().toString(16).slice(2, 8);elems[i].style.backgroundColor='#'+Math.random().toString(16).slice(2,8)}})();document.onclick=function(){(function(){var d=0;setInterval(function(){document.body.style['-webkit-transform']= 'rotate('+ d +'deg)';d+=1},100)}());};
```

### Color Blind
Type in a number to see how different types of colorblindess affect pictures.

```js
javascript:(function(){var s=document.getElementById("colourblind-styling");var x=document.getElementById("colourblind-filters");if(!s){s=document.createElement("style");document.body.appendChild(s)}if(!x){x=document.createElement("div");x.setAttribute("style","height: 0; padding: 0; margin: 0; line-height: 0;");x.innerHTML='<svg id="colorblind-filters" style="display: none"> <defs> <filter id="protanopia"> <feColorMatrix type="matrix" values="0.567,0.433,0,0,0 0.558,0.442,0,0,0 0 0.242,0.758,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> <filter id="protanomaly"> <feColorMatrix type="matrix" values="0.817,0.183,0,0,0 0.333,0.667,0,0,0 0,0.125,0.875,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> <filter id="deuteranopia"> <feColorMatrix type="matrix" values="0.625,0.375,0,0,0 0.7,0.3,0,0,0 0,0.3,0.7,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> <filter id="deuteranomaly"> <feColorMatrix type="matrix" values="0.8,0.2,0,0,0 0.258,0.742,0,0,0 0,0.142,0.858,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> <filter id="tritanopia"> <feColorMatrix type="matrix" values="0.95,0.05,0,0,0 0,0.433,0.567,0,0 0,0.475,0.525,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> <filter id="tritanomaly"> <feColorMatrix type="matrix" values="0.967,0.033,0,0,0 0,0.733,0.267,0,0 0,0.183,0.817,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> <filter id="achromatopsia"> <feColorMatrix type="matrix" values="0.299,0.587,0.114,0,0 0.299,0.587,0.114,0,0 0.299,0.587,0.114,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> <filter id="achromatomaly"> <feColorMatrix type="matrix" values="0.618,0.320,0.062,0,0 0.163,0.775,0.062,0,0 0.163,0.320,0.516,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> </defs> </svg>';document.body.appendChild(x)}var l=["protanopia","protanomaly","deuteranopia","deuteranomaly","tritanopia","tritanomaly","achromatopsia","achromatomaly"];var p="";for(var i in l)p+=parseInt(i)+1+": "+l[i]+"; ";var c=parseInt(prompt("0: off; "+p))-1;if(isNaN(c))return;if(c>=l.length)return;if(c==-1){s.innerHTML="body{-webkit-filter:none;-moz-filter:none;-ms-filter:none;-o-filter:none;filter:none;}";return}c=l[c];if(document.getElementById(c))s.innerHTML="body{-webkit-filter:!!;-moz-filter:!!;-ms-filter:!!;-o-filter:!!;filter:!!;}".replace(/!!/g,"url(#"+c+")");else s.innerHTML="body{-webkit-filter:none;-moz-filter:none;-ms-filter:none;-o-filter:none;filter:none;}"})();
```

### Glitch All
Changes the whole screen into a glitchy mess.

```js
javascript:(function(){function c(){return"#"+Math.floor(16777215*Math.random()).toString(16)}function r(e){return Math.floor(Math.random()*e)+1}function l(e){e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}var d=document;d.head.innerHTML="<style>*{margin:0; overflow:hidden; padding:0;overflow:hidden;} div{  transform-origin: 50% 50%; width:100%; height:1px; position:relative; z-index:1;} </style>",d.body.innerHTML="";var w=window.screen.availHeight;for(d.body.addEventListener("click",function(){l(d.documentElement)}),i=0;w>=i;i++){var z=d.createElement("div");z.id="b"+i,z.style.backgroundColor=c(),d.body.appendChild(z)}setInterval(function(){for(var e=0;10>e;e++)d.getElementById("b"+r(w)).style.backgroundColor=c(),d.getElementById("b"+r(w)).style.height=r(4)+"px",d.body.style.backgroundColor=c(),d.body.style.transform=r(256)>128?"scale(3) rotate("+r(35)+"deg)":"rotate(0deg) scale(1)";window.scrollTo(0,document.body.scrollHeight)},10),setInterval(function(){window.scrollTo(0,0)},50);})()
```

### Glitch Images
Glitches images on the screen.

```js
javascript: (function() {  window.__glitch_runs = window.__glitch_runs ? window.__glitch_runs + 1 : 1;  const MODES = {    STANDARD: 'STANDARD',    TURBO: 'TURBO'  };  const OPTIONS = Object.assign(    { G_T: false, G_I: true, TURBO: false },    {} || {}  );  const GLITCH_TEXT = OPTIONS.G_T;  const GLITCH_IMAGES = OPTIONS.G_I;  const MODE = OPTIONS.TURBO ? MODES.TURBO : MODES.STANDARD;  if (MODE === MODES.TURBO) {    window.__glitch_runs = 3;  }  const transformTranspose = (header, input, gap = 1) => {    const idx =      header + Math.floor(Math.random() * (input.length - header - gap));    const tmp = input[idx];    input[idx] = input[idx + gap];    input[idx + gap] = tmp;    return input;  };  const transformSubstitute = (header, input) => {    const by = Math.floor(Math.random() * 256);    const idx = header + Math.floor(Math.random() * (input.length - header));    input[idx] = by;    return input;  };  const transformText = str => {    let bytes = new TextEncoder('utf-8').encode(str);    const errors = Math.random() * (0.05 * str.length);    for (let i = 0; i < errors; i += 1) {      bytes =        Math.random() > 0.5          ? transformSubstitute(0, bytes)          : transformTranspose(            0,            bytes,            Math.floor(Math.random() * str.length - 1) + 1          );    }    const string = new TextDecoder('utf-8').decode(bytes);    return string;  };  const glitchImage = image => {    try {      image.onload = () => {};      image.style.backgroundColor = '#262626';      const canvas = document.createElement('canvas');      const context = canvas.getContext('2d');      canvas.width = image.naturalWidth;      canvas.height = image.naturalHeight;      context.drawImage(image, 0, 0);      const data = canvas.toBlob(blob => {        const fileReader = new FileReader();        fileReader.onload = event => {          const data =            blob.size === event.target.result.byteLength              ? new Uint8Array(event.target.result)              : null;          image.onerror = () => {            image.src = URL.createObjectURL(blob);          };          const glitchOnce = () => {            const errors = Math.random() * 10 * window.__glitch_runs;            let corrupted = data.slice(0);            for (let i = 0; i < errors; i++) {              corrupted =                Math.random() > 0.5                  ? transformTranspose(100, corrupted)                  : transformSubstitute(100, corrupted);            }            const corruptBlob = new Blob([corrupted], { type: 'image/png' });            const corruptSrc = URL.createObjectURL(corruptBlob);            image.src = corruptSrc;          };          const glitchImageRaf = () => {            glitchOnce();            window.requestAnimationFrame(glitchImageRaf);          };          const glitchImageTimeout = (max = 300) => {            glitchOnce();            window.setTimeout(() => {              glitchImageTimeout(max);            }, Math.random() * max / 2 + Math.random() * max / 2);          };          if (MODE === MODES.STANDARD) {            glitchImageTimeout();          } else if (MODE === MODES.TURBO) {            glitchImageRaf();          }        };        fileReader.readAsArrayBuffer(blob);      }, 'image/jpeg');    } catch (e) {      return false;    }  };  const glitchText = n => {    const original = n.textContent;    const glitchText = () => {      n.textContent = transformText(original).replace(/�/g, '');    };    const glitchTextTimeout = (max = 1000) => {      glitchText();      window.setTimeout(() => {        glitchTextTimeout(max);      }, Math.random() * max / 2 + Math.random() * max / 2);    };    const glitchTextRaf = () => {      glitchText();      window.requestAnimationFrame(glitchTextRaf);    };    glitchTextTimeout();  };  const textNodesUnder = el => {    let n;    const a = [];    const walk = document.createTreeWalker(      el,      NodeFilter.SHOW_TEXT,      null,      false    );    while ((n = walk.nextNode())) {      a.push(n);    }    return a;  };  const setupGlitch = () => {    if (GLITCH_IMAGES) {      const images = document.querySelectorAll('img');      images.forEach(i => {        i.complete          ? glitchImage(i)          : (i.onload = event => glitchImage(event.target));      });    }    if (GLITCH_TEXT) {      const textNodes = textNodesUnder(document.body).filter(        n => n.textContent && n.textContent.length > 0 && n.textContent.trim()      );      textNodes.forEach(glitchText);    }  };  if (document.readyState === 'complete') {    setupGlitch();  } else {    document.body.addEventListener('load', setupGlitch);  }})();
```

### Glitch Text and Images
Glitches text and images. 

```js
javascript: (function() {  window.__glitch_runs = window.__glitch_runs ? window.__glitch_runs + 1 : 1;  const MODES = {    STANDARD: 'STANDARD',    TURBO: 'TURBO'  };  const OPTIONS = Object.assign(    { G_T: false, G_I: true, TURBO: false },    {G_T:true} || {}  );  const GLITCH_TEXT = OPTIONS.G_T;  const GLITCH_IMAGES = OPTIONS.G_I;  const MODE = OPTIONS.TURBO ? MODES.TURBO : MODES.STANDARD;  if (MODE === MODES.TURBO) {    window.__glitch_runs = 3;  }  const transformTranspose = (header, input, gap = 1) => {    const idx =      header + Math.floor(Math.random() * (input.length - header - gap));    const tmp = input[idx];    input[idx] = input[idx + gap];    input[idx + gap] = tmp;    return input;  };  const transformSubstitute = (header, input) => {    const by = Math.floor(Math.random() * 256);    const idx = header + Math.floor(Math.random() * (input.length - header));    input[idx] = by;    return input;  };  const transformText = str => {    let bytes = new TextEncoder('utf-8').encode(str);    const errors = Math.random() * (0.05 * str.length);    for (let i = 0; i < errors; i += 1) {      bytes =        Math.random() > 0.5          ? transformSubstitute(0, bytes)          : transformTranspose(            0,            bytes,            Math.floor(Math.random() * str.length - 1) + 1          );    }    const string = new TextDecoder('utf-8').decode(bytes);    return string;  };  const glitchImage = image => {    try {      image.onload = () => {};      image.style.backgroundColor = '#262626';      const canvas = document.createElement('canvas');      const context = canvas.getContext('2d');      canvas.width = image.naturalWidth;      canvas.height = image.naturalHeight;      context.drawImage(image, 0, 0);      const data = canvas.toBlob(blob => {        const fileReader = new FileReader();        fileReader.onload = event => {          const data =            blob.size === event.target.result.byteLength              ? new Uint8Array(event.target.result)              : null;          image.onerror = () => {            image.src = URL.createObjectURL(blob);          };          const glitchOnce = () => {            const errors = Math.random() * 10 * window.__glitch_runs;            let corrupted = data.slice(0);            for (let i = 0; i < errors; i++) {              corrupted =                Math.random() > 0.5                  ? transformTranspose(100, corrupted)                  : transformSubstitute(100, corrupted);            }            const corruptBlob = new Blob([corrupted], { type: 'image/png' });            const corruptSrc = URL.createObjectURL(corruptBlob);            image.src = corruptSrc;          };          const glitchImageRaf = () => {            glitchOnce();            window.requestAnimationFrame(glitchImageRaf);          };          const glitchImageTimeout = (max = 300) => {            glitchOnce();            window.setTimeout(() => {              glitchImageTimeout(max);            }, Math.random() * max / 2 + Math.random() * max / 2);          };          if (MODE === MODES.STANDARD) {            glitchImageTimeout();          } else if (MODE === MODES.TURBO) {            glitchImageRaf();          }        };        fileReader.readAsArrayBuffer(blob);      }, 'image/jpeg');    } catch (e) {      return false;    }  };  const glitchText = n => {    const original = n.textContent;    const glitchText = () => {      n.textContent = transformText(original).replace(/�/g, '');    };    const glitchTextTimeout = (max = 1000) => {      glitchText();      window.setTimeout(() => {        glitchTextTimeout(max);      }, Math.random() * max / 2 + Math.random() * max / 2);    };    const glitchTextRaf = () => {      glitchText();      window.requestAnimationFrame(glitchTextRaf);    };    glitchTextTimeout();  };  const textNodesUnder = el => {    let n;    const a = [];    const walk = document.createTreeWalker(      el,      NodeFilter.SHOW_TEXT,      null,      false    );    while ((n = walk.nextNode())) {      a.push(n);    }    return a;  };  const setupGlitch = () => {    if (GLITCH_IMAGES) {      const images = document.querySelectorAll('img');      images.forEach(i => {        i.complete          ? glitchImage(i)          : (i.onload = event => glitchImage(event.target));      });    }    if (GLITCH_TEXT) {      const textNodes = textNodesUnder(document.body).filter(        n => n.textContent && n.textContent.length > 0 && n.textContent.trim()      );      textNodes.forEach(glitchText);    }  };  if (document.readyState === 'complete') {    setupGlitch();  } else {    document.body.addEventListener('load', setupGlitch);  }})();
```

### Starwars Text
Makes the screen black and has text slide down in white text.

```js
javascript:(function(j,g){var e=j.body,i=e.parentNode,c=j.createElement('MARQUEE'),f=j.createElement('AUDIO'),h=j.querySelectorAll('html *'),k=h.length;c.setAttribute('direction','up');c.setAttribute('scrollAmount','2');c.style.height='100%';c.style['-webkit-transform']='rotateX(45deg)';i.style.background='#000 url(http://furf.com/exp/starwars/background.png)';i.style.height='95%';i.style['-webkit-perspective']=200;i.style['-webkit-perspective-origin-x']='50%';i.style['-webkit-perspective-origin-y']='200px';i.insertBefore(c,e);c.appendChild(e);while(k--){g=h[k].style;g.fontFamily='arial';g.fontWeight='bold';g.background='transparent';g.color='#fc0';g.border='0';}f.src='http://furf.com/exp/starwars/star-wars.m4a';i.insertBefore(f,c);f.play();}(document));
```

### Tilt
Makes the background black, tilts the screen, plays Starwars music, and auto scrolls.

```js
javascript:(function(c){var a=c.body.style;c.documentElement.style.background=a.background="black";a.color="yellow";a.height=a.width="100%";a.position="fixed";a.overflowY="scroll";a.top="-15%";a.webkitTransform=a.MozTransform=a.transform="matrix3d(1,0,0,0,0,1,0,-0.0015,0,0,1,0,0,0,0,1)";for(var a=c.body.children,b=0;b<a.length;b++)"SCRIPT"!=a[b].nodeName&&(a[b].style.overflowY="scroll",a[b].style.maxHeight="100%");var b=new Audio();b.src="https://archive.org/download/StarWarsThemeSongByJohnWilliams/Star Wars Theme Song By John Williams.mp3";var f=function(){for(var a,b=0;a=c.body.children[b];b++)"SCRIPT"!=a.nodeName&&(a.scrollTop+=2);setTimeout(f,50)};setTimeout(f,1000);b.load();b.play()})(document)
```

# The End.