(function(){
  var root=document.documentElement,themes=["night","daylight","ember","ocean"],i=0;
  var label=document.getElementById("themeName");
  function apply(n){root.setAttribute("data-theme",n);label.textContent=n;try{localStorage.setItem("theme",n)}catch(e){}}
  try{var s=localStorage.getItem("theme");if(s&&themes.indexOf(s)>-1){i=themes.indexOf(s);apply(s)}else{label.textContent=matchMedia("(prefers-color-scheme: light)").matches?"daylight":"night"}}catch(e){}
  document.getElementById("themeBtn").onclick=function(){i=(i+1)%themes.length;apply(themes[i])};
  var d=document.getElementById("dlg"),q=document.getElementById("q");
  function open(){if(!d.open){d.showModal();q.focus()}}
  document.getElementById("searchBtn").onclick=open;
  addEventListener("keydown",function(e){if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();open()}});
  d.addEventListener("click",function(e){if(e.target===d)d.close()});
  var links=[].slice.call(document.querySelectorAll("#nav a"));
  var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){links.forEach(function(a){a.classList.toggle("on",a.getAttribute("href")==="#"+en.target.id)})}})},{rootMargin:"-40% 0px -55% 0px"});
  document.querySelectorAll("section[id]").forEach(function(s){io.observe(s)});
})();
