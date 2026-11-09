(function(){
  var root=document.documentElement,themes=["night","daylight","ember","ocean"],i=0;
  var label=document.getElementById("themeName");
  function apply(n){root.setAttribute("data-theme",n);label.textContent=n;try{localStorage.setItem("theme",n)}catch(e){}}
  try{var s=localStorage.getItem("theme");if(s&&themes.indexOf(s)>-1){i=themes.indexOf(s);apply(s)}else{label.textContent=matchMedia("(prefers-color-scheme: light)").matches?"daylight":"night"}}catch(e){}
  document.getElementById("themeBtn").onclick=function(){i=(i+1)%themes.length;apply(themes[i])};
  var d=document.getElementById("dlg"),q=document.getElementById("q");
  var results=document.getElementById("searchResults"),hint=document.getElementById("searchHint");
  function textOf(el){return(el.innerText||el.textContent||"").replace(/\s+/g," ").trim()}
  var searchIndex=[];
  document.querySelectorAll("main section[id]").forEach(function(section){
    var heading=section.querySelector("h2,h1"),sectionTitle=heading?textOf(heading):section.id;
    searchIndex.push({title:sectionTitle,href:"#"+section.id,text:textOf(section)});
    section.querySelectorAll(".case,.post").forEach(function(item){
      var link=item.matches("a[href]")?item:item.querySelector("a[href]");
      var title=item.querySelector("h3")||item.querySelector("h2")||item.querySelector("time");
      if(link&&title)searchIndex.push({title:textOf(title),href:link.getAttribute("href"),text:textOf(item)});
    });
  });
  function renderResults(){
    var terms=q.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
    results.replaceChildren();
    if(!terms.length){hint.textContent="Type to search this site";return}
    var matches=searchIndex.filter(function(item){var haystack=(item.title+" "+item.text).toLowerCase();return terms.every(function(term){return haystack.includes(term)})}).slice(0,8);
    hint.textContent=matches.length?matches.length+" result"+(matches.length===1?"":"s"):"No results found";
    matches.forEach(function(item){
      var li=document.createElement("li"),a=document.createElement("a"),title=document.createElement("strong"),preview=document.createElement("span");
      a.href=item.href;title.textContent=item.title;preview.textContent=item.text.slice(0,150);
      li.append(a);a.append(title,preview);results.append(li);
      a.addEventListener("click",function(){d.close();q.value="";renderResults()});
    });
  }
  q.addEventListener("input",renderResults);
  function open(){if(!d.open){d.showModal();q.focus()}}
  document.getElementById("searchBtn").onclick=open;
  addEventListener("keydown",function(e){if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();open()}});
  d.addEventListener("click",function(e){if(e.target===d)d.close()});
  var links=[].slice.call(document.querySelectorAll("#nav a"));
  var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){links.forEach(function(a){a.classList.toggle("on",a.getAttribute("href")==="#"+en.target.id)})}})},{rootMargin:"-40% 0px -55% 0px"});
  document.querySelectorAll("section[id]").forEach(function(s){io.observe(s)});
})();
