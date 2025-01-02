"use strict";(self.webpackChunklessons_with_larisa=self.webpackChunklessons_with_larisa||[]).push([[678],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,s=/^[\p{Lu}](?![\p{Lu}])/gu,i=/([\p{Alpha}\p{N}_]|$)/u,n=/[_.\- ]+/,r=new RegExp("^"+n.source),c=new RegExp(n.source+i.source,"gu"),l=new RegExp("\\d+"+i.source,"gu"),o=(e,i)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(i={pascalCase:!1,preserveConsecutiveUppercase:!1,...i},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const n=!1===i.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(i.locale),o=!1===i.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(i.locale);if(1===e.length)return i.pascalCase?o(e):n(e);return e!==n(e)&&(e=((e,s,i)=>{let n=!1,r=!1,c=!1;for(let l=0;l<e.length;l++){const o=e[l];n&&t.test(o)?(e=e.slice(0,l)+"-"+e.slice(l),n=!1,c=r,r=!0,l++):r&&c&&a.test(o)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),c=r,r=!1,n=!0):(n=s(o)===o&&i(o)!==o,c=r,r=i(o)===o&&s(o)!==o)}return e})(e,n,o)),e=e.replace(r,""),e=i.preserveConsecutiveUppercase?((e,t)=>(s.lastIndex=0,e.replace(s,(e=>t(e)))))(e,n):n(e),i.pascalCase&&(e=o(e.charAt(0))+e.slice(1)),((e,t)=>(c.lastIndex=0,l.lastIndex=0,e.replace(c,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,o)};e.exports=o,e.exports.default=o},8032:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return _},P:function(){return E},S:function(){return W},_:function(){return c},a:function(){return r},b:function(){return d},g:function(){return m},h:function(){return l}});var s=a(7294),i=(a(3204),a(5697)),n=a.n(i);function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},r.apply(this,arguments)}function c(e,t){if(null==e)return{};var a,s,i={},n=Object.keys(e);for(s=0;s<n.length;s++)t.indexOf(a=n[s])>=0||(i[a]=e[a]);return i}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function o(e,t,a){const s={};let i="gatsby-image-wrapper";return"fixed"===a?(s.width=e,s.height=t):"constrained"===a&&(i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:s}}function d(e,t,a,s,i){return void 0===i&&(i={}),r({},a,{loading:s,shouldLoad:e,"data-main-image":"",style:r({},i,{opacity:t?1:0})})}function m(e,t,a,s,i,n,c,l){const o={};n&&(o.backgroundColor=n,"fixed"===a?(o.width=s,o.height=i,o.backgroundColor=n,o.position="relative"):("constrained"===a||"fullWidth"===a)&&(o.position="absolute",o.top=0,o.left=0,o.bottom=0,o.right=0)),c&&(o.objectFit=c),l&&(o.objectPosition=l);const d=r({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:r({opacity:t?0:1,transition:"opacity 500ms linear"},o)});return d}const u=["children"],p=function(e){let{layout:t,width:a,height:i}=e;return"fullWidth"===t?s.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/a*100+"%"}}):"constrained"===t?s.createElement("div",{style:{maxWidth:a,display:"block"}},s.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+i+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=c(e,u);return s.createElement(s.Fragment,null,s.createElement(p,r({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],b=["fallback","sources","shouldLoad"],h=function(e){let{src:t,srcSet:a,loading:i,alt:n="",shouldLoad:l}=e,o=c(e,f);return s.createElement("img",r({},o,{decoding:"async",loading:i,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:n}))},w=function(e){let{fallback:t,sources:a=[],shouldLoad:i=!0}=e,n=c(e,b);const l=n.sizes||(null==t?void 0:t.sizes),o=s.createElement(h,r({},n,t,{sizes:l,shouldLoad:i}));return a.length?s.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:n}=e;return s.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:i?a:void 0,"data-srcset":i?void 0:a,sizes:l})})),o):o};var v;h.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},w.displayName="Picture",w.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};const y=["fallback"],E=function(e){let{fallback:t}=e,a=c(e,y);return t?s.createElement(w,r({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):s.createElement("div",r({},a))};E.displayName="Placeholder",E.propTypes={fallback:i.string,sources:null==(v=w.propTypes)?void 0:v.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const _=function(e){return s.createElement(s.Fragment,null,s.createElement(w,r({},e)),s.createElement("noscript",null,s.createElement(w,r({},e,{shouldLoad:!0}))))};_.displayName="MainImage",_.propTypes=w.propTypes;const N=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],k=["style","className"],x=e=>e.replace(/\n/g,""),S=function(e,t,a){for(var s=arguments.length,i=new Array(s>3?s-3:0),r=3;r<s;r++)i[r-3]=arguments[r];return e.alt||""===e.alt?n().string.apply(n(),[e,t,a].concat(i)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},L={image:n().object.isRequired,alt:S},j=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],C=["style","className"],z=new Set;let T,A;const I=function(e){let{as:t="div",image:i,style:n,backgroundColor:d,className:m,class:u,onStartLoad:p,onLoad:g,onError:f}=e,b=c(e,j);const{width:h,height:w,layout:v}=i,y=o(h,w,v),{style:E,className:_}=y,N=c(y,C),k=(0,s.useRef)(),x=(0,s.useMemo)((()=>JSON.stringify(i.images)),[i.images]);u&&(m=u);const S=function(e,t,a){let s="";return"fullWidth"===e&&(s='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(s='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),s}(v,h,w);return(0,s.useEffect)((()=>{T||(T=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return A=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void z.add(x);if(A&&z.has(x))return;let t,s;return T.then((e=>{let{renderImageToString:a,swapPlaceholderImage:c}=e;k.current&&(k.current.innerHTML=a(r({isLoading:!0,isLoaded:z.has(x),image:i},b)),z.has(x)||(t=requestAnimationFrame((()=>{k.current&&(s=c(k.current,x,z,n,p,g,f))}))))})),()=>{t&&cancelAnimationFrame(t),s&&s()}}),[i]),(0,s.useLayoutEffect)((()=>{z.has(x)&&A&&(k.current.innerHTML=A(r({isLoading:z.has(x),isLoaded:z.has(x),image:i},b)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[i]),(0,s.createElement)(t,r({},N,{style:r({},E,n,{backgroundColor:d}),className:_+(m?" "+m:""),ref:k,dangerouslySetInnerHTML:{__html:S},suppressHydrationWarning:!0}))},M=(0,s.memo)((function(e){return e.image?(0,s.createElement)(I,e):null}));M.propTypes=L,M.displayName="GatsbyImage";const O=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function P(e){return function(t){let{src:a,__imageData:i,__error:n}=t,l=c(t,O);return n&&console.warn(n),i?s.createElement(e,r({image:i},l)):(console.warn("Image not loaded",a),null)}}const R=P((function(e){let{as:t="div",className:a,class:i,style:n,image:l,loading:u="lazy",imgClassName:p,imgStyle:f,backgroundColor:b,objectFit:h,objectPosition:w}=e,v=c(e,N);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;i&&(a=i),f=r({objectFit:h,objectPosition:w,backgroundColor:b},f);const{width:y,height:S,layout:L,images:j,placeholder:C,backgroundColor:z}=l,T=o(y,S,L),{style:A,className:I}=T,M=c(T,k),O={fallback:void 0,sources:[]};return j.fallback&&(O.fallback=r({},j.fallback,{srcSet:j.fallback.srcSet?x(j.fallback.srcSet):void 0})),j.sources&&(O.sources=j.sources.map((e=>r({},e,{srcSet:x(e.srcSet)})))),s.createElement(t,r({},M,{style:r({},A,n,{backgroundColor:b}),className:I+(a?" "+a:"")}),s.createElement(g,{layout:L,width:y,height:S},s.createElement(E,r({},m(C,!1,L,y,S,z,h,w))),s.createElement(_,r({"data-gatsby-image-ssr":"",className:p},v,d("eager"===u,!1,O,u,f)))))})),q=function(e,t){for(var a=arguments.length,s=new Array(a>2?a-2:0),i=2;i<a;i++)s[i-2]=arguments[i];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?n().number.apply(n(),[e,t].concat(s)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},D=new Set(["fixed","fullWidth","constrained"]),F={src:n().string.isRequired,alt:S,width:q,height:q,sizes:n().string,layout:e=>{if(void 0!==e.layout&&!D.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};R.displayName="StaticImage",R.propTypes=F;const W=P(M);W.displayName="StaticImage",W.propTypes=F},2879:function(e,t,a){a.r(t),a.d(t,{Head:function(){return w},default:function(){return h}});var s=a(7294),i=a(8032);var n=()=>s.createElement("div",{className:"about",id:"about"},s.createElement("div",{className:"about_image"},s.createElement(i.S,{src:"../images/headshot.jpg",alt:"Larisa Bainton headshot",__imageData:a(3133)})),s.createElement("div",{className:"about_text"},s.createElement("div",{className:"about_text_title"},"About Me"),s.createElement("div",{className:"about_text_paragraph"},"Larisa is a soprano and voice teacher who has been working in the Boston area since 2016. In 2020 she completed a Masters Degree in Vocal Pedagogy at the New England Conservatory (NEC). She has worked as an instructor at the Eclectic School of Music (Atlanta, GA), as a teaching assistant at NEC, and at the Amy Dancz Studio (Boston, MA). Her in-person private studio is located in Malden, MA.")));var r=()=>s.createElement("div",{className:"cover"},s.createElement("div",{className:"cover_background"},s.createElement(i.S,{className:"cover_image",src:"../images/cover.jpg",alt:"Room with instruments",__imageData:a(5922)})),s.createElement("div",{className:"cover_title"},s.createElement("div",null,"Voice,"),s.createElement("div",null,"Piano,"),s.createElement("div",null,"& Guitar Lessons"))),c=a(1883);var l=()=>s.createElement("div",{className:"header"},s.createElement("div",{className:"header-logo"},s.createElement(i.S,{className:"header-title",src:"../images/title.png",alt:"Lessons with Larisa",__imageData:a(4079)})),s.createElement("div",{className:"header_link-wrapper"},s.createElement(c.Link,{to:"/#home",className:"header_link"},"Home"),s.createElement(c.Link,{to:"/#about",className:"header_link"},"About Me"),s.createElement(c.Link,{to:"/#contact",className:"header_link"},"Contact")));const o=()=>s.createElement("li",{className:"instruments_list-item",key:"guitar description"},s.createElement("div",{className:"instruments_list-item_image"},s.createElement(i.S,{src:"../images/guitar.jpg",alt:"5 string instruments on the wall",__imageData:a(4491)})),s.createElement("div",{className:"instruments_list-item_text"},s.createElement("div",{className:"instruments_list-item_title"},"Guitar"),s.createElement("div",{className:"instruments_list-item_description"},"Guitar lessons will primarily focus on learning chords, finger-picking, and songwriting. Learn how to accompany yourself on the guitar while singing, figure out the chords from your favorite songs, and more!"))),d=()=>s.createElement("li",{className:"instruments_list-item",key:"piano description"},s.createElement("div",{className:"instruments_list-item_image"},s.createElement(i.S,{src:"../images/piano.jpg",alt:"Piano close up",__imageData:a(8402)})),s.createElement("div",{className:"instruments_list-item_text"},s.createElement("div",{className:"instruments_list-item_title"},"Piano"),s.createElement("div",{className:"instruments_list-item_description"},"Piano lessons begin with the student's goals: whether you want to play along to your favorite pop songs, learn Beethoven sonatas, or write your own songs. All students can expect to improve (or learn) reading music, develop a technique to play without injury, and learn musicianship skills."))),m=()=>s.createElement("li",{className:"instruments_list-item",key:"voice description"},s.createElement("div",{className:"instruments_list-item_image"},s.createElement(i.S,{src:"../images/voice.jpg",alt:"Bust statue of Mozart",__imageData:a(4842)})),s.createElement("div",{className:"instruments_list-item_text"},s.createElement("div",{className:"instruments_list-item_title"},"Voice"),s.createElement("div",{className:"instruments_list-item_description"},"In voice lessons you can expect to learn the fundamentals of singing technique: vowels, breath, and phonation! For younger students we will also learn to read music and practice sight singing. But mostly, lessons will be spent working on repertoire. Learn how to sing the songs you love!")));var u=()=>s.createElement("div",{className:"instruments"},s.createElement("ul",{className:"instruments_list"},s.createElement(m,null),s.createElement(d,null),s.createElement(o,null)));var p=()=>s.createElement("div",{className:"age-disclaimer"},s.createElement("div",{className:"age-disclaimer_title"},"Learn At Any Age"),s.createElement("div",{className:"age-disclaimer_text"},"Lessons are customized to suit students of all ages! For younger beginners we'll focus on learning the fundamentals of reading music and music theory, while adult students have the option to focus more on repertoire."));var g=()=>s.createElement("div",{className:"rates"},s.createElement("div",{className:"rates_title"},"Rates"),s.createElement("ul",{className:"rates_list"},s.createElement("li",{className:"rates_list-item",key:"30 minute rate"},s.createElement("div",{className:"rates_list-item_title"},"30 Minute Lesson"),s.createElement("div",{className:"rates_list-item_price"},"$",47)),s.createElement("li",{className:"rates_list-item",key:"45 minute rate"},s.createElement("div",{className:"rates_list-item_title"},"45 Minute Lesson"),s.createElement("div",{className:"rates_list-item_price"},"$",70.5)),s.createElement("li",{className:"rates_list-item",key:"60 minute rate"},s.createElement("div",{className:"rates_list-item_title"},"60 Minute Lesson"),s.createElement("div",{className:"rates_list-item_price"},"$",94))));var f=()=>s.createElement("div",{className:"contact",id:"contact"},s.createElement("div",{className:"contact_title"},"Contact Me"),s.createElement("div",{className:"contact_form"},s.createElement("form",{method:"post",action:"https://formspree.io/f/mwkgezkp"},s.createElement("input",{type:"text","aria-label":"name",name:"name",id:"name",placeholder:"Name"}),s.createElement("input",{type:"email","aria-label":"email",name:"email",id:"email",placeholder:"Email"}),s.createElement("input",{type:"text","aria-label":"subject",name:"subject",id:"subject",placeholder:"Subject"}),s.createElement("textarea",{"aria-label":"message",name:"message",id:"message",rows:"5",placeholder:"Type your message here..."}),s.createElement("button",{type:"submit"},"Submit"))));var b=()=>{const e=(0,c.useStaticQuery)("2702842798").site.siteMetadata;return s.createElement(s.Fragment,null,s.createElement("title",null,e.title),s.createElement("meta",{name:"description",content:e.description}),s.createElement("meta",{name:"keywords",content:e.keywords}),s.createElement("meta",{name:"url",content:e.url}))};var h=()=>s.createElement("div",null,s.createElement("header",null,s.createElement(l,null)),s.createElement("main",null,s.createElement(r,null),s.createElement(u,null),s.createElement(p,null),s.createElement(n,null),s.createElement(g,null),s.createElement(f,null)),s.createElement("footer",null,"© ",(new Date).getFullYear()," Larisa Bainton"));const w=()=>s.createElement(b,null)},8402:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#280808","images":{"fallback":{"src":"/static/5e94896aa7e6535423bcf5ea675bba7e/68a6f/piano.jpg","srcSet":"/static/5e94896aa7e6535423bcf5ea675bba7e/dfcd4/piano.jpg 1008w,\\n/static/5e94896aa7e6535423bcf5ea675bba7e/b97c6/piano.jpg 2016w,\\n/static/5e94896aa7e6535423bcf5ea675bba7e/68a6f/piano.jpg 4032w","sizes":"(min-width: 4032px) 4032px, 100vw"},"sources":[{"srcSet":"/static/5e94896aa7e6535423bcf5ea675bba7e/80cfb/piano.webp 1008w,\\n/static/5e94896aa7e6535423bcf5ea675bba7e/66d80/piano.webp 2016w,\\n/static/5e94896aa7e6535423bcf5ea675bba7e/5cc0d/piano.webp 4032w","type":"image/webp","sizes":"(min-width: 4032px) 4032px, 100vw"}]},"width":4032,"height":3024}')},5922:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#d8b898","images":{"fallback":{"src":"/static/4cf98a4fd976d6497ec92a0752d1236c/68a6f/cover.jpg","srcSet":"/static/4cf98a4fd976d6497ec92a0752d1236c/dfcd4/cover.jpg 1008w,\\n/static/4cf98a4fd976d6497ec92a0752d1236c/b97c6/cover.jpg 2016w,\\n/static/4cf98a4fd976d6497ec92a0752d1236c/68a6f/cover.jpg 4032w","sizes":"(min-width: 4032px) 4032px, 100vw"},"sources":[{"srcSet":"/static/4cf98a4fd976d6497ec92a0752d1236c/80cfb/cover.webp 1008w,\\n/static/4cf98a4fd976d6497ec92a0752d1236c/66d80/cover.webp 2016w,\\n/static/4cf98a4fd976d6497ec92a0752d1236c/5cc0d/cover.webp 4032w","type":"image/webp","sizes":"(min-width: 4032px) 4032px, 100vw"}]},"width":4032,"height":3024}')},4079:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/5b8cf3bbf40c75e595d5ab4a1d70f006/75564/title.png","srcSet":"/static/5b8cf3bbf40c75e595d5ab4a1d70f006/d0d88/title.png 384w,\\n/static/5b8cf3bbf40c75e595d5ab4a1d70f006/2a46d/title.png 768w,\\n/static/5b8cf3bbf40c75e595d5ab4a1d70f006/75564/title.png 1536w","sizes":"(min-width: 1536px) 1536px, 100vw"},"sources":[{"srcSet":"/static/5b8cf3bbf40c75e595d5ab4a1d70f006/5cee1/title.webp 384w,\\n/static/5b8cf3bbf40c75e595d5ab4a1d70f006/4a594/title.webp 768w,\\n/static/5b8cf3bbf40c75e595d5ab4a1d70f006/0a8e5/title.webp 1536w","type":"image/webp","sizes":"(min-width: 1536px) 1536px, 100vw"}]},"width":1536,"height":200}')},4842:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#982808","images":{"fallback":{"src":"/static/6c4ea36c048eb95ff9720dcb813dfecb/68a6f/voice.jpg","srcSet":"/static/6c4ea36c048eb95ff9720dcb813dfecb/dfcd4/voice.jpg 1008w,\\n/static/6c4ea36c048eb95ff9720dcb813dfecb/b97c6/voice.jpg 2016w,\\n/static/6c4ea36c048eb95ff9720dcb813dfecb/68a6f/voice.jpg 4032w","sizes":"(min-width: 4032px) 4032px, 100vw"},"sources":[{"srcSet":"/static/6c4ea36c048eb95ff9720dcb813dfecb/80cfb/voice.webp 1008w,\\n/static/6c4ea36c048eb95ff9720dcb813dfecb/66d80/voice.webp 2016w,\\n/static/6c4ea36c048eb95ff9720dcb813dfecb/5cc0d/voice.webp 4032w","type":"image/webp","sizes":"(min-width: 4032px) 4032px, 100vw"}]},"width":4032,"height":3024}')},4491:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8d8b8","images":{"fallback":{"src":"/static/bf0d1e54022b2aab14657da50f7972a2/68a6f/guitar.jpg","srcSet":"/static/bf0d1e54022b2aab14657da50f7972a2/dfcd4/guitar.jpg 1008w,\\n/static/bf0d1e54022b2aab14657da50f7972a2/b97c6/guitar.jpg 2016w,\\n/static/bf0d1e54022b2aab14657da50f7972a2/68a6f/guitar.jpg 4032w","sizes":"(min-width: 4032px) 4032px, 100vw"},"sources":[{"srcSet":"/static/bf0d1e54022b2aab14657da50f7972a2/80cfb/guitar.webp 1008w,\\n/static/bf0d1e54022b2aab14657da50f7972a2/66d80/guitar.webp 2016w,\\n/static/bf0d1e54022b2aab14657da50f7972a2/5cc0d/guitar.webp 4032w","type":"image/webp","sizes":"(min-width: 4032px) 4032px, 100vw"}]},"width":4032,"height":3024}')},3133:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/112186362de31f162ca33c680298561d/fbdb5/headshot.jpg","srcSet":"/static/112186362de31f162ca33c680298561d/461ad/headshot.jpg 1354w,\\n/static/112186362de31f162ca33c680298561d/14737/headshot.jpg 2708w,\\n/static/112186362de31f162ca33c680298561d/fbdb5/headshot.jpg 5415w","sizes":"(min-width: 5415px) 5415px, 100vw"},"sources":[{"srcSet":"/static/112186362de31f162ca33c680298561d/1273c/headshot.webp 1354w,\\n/static/112186362de31f162ca33c680298561d/9384f/headshot.webp 2708w,\\n/static/112186362de31f162ca33c680298561d/4f303/headshot.webp 5415w","type":"image/webp","sizes":"(min-width: 5415px) 5415px, 100vw"}]},"width":5415,"height":3610}')}}]);
//# sourceMappingURL=component---src-pages-index-js-cc6f0fb7f00faff846d0.js.map