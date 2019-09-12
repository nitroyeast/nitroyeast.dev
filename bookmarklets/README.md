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
* The website to visit is costomizable.
* This is very buggy and may only work on some websites.
* Size of window is costomizable.
* Varitaions
    * Minecraft:
    * ```js
    * javascript:var frame = document.createElement('iframe'); frame.src="https://classic.minecraft.net"; frame.style.position="fixed"; frame.style.top="5%"; frame.style.right="0%";frame.style.height="700px";frame.style.width="750px"; frame.style.zIndex="100000"; document.body.appendChild(frame);var btn = document.createElement('button');btn.style.position="fixed";btn.style.top="5%";btn.style.right="25%";btn.zIndex="100000";btn.innerHTML="HIDE";document.body.appendChild(btn);
    * ```



