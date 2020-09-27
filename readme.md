This tool allow you to pretty much use your web's browser javascript dom parsing ability from command line.

here is an example:
```bash
curl https://boards.4channel.org/w/thread/2129116 2>/dev/null | node pdom.js \
'a = document.querySelectorAll(".fileThumb");for(i in a){console.log("https:"+a[i].href)}' |\
head -n-7
```
