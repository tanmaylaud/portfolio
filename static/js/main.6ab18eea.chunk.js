(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,t,a){"use strict";t.a={name:"Portfolio. Designed using React",headerTagline:["Hi \ud83d\udc4b You found me!","I am Tanmay Laud.","Developer.","Designer."],contactEmail:"tanmaylaud@gmail.com",abouttext:"I am a Full-Stack Software Developer, currently working at Deutsche Bank. I spend my weekends volunteering as an ML Engineer for Omdena, solving society's most pressing problems. My interests include  NLP, Machine Learning, Data Analytics and 3D Visualisations, Web and Backend Development, Distrubuted Systems. I actively contribute to opensource projects on github. Checkout my journey",ShowAboutImage:!0,education:[{id:1,title:"Veermata Jijabai Technological Institute",degree:"B.Tech (Electronics & Telecommunications Engg.) |",grade:"CGPA 9.33",url:"https://www.vjti.ac.in/"},{id:2,title:"Kischinchand Chellaram College",degree:"H.S.C. |",grade:"90%",url:"https://www.kccollege.edu.in/"},{id:3,title:"St. Xavier's Boys' Academy",degree:"S.S.C |",grade:"94.91%",url:"https://www.sxba.in/"}],projects:[{id:1,title:"Stockkerr : Stock Analyser",service:"Python based webapp to analyse historical stock data",imageSrc:"./stocker.gif",url:"https://stockkerr.herokuapp.com/"},{id:2,title:"COVID19 Globe Tracker",service:"Tracking Active Cases",imageSrc:"./covid.gif",url:"https://tanmaylaud.github.io/covid19-globe-tracker/"},{id:3,title:"React Typewriting Effect",service:"UI Animation Library",imageSrc:"./typewriting.gif",url:"https://www.npmjs.com/package/react-typewriting-effect"},{id:4,title:"NLP: Patient Conversation Classifier",service:"Segregating patient queries from regular chat using NLP",imageSrc:"./patient_clf.gif",url:"https://github.com/tanmaylaud/Patient_Conversation_Classifier_FastAI"}],social:[{name:"Github",url:"https://github.com/tanmaylaud"},{name:"LinkedIn",url:"https://www.linkedin.com/in/tanmaylaud"},{name:"Instagram",url:"https://instagram.com/tanmayl"},{name:"Twitter",url:"https://twitter.com/l_tanmay"},{name:"Medium (Blog)",url:"https://medium.com/@tanmaylaud"}]}},,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(12),l=a(0),r=a.n(l),c=a(1),i=a.n(c),o=a(2),m=a(13);a(58),a(33);t.default=function(e){for(var t=[],a=0;a<o.a.headerTagline.length;a++)t.push(o.a.headerTagline[a]);var c=Object(l.useState)(!1),s=Object(n.a)(c,2),u=s[0],d=s[1],p=Object(l.useState)(0),E=Object(n.a)(p,2),f=E[0],h=E[1],g=function(){h(f+1),f==t.length-1&&d(!0)};return r.a.createElement("div",null,r.a.createElement("h1",{className:"heading-background"},"Innovate"),r.a.createElement("header",null,r.a.createElement("h1",null,r.a.createElement(i.a,{bottom:!0,cascade:!0},o.a.name))),r.a.createElement(i.a,{bottom:!0},r.a.createElement("div",{className:"title-container"},r.a.createElement("p",{className:"header-title"},r.a.createElement(m.a,{string:t[0],stopBlinkinOnComplete:!0,onComplete:g,delay:60}),r.a.createElement("br",null),f>0?r.a.createElement(m.a,{string:t[1],stopBlinkinOnComplete:!0,onComplete:g,delay:60}):null,r.a.createElement("br",null),f>1?r.a.createElement(m.a,{string:t[2],onComplete:g,stopBlinkinOnComplete:!0,delay:60}):null,r.a.createElement("br",null),f>2?r.a.createElement(m.a,{string:t[3],onComplete:g,delay:60}):null,r.a.createElement("br",null),u?r.a.createElement("a",{className:"resumeButton buttonDownload",href:"https://drive.google.com/file/d/1XUk0DLi04vVwa8XMHO3caNklzd0yLEPd/view",rel:"noopener noreferrer",target:"_blank"},"Resume"):null))))}},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(1),c=a.n(r),i=a(2),o=a(45),m=a.n(o),s=a(3);t.default=function(e){return l.a.createElement("div",{className:"about"},l.a.createElement("div",{className:"about-content"},l.a.createElement("h1",null,l.a.createElement(c.a,{bottom:!0,cascade:!0},"About.")),l.a.createElement(c.a,{bottom:!0},l.a.createElement("p",null,i.a.abouttext," ",l.a.createElement("a",{className:"link",target:"_blank",rel:"noreferrer noopener",href:"https://github.com/tanmaylaud"},"here",l.a.createElement(s.a,null))))),i.a.ShowAboutImage?l.a.createElement("img",{src:m.a,alt:"about image"}):null)}},function(e,t,a){"use strict";a.r(t);var n=a(7),l=a(8),r=a(10),c=a(9),i=a(0),o=a.n(i),m=a(19),s=a(5),u=a.n(s),d=a(2),p=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.StrictMode,null,o.a.createElement("div",null,o.a.createElement("h1",{className:"heading"},o.a.createElement(u.a,{left:!0},"Work.")),o.a.createElement("div",{className:"work-content"},d.a.projects.map(function(e){return o.a.createElement(m.default,{key:e.id,title:e.title,service:e.service,imageSrc:e.imageSrc,url:e.url})}),o.a.createElement("h1",{style:{opacity:.5,fontStyle:"italic"}},"New projects coming soon..."))))}}]),a}(i.Component);t.default=p},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(1),c=a.n(r);t.default=function(e){return l.a.createElement(c.a,{bottom:!0},l.a.createElement("div",{className:"project"},l.a.createElement("a",{href:e.url,target:"_blank",rel:"noreferrer noopener"},l.a.createElement("img",{src:a(59)("".concat(e.imageSrc)),alt:e.title})),l.a.createElement("h1",{className:"project-title"},e.title),l.a.createElement("span",{className:"project-title"},e.service)))}},function(e,t,a){"use strict";a.r(t);var n=a(7),l=a(8),r=a(10),c=a(9),i=a(0),o=a.n(i),m=a(5),s=a.n(m),u=a(1),d=a.n(u),p=(a(34),a(3)),E=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.StrictMode,null,o.a.createElement("div",null,o.a.createElement("h1",{className:"heading"},o.a.createElement(s.a,{left:!0},"Blog.")),o.a.createElement("div",{className:"row"},o.a.createElement(d.a,{bottom:!0},o.a.createElement("div",{className:"column"},o.a.createElement("div",{className:"card"},o.a.createElement("a",{href:"https://omdena.com/blog/artificial-intelligence-malaria/",target:"_blank",rel:"noreferrer noopener"},o.a.createElement("h4",null,o.a.createElement(p.d,null)," AI for Malaria Prevention"),o.a.createElement("img",{className:"image",src:"https://cdn-images-1.medium.com/max/1000/1*f8nQy1lJasV5BJ7xIB7Z-g.png"}),o.a.createElement("p",null,"Identifying Water Bodies Through Satellite Imagery"))))),o.a.createElement(d.a,{bottom:!0},o.a.createElement("div",{className:"column"},o.a.createElement("div",{className:"card"},o.a.createElement("a",{href:"https://medium.com/@tanmaylaud/failure-a-neccessary-evil-511bc71f91ad",target:"_blank",rel:"noreferrer noopener"},"Read the article on medium.com"),o.a.createElement("a",{href:"https://medium.com/@tanmaylaud/failure-a-neccessary-evil-511bc71f91ad",target:"_blank",rel:"noreferrer noopener"},o.a.createElement("h4",null,o.a.createElement(p.d,null)," Failure\u200a-\u200aA neccessary evil"),o.a.createElement("img",{className:"image",src:"https://miro.medium.com/fit/c/1400/420/1*BhJL0VLWkRPQwRu0MXx6oA.jpeg"}),o.a.createElement("p",null,"Based on a personal experience"))))),o.a.createElement(d.a,{bottom:!0},o.a.createElement("div",{className:"column"},o.a.createElement("div",{className:"card"},o.a.createElement("a",{href:"https://towardsdatascience.com/the-musical-similarity-of-popular-songs-a-review-article-c47d5af52e62",target:"_blank",rel:"noreferrer noopener"},o.a.createElement("h4",null,o.a.createElement(p.d,null)," The Musical Similarity of Popular Songs -A Review Article"),o.a.createElement("img",{className:"image",src:"https://miro.medium.com/max/1400/1*fJXxPGtLtfhA2v3V9bVVVQ.png"}),o.a.createElement("p",null,"I strongly believe that there are no rules when it comes to creativity, be it music or painting or writing..."))))),o.a.createElement(d.a,{bottom:!0},o.a.createElement("div",{className:"column"},o.a.createElement("div",{className:"card"},o.a.createElement("a",{href:"https://medium.com/@tanmaylaud/want-to-build-a-cool-looking-webapp-to-add-to-your-resume-you-can-do-it-in-60-minutes-dec019abf55f",target:"_blank",rel:"noreferrer noopener"},o.a.createElement("h4",null,o.a.createElement(p.d,null)," Build and deploy a Stock Analysis Webapp in an hour using streamlit"),o.a.createElement("img",{className:"image",src:"https://miro.medium.com/max/2000/0*-K6LjmE61kYEquOP"}),o.a.createElement("p",null,"How I built and deployed a webapp in pure python"))))))))}}]),a}(i.Component);t.default=E},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(5),c=a.n(r),i=a(1),o=a.n(i),m=a(2);t.default=function(e){return l.a.createElement("div",null,l.a.createElement("h1",null,l.a.createElement(c.a,{right:!0}," Contact.")),l.a.createElement(o.a,{bottom:!0},l.a.createElement("div",{className:"contact-content"},l.a.createElement("h1",null,"You can reach me on",l.a.createElement("br",null),l.a.createElement("span",{className:"amazing-color"},"following channels")),l.a.createElement("a",{href:"mailto:".concat(m.a.contactEmail),className:"email"},m.a.contactEmail),l.a.createElement("ul",null,m.a.social.map(function(e,t){return l.a.createElement("li",{key:t},l.a.createElement("a",{className:"links",target:"_blank",rel:"noopener noreferrer",href:e.url},e.name))})))),l.a.createElement("span",{className:"footer"},"Made With \u2764 by"," ",l.a.createElement("a",{href:"http://github.com/tanmaylaud",target:"_blank",rel:"noreferrer noopener"},"Tanmay Laud")))}},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(5),c=a.n(r),i=a(2),o=a(23);t.default=function(e){return l.a.createElement(l.a.StrictMode,null,l.a.createElement("div",null,l.a.createElement("h1",{className:"heading"},l.a.createElement(c.a,{left:!0},"Education.")),l.a.createElement("div",{className:"edu-content"},i.a.education.map(function(e){return l.a.createElement(o.default,{key:e.id,title:e.title,degree:e.degree,grade:e.grade,url:e.url})}))))}},function(e,t,a){"use strict";a.r(t);var n=a(7),l=a(8),r=a(10),c=a(9),i=a(0),o=a.n(i),m=a(1),s=a.n(m),u=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement(s.a,{bottom:!0},o.a.createElement("div",{className:"project education"},o.a.createElement("h1",null,o.a.createElement("a",{href:this.props.url,target:"_blank",rel:"noreferrer noopener"},this.props.title)),o.a.createElement("span",null,this.props.degree),o.a.createElement("span",null,this.props.grade)))}}]),a}(i.Component);t.default=u},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(6),c=a(3),i=a(46),o=a.n(i);t.default=function(e){return l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(r.Link,{className:"link",activeClass:"active",to:"homw",spy:!0,smooth:!0,offset:-70,duration:500,onClick:function(){r.animateScroll.scrollToTop()}},l.a.createElement("img",{className:"logo",src:o.a,alt:"Home"}))),l.a.createElement("li",null,l.a.createElement(r.Link,{className:"link",activeClass:"active",to:"About",spy:!0,smooth:!0,offset:-70,duration:500},"About")),l.a.createElement("li",null,l.a.createElement(r.Link,{className:"link",activeClass:"active",to:"work",spy:!0,smooth:!0,offset:-70,duration:500},"Work")),l.a.createElement("li",null,l.a.createElement(r.Link,{className:"link",activeClass:"active",to:"edu",spy:!0,smooth:!0,duration:500},"Education")),l.a.createElement("li",null,l.a.createElement(r.Link,{className:"link",activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:-70,duration:500,isDynamic:!0},"Contact"))),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{className:"link",target:"_blank",rel:"noreferrer noopener",href:"https://github.com/tanmaylaud"},l.a.createElement(c.a,null))),l.a.createElement("li",null,l.a.createElement("a",{className:"link",target:"_blank",rel:"noreferrer noopener",href:"https://linkedin.com/in/tanmaylaud"},l.a.createElement(c.c,null))),l.a.createElement("li",null,l.a.createElement("a",{className:"link",target:"_blank",rel:"noreferrer noopener",href:"https://instagram.com/tanmayl"},l.a.createElement(c.b,null))),l.a.createElement("li",null,l.a.createElement("a",{className:"link",target:"_blank",rel:"noreferrer noopener",href:"https://twitter.com/l_tanmay"},l.a.createElement(c.e,null))),l.a.createElement("li",null,l.a.createElement("a",{className:"link",target:"_blank",rel:"noreferrer noopener",href:"https://medium.com/@tanmaylaud"},l.a.createElement(c.d,null)))))}},function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return o});var n=a(0),l=a.n(n),r=(a(68),a(47)),c=a(1),i=a.n(c);function o(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,l.a.createElement(i.a,{bottom:!0,cascade:!0},"Recent News.")),l.a.createElement(r.Carousel,{autoPlay:!0,dynamicHeight:!0,infiniteLoop:!0,swipeable:!0,interval:6e3},l.a.createElement("div",null,l.a.createElement("iframe",{src:"https://www.youtube.com/embed/C7RDrWSAiKM?start=753",height:"500",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),l.a.createElement("p",null,"AI for Startups: Building Sophisticated AI Models in 8 Weeks")),l.a.createElement("div",null,l.a.createElement("iframe",{src:"https://www.linkedin.com/embed/feed/update/urn:li:share:6723115270413574144",height:"500",frameBorder:"0",allowFullScreen:!0,title:"Embedded post"})),l.a.createElement("div",null,l.a.createElement("iframe",{src:"https://www.linkedin.com/embed/feed/update/urn:li:share:6696456019159134208",height:"500",frameBorder:"0",allowFullScreen:!0,title:"Embedded post"})),l.a.createElement("div",null,l.a.createElement("iframe",{src:"https://www.linkedin.com/embed/feed/update/urn:li:share:6723952896074883072",height:"500",frameBorder:"0",allowFullScreen:!0,title:"Embedded post"})),l.a.createElement("div",null,l.a.createElement("iframe",{src:"https://www.linkedin.com/embed/feed/update/urn:li:share:6719608364415926272",height:"500",frameBorder:"0",allowFullScreen:!0,title:"Embedded post"}))))}},,,,,,,,function(e,t,a){},function(e,t,a){},,,,,,,,,function(e,t,a){"use strict";a.r(t),a.d(t,"Resume",function(){return c});var n=a(12),l=(a(44),a(0)),r=a.n(l);function c(){var e=Object(l.useState)(0),t=Object(n.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{id:"ms-container"},r.a.createElement("label",{htmlFor:"ms-download"},r.a.createElement("div",{className:"ms-content"},r.a.createElement("div",{className:"ms-content-inside",key:a},r.a.createElement("input",{onClick:function(){setTimeout(function(){c(a+1),window.open("https://drive.google.com/file/d/1VKTVXdpOW-fnf7n0lMUqFbeZshyCPU9p/view","_blank")},4e3)},type:"checkbox",id:"ms-download"}),r.a.createElement("div",{className:"ms-line-down-container"},r.a.createElement("div",{className:"ms-line-down"})),r.a.createElement("div",{className:"ms-line-point"}))),"Resume"))))}},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/Tanmay_Laud_smaller.8d684f73.jpg"},function(e,t,a){e.exports=a.p+"static/media/logo_310x310.4479d698.png"},,function(e,t,a){e.exports=a(78)},,,,,function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){var n={"./About":17,"./About.tsx":17,"./Blog":20,"./Blog.css":34,"./Blog.tsx":20,"./Contact":21,"./Contact.tsx":21,"./DownloadButton.css":33,"./Education":22,"./Education.tsx":22,"./Header":16,"./Header.tsx":16,"./Navbar":24,"./Navbar.tsx":24,"./News":25,"./News.tsx":25,"./Project":19,"./Project.tsx":19,"./Resume":43,"./Resume.css":44,"./Resume.tsx":43,"./School":23,"./School.tsx":23,"./Work":18,"./Work.tsx":18,"./covid.gif":74,"./patient_clf.gif":75,"./stocker.gif":76,"./typewriting.gif":77};function l(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}l.keys=function(){return Object.keys(n)},l.resolve=r,e.exports=l,l.id=59},,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/covid.0ca352f9.gif"},function(e,t,a){e.exports=a.p+"static/media/patient_clf.1e40033d.gif"},function(e,t,a){e.exports=a.p+"static/media/stocker.e32a8a21.gif"},function(e,t,a){e.exports=a.p+"static/media/typewriting.bb6dbf13.gif"},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(11),c=a.n(r),i=(a(53),a(54),a(16)),o=a(17),m=a(18),s=a(21),u=a(24),d=a(22),p=a(20),E=a(25);var f=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.default,null),l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"App-header"},l.a.createElement(i.default,null)),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"news"},l.a.createElement(E.default,null)),l.a.createElement("div",{className:"About"},l.a.createElement(o.default,null)),l.a.createElement("div",{className:"work"},l.a.createElement(m.default,null)),l.a.createElement("div",{className:"blog work"},l.a.createElement(p.default,null)),l.a.createElement("div",{className:"work edu"},l.a.createElement(d.default,null)),l.a.createElement("div",{className:"contact"},l.a.createElement(s.default,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[48,1,2]]]);
//# sourceMappingURL=main.6ab18eea.chunk.js.map