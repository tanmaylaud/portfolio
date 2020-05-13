(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,t,a){"use strict";t.a={name:"Portfolio. Designed using React",headerTagline:["Hi \ud83d\udc4b You found me!","I am Tanmay Laud.","Developer.","Designer."],contactEmail:"tanmaylaud@gmail.com",abouttext:"I am a Full-Stack Software Developer,interested in Natural Language Processing and Machine Learning applications. I also love playing with Data Visualisations",ShowAboutImage:!0,education:[{id:1,title:"Veermata Jijabai Technological Institute",degree:"B.Tech (Electronics & Telecommunications Engg.) |",grade:"CGPA 9.33",url:"https://www.vjti.ac.in/"},{id:2,title:"Kischinchand Chellaram College",degree:"H.S.C. |",grade:"90%",url:"https://www.kccollege.edu.in/"},{id:3,title:"St. Xavier's Boys' Academy",degree:"S.S.C |",grade:"94.91%",url:"https://www.sxba.in/"}],projects:[{id:1,title:"React Typewriting Effect",service:"UI Animation Library",imageSrc:"./typewriting.gif",url:"https://www.npmjs.com/package/react-typewriting-effect"},{id:2,title:"COVID19 Globe Tracker",service:"Tracking Active Cases",imageSrc:"./covid.gif",url:"https://tanmaylaud.github.io/covid19-globe-tracker/"}],social:[{name:"Github",url:"https://github.com/tanmaylaud"},{name:"LinkedIn",url:"https://www.linkedin.com/in/tanmaylaud"},{name:"Instagram",url:"https://instagram.com/tanmayl"},{name:"Twitter",url:"https://twitter.com/l_tanmay"},{name:"Medium (Blog)",url:"https://medium.com/@tanmaylaud"}]}},,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(11),l=a(0),r=a.n(l),c=a(1),o=a.n(c),i=a(2),m=a(12);a(51),a(32);t.default=function(e){for(var t=[],a=0;a<i.a.headerTagline.length;a++)t.push(i.a.headerTagline[a]);var c=Object(l.useState)(!1),s=Object(n.a)(c,2),u=s[0],d=s[1],E=Object(l.useState)(0),f=Object(n.a)(E,2),p=f[0],h=f[1],g=function(){return h(p+1),p==t.length-1&&d(!0),null};return r.a.createElement("div",null,r.a.createElement("h1",{className:"heading-background"},"Innovate"),r.a.createElement("header",null,r.a.createElement("h1",null,r.a.createElement(o.a,{bottom:!0,cascade:!0},i.a.name))),r.a.createElement(o.a,{bottom:!0},r.a.createElement("div",{className:"title-container"},r.a.createElement("p",{className:"header-title"},r.a.createElement(m.a,{string:t[0],stopBlinkinOnComplete:!0,onComplete:g,speed:60}),r.a.createElement("br",null),p>0?r.a.createElement(m.a,{string:t[1],stopBlinkinOnComplete:!0,onComplete:g,speed:60}):null,r.a.createElement("br",null),p>1?r.a.createElement(m.a,{string:t[2],onComplete:g,stopBlinkinOnComplete:!0,speed:60}):null,r.a.createElement("br",null),p>2?r.a.createElement(m.a,{string:t[3],onComplete:g,speed:60}):null,r.a.createElement("br",null),u?r.a.createElement("a",{className:"resumeButton buttonDownload",href:"https://drive.google.com/file/d/1VKTVXdpOW-fnf7n0lMUqFbeZshyCPU9p/view",rel:"noopener noreferrer",target:"_blank"},"Resume"):null))))}},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(1),c=a.n(r),o=a(2),i=a(39),m=a.n(i);t.default=function(e){return l.a.createElement("div",{className:"about"},l.a.createElement("div",{className:"about-content"},l.a.createElement("h1",null,l.a.createElement(c.a,{bottom:!0,cascade:!0},"About.")),l.a.createElement(c.a,{bottom:!0},l.a.createElement("p",null,o.a.abouttext))),o.a.ShowAboutImage?l.a.createElement("img",{src:m.a,alt:"about image"}):null)}},function(e,t,a){"use strict";a.r(t);var n=a(7),l=a(8),r=a(10),c=a(9),o=a(0),i=a.n(o),m=a(19),s=a(4),u=a.n(s),d=a(2),E=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.StrictMode,null,i.a.createElement("div",null,i.a.createElement("h1",{className:"heading"},i.a.createElement(u.a,{left:!0},"Work.")),i.a.createElement("div",{className:"work-content"},d.a.projects.map(function(e){return i.a.createElement(m.default,{key:e.id,title:e.title,service:e.service,imageSrc:e.imageSrc,url:e.url})}),i.a.createElement("h1",{style:{opacity:.5,fontStyle:"italic"}},"New projects coming soon..."))))}}]),a}(o.Component);t.default=E},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(1),c=a.n(r);t.default=function(e){return l.a.createElement(c.a,{bottom:!0},l.a.createElement("div",{className:"project"},l.a.createElement("a",{href:e.url,target:"_blank",rel:"noreferrer noopener"},l.a.createElement("img",{src:a(52)("".concat(e.imageSrc)),alt:e.title})),l.a.createElement("h1",null,e.title),l.a.createElement("span",null,e.service)))}},function(e,t,a){"use strict";a.r(t);var n=a(7),l=a(8),r=a(10),c=a(9),o=a(0),i=a.n(o),m=a(4),s=a.n(m),u=a(1),d=a.n(u),E=(a(33),a(3)),f=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.StrictMode,null,i.a.createElement("div",null,i.a.createElement("h1",{className:"heading"},i.a.createElement(s.a,{left:!0},"Blog.")),i.a.createElement("div",{className:"row"},i.a.createElement(d.a,{bottom:!0},i.a.createElement("div",{className:"column"},i.a.createElement("div",{className:"card"},i.a.createElement("a",{href:"https://medium.com/@tanmaylaud/failure-a-neccessary-evil-511bc71f91ad",target:"_blank",rel:"noreferrer noopener"}),i.a.createElement("h4",null,i.a.createElement(E.d,null)," Failure\u200a-\u200aA neccessary evil"),i.a.createElement("img",{className:"image",src:"https://miro.medium.com/fit/c/1400/420/1*BhJL0VLWkRPQwRu0MXx6oA.jpeg"}),i.a.createElement("p",null,"Based on a personal experience"),i.a.createElement("a",{href:"https://medium.com/@tanmaylaud/failure-a-neccessary-evil-511bc71f91ad",target:"_blank",rel:"noreferrer noopener"},"Read the article on medium.com")))),i.a.createElement(d.a,{bottom:!0},i.a.createElement("div",{className:"column"},i.a.createElement("div",{className:"card"},i.a.createElement("h4",null,i.a.createElement(E.d,null)," The Musical Similarity of Popular Songs -A Review Article"),i.a.createElement("img",{className:"image",src:"https://miro.medium.com/max/1400/1*fJXxPGtLtfhA2v3V9bVVVQ.png"}),i.a.createElement("p",null,"I strongly believe that there are no rules when it comes to creativity, be it music or painting or writing..."),i.a.createElement("a",{href:"https://towardsdatascience.com/the-musical-similarity-of-popular-songs-a-review-article-c47d5af52e62",target:"_blank",rel:"noreferrer noopener"},"Read the article on towardsdatascience.com")))))))}}]),a}(o.Component);t.default=f},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(4),c=a.n(r),o=a(1),i=a.n(o),m=a(2);t.default=function(e){return l.a.createElement("div",null,l.a.createElement("h1",null,l.a.createElement(c.a,{right:!0}," Contact.")),l.a.createElement(i.a,{bottom:!0},l.a.createElement("div",{className:"contact-content"},l.a.createElement("h1",null,"You can reach me on",l.a.createElement("br",null),l.a.createElement("span",{className:"amazing-color"},"following channels")),l.a.createElement("a",{href:"mailto:".concat(m.a.contactEmail),className:"email"},m.a.contactEmail),l.a.createElement("ul",null,m.a.social.map(function(e,t){return l.a.createElement("li",{key:t},l.a.createElement("a",{className:"links",target:"_blank",rel:"noopener noreferrer",href:e.url},e.name))})))),l.a.createElement("span",{className:"footer"},"Made With \u2764 by"," ",l.a.createElement("a",{href:"http://github.com/tanmaylaud",target:"_blank",rel:"noreferrer noopener"},"Tanmay Laud")))}},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(4),c=a.n(r),o=a(2),i=a(23);t.default=function(e){return l.a.createElement(l.a.StrictMode,null,l.a.createElement("div",null,l.a.createElement("h1",{className:"heading"},l.a.createElement(c.a,{right:!0},"Education.")),l.a.createElement("div",{className:"edu-content"},o.a.education.map(function(e){return l.a.createElement(i.default,{key:e.id,title:e.title,degree:e.degree,grade:e.grade,url:e.url})}))))}},function(e,t,a){"use strict";a.r(t);var n=a(7),l=a(8),r=a(10),c=a(9),o=a(0),i=a.n(o),m=a(1),s=a.n(m),u=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(s.a,{bottom:!0},i.a.createElement("div",{className:"project education"},i.a.createElement("h1",null,i.a.createElement("a",{href:this.props.url,target:"_blank",rel:"noreferrer noopener"},this.props.title)),i.a.createElement("span",null,this.props.degree),i.a.createElement("span",null,this.props.grade)))}}]),a}(o.Component);t.default=u},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(6),c=a(3),o=a(40),i=a.n(o);t.default=function(e){return l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(r.Link,{className:"link",activeClass:"active",to:"homw",spy:!0,smooth:!0,offset:-70,duration:500,onClick:function(){r.animateScroll.scrollToTop()}},l.a.createElement("img",{className:"logo",src:i.a,alt:"Home"}))),l.a.createElement("li",null,l.a.createElement(r.Link,{className:"link",activeClass:"active",to:"About",spy:!0,smooth:!0,offset:-70,duration:500},"About")),l.a.createElement("li",null,l.a.createElement(r.Link,{className:"link",activeClass:"active",to:"work",spy:!0,smooth:!0,offset:-70,duration:500},"Work")),l.a.createElement("li",null,l.a.createElement(r.Link,{className:"link",activeClass:"active",to:"edu",spy:!0,smooth:!0,duration:500},"Education")),l.a.createElement("li",null,l.a.createElement(r.Link,{className:"link",activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:-70,duration:500,isDynamic:!0},"Contact"))),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{className:"link",target:"_blank",rel:"noreferrer noopener",href:"https://github.com/tanmaylaud"},l.a.createElement(c.a,null))),l.a.createElement("li",null,l.a.createElement("a",{className:"link",target:"_blank",rel:"noreferrer noopener",href:"https://linkedin.com/in/tanmaylaud"},l.a.createElement(c.c,null))),l.a.createElement("li",null,l.a.createElement("a",{className:"link",target:"_blank",rel:"noreferrer noopener",href:"https://instagram.com/tanmayl"},l.a.createElement(c.b,null))),l.a.createElement("li",null,l.a.createElement("a",{className:"link",target:"_blank",rel:"noreferrer noopener",href:"https://twitter.com/l_tanmay"},l.a.createElement(c.e,null))),l.a.createElement("li",null,l.a.createElement("a",{className:"link",target:"_blank",rel:"noreferrer noopener",href:"https://medium.com/@tanmaylaud"},l.a.createElement(c.d,null)))))}},,,,,,,,function(e,t,a){},function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t),a.d(t,"Resume",function(){return c});var n=a(11),l=(a(38),a(0)),r=a.n(l);function c(){var e=Object(l.useState)(0),t=Object(n.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{id:"ms-container"},r.a.createElement("label",{htmlFor:"ms-download"},r.a.createElement("div",{className:"ms-content"},r.a.createElement("div",{className:"ms-content-inside",key:a},r.a.createElement("input",{onClick:function(){setTimeout(function(){c(a+1),window.open("https://drive.google.com/file/d/1VKTVXdpOW-fnf7n0lMUqFbeZshyCPU9p/view","_blank")},4e3)},type:"checkbox",id:"ms-download"}),r.a.createElement("div",{className:"ms-line-down-container"},r.a.createElement("div",{className:"ms-line-down"})),r.a.createElement("div",{className:"ms-line-point"}))),"Resume"))))}},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/suited.7aa36084.jpg"},function(e,t,a){e.exports=a.p+"static/media/logo_310x310.4479d698.png"},function(e,t,a){e.exports=a(63)},,,,,function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){var n={"./About":17,"./About.tsx":17,"./Blog":20,"./Blog.css":33,"./Blog.tsx":20,"./Contact":21,"./Contact.tsx":21,"./DownloadButton.css":32,"./Education":22,"./Education.tsx":22,"./Header":16,"./Header.tsx":16,"./Navbar":24,"./Navbar.tsx":24,"./Project":19,"./Project.tsx":19,"./Resume":37,"./Resume.css":38,"./Resume.tsx":37,"./School":23,"./School.tsx":23,"./Work":18,"./Work.tsx":18,"./covid.gif":61,"./typewriting.gif":62};function l(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}l.keys=function(){return Object.keys(n)},l.resolve=r,e.exports=l,l.id=52},,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/covid.a9ec971e.gif"},function(e,t,a){e.exports=a.p+"static/media/typewriting.bb6dbf13.gif"},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),c=a.n(r),o=(a(46),a(47),a(16)),i=a(17),m=a(18),s=a(21),u=a(24),d=a(22),E=a(20);var f=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.default,null),l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"App-header"},l.a.createElement(o.default,null)),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"About"},l.a.createElement(i.default,null)),l.a.createElement("div",{className:"work"},l.a.createElement(m.default,null)),l.a.createElement("div",{className:"blog work"},l.a.createElement(E.default,null)),l.a.createElement("div",{className:"work edu"},l.a.createElement(d.default,null)),l.a.createElement("div",{className:"contact"},l.a.createElement(s.default,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[41,1,2]]]);
//# sourceMappingURL=main.58fdcb3e.chunk.js.map