(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{325:(e,t,s)=>{Promise.resolve().then(s.bind(s,8611)),Promise.resolve().then(s.bind(s,8599)),Promise.resolve().then(s.bind(s,8647)),Promise.resolve().then(s.bind(s,5922)),Promise.resolve().then(s.bind(s,7875)),Promise.resolve().then(s.bind(s,8657)),Promise.resolve().then(s.bind(s,5756))},2311:(e,t,s)=>{"use strict";s.d(t,{Yo:()=>l,bK:()=>a,ly:()=>n,qG:()=>i});let i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"up",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{hidden:{opacity:0,y:"up"===e?40:"down"===e?-40:0,x:"left"===e?40:"right"===e?-40:0},visible:{opacity:1,y:0,x:0,transition:{duration:.8,ease:[.25,.1,.25,1],delay:t}}}},a={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.3}}},l={hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1,transition:{duration:.8,ease:[.25,.1,.25,1]}}},n={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.5,ease:[.25,.1,.25,1]}},exit:{opacity:0,y:20,transition:{duration:.3,ease:[.25,.1,.25,1]}}}},5437:(e,t,s)=>{"use strict";s.d(t,{Ye:()=>l,jo:()=>a});let i=()=>{let e=window.navigator.userAgent,t=/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)&&window.innerWidth<768,s=/iPad|Android|Tablet/i.test(e)||window.innerWidth>=768&&window.innerWidth<=1024,i="unknown";/Firefox/i.test(e)?i="firefox":/Chrome/i.test(e)?i="chrome":/Safari/i.test(e)?i="safari":/Edge/i.test(e)?i="edge":/MSIE|Trident/i.test(e)&&(i="ie");let a="unknown";return/Windows/i.test(e)?a="windows":/Macintosh|Mac OS X/i.test(e)?a="mac":/Linux/i.test(e)?a="linux":/Android/i.test(e)?a="android":/iPhone|iPad|iPod/i.test(e)&&(a="ios"),{isMobile:t,isTablet:s,isDesktop:!t&&!s,browser:i,os:a}},a=()=>{let{isMobile:e,isTablet:t,browser:s,os:a}=i();return"".concat(e?"is-mobile":""," ").concat(t?"is-tablet":""," browser-").concat(s," os-").concat(a).trim()},l=()=>i()},5756:(e,t,s)=>{"use strict";s.d(t,{default:()=>r});var i=s(5155),a=s(9932),l=s(6766),n=s(7166),o=s(5437);let r=()=>{let{isMobile:e}=(0,o.Ye)();return(0,i.jsx)("section",{className:"py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8",children:(0,i.jsx)("div",{className:"max-w-7xl mx-auto",children:(0,i.jsxs)(a.P.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},className:"flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12",children:[(0,i.jsxs)("div",{className:"flex flex-col xs:flex-row items-center gap-4 xs:gap-6 sm:gap-8",children:[(0,i.jsx)("div",{className:"relative w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-32 md:h-32",children:(0,i.jsx)(l.default,{src:(0,n.D)("/images/testimonial.jpg"),alt:"Steve Jacobs",fill:!0,className:"object-cover rounded-full"})}),(0,i.jsxs)("div",{className:"text-center xs:text-left",children:[(0,i.jsx)("h4",{className:"font-outfit font-medium text-2xl xs:text-3xl sm:text-4xl md:text-[38px] text-primary mb-1 sm:mb-2 md:mb-3",children:"Steve Jacobs"}),(0,i.jsx)("p",{className:"font-outfit text-lg xs:text-xl sm:text-2xl md:text-[28px] text-secondary",children:"One of Our Client"})]})]}),(0,i.jsx)("div",{className:"max-w-2xl mt-6 md:mt-0",children:(0,i.jsx)("p",{className:"font-outfit font-light text-lg xs:text-xl sm:text-2xl md:text-[28px] leading-[1.26] text-secondary text-center md:text-left",children:'"Embarking on a journey with this travel agency was an absolute game-changer! From seamless planning to unforgettable experiences, every detail was meticulously crafted."'})})]})})})}},5922:(e,t,s)=>{"use strict";s.d(t,{default:()=>r});var i=s(5155),a=s(9932),l=s(8593),n=s(5437);let o={Menu:["Home","About","Blog","Contact"],Support:["WhatsApp","Instagram","Telegram","Facebook"],FAQ:["Booking","Privacy Policy","Payments","Terms & Conditions"]},r=()=>{let{isMobile:e}=(0,n.Ye)(),t=e=>{let t=document.getElementById({home:"hero",about:"about",blog:"blog",contact:"contact"}[e.toLowerCase()]||e.toLowerCase());if(t){let e=e=>{e.preventDefault()};window.addEventListener("scroll",e,{passive:!1});let s=window.pageYOffset,i=t.getBoundingClientRect().top+window.pageYOffset-s,a=null;requestAnimationFrame(function t(l){var n;null===a&&(a=l);let o=l-a,r=(n=Math.min(o/1e3,1))<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2;window.scrollTo(0,s+i*r),o<1e3?requestAnimationFrame(t):window.removeEventListener("scroll",e)})}};return(0,i.jsx)("footer",{id:"contact",className:"bg-primary text-white py-10 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8",children:(0,i.jsx)("div",{className:"max-w-7xl mx-auto",children:(0,i.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-16",children:[Object.entries(o).map((e,s)=>{let[l,n]=e;return(0,i.jsxs)(a.P.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.2*s},children:[(0,i.jsx)("h3",{className:"font-outfit font-medium text-lg xs:text-xl sm:text-2xl md:text-[28px] mb-3 sm:mb-4 md:mb-6",children:l}),(0,i.jsx)("ul",{className:"space-y-2 sm:space-y-3 md:space-y-4",children:n.map(e=>(0,i.jsx)("li",{children:"Menu"===l?(0,i.jsx)("button",{onClick:()=>t(e),className:"font-outfit text-base xs:text-lg sm:text-xl md:text-[24px] text-[#A1A1A1] hover:text-white transition-colors text-left w-full",children:e}):(0,i.jsx)("a",{href:"#",className:"font-outfit text-base xs:text-lg sm:text-xl md:text-[24px] text-[#A1A1A1] hover:text-white transition-colors block",children:e})},e))})]},l)}),(0,i.jsxs)(a.P.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.6},className:"lg:col-span-1",children:[(0,i.jsx)("h3",{className:"font-outfit font-medium text-lg xs:text-xl sm:text-2xl md:text-[28px] mb-3 sm:mb-4 md:mb-6",children:"Newsletter"}),(0,i.jsx)("p",{className:"font-outfit text-sm xs:text-base sm:text-lg md:text-[20px] text-[#A1A1A1] mb-4 sm:mb-6 md:mb-8",children:"Stay in the loop with our vibrant newsletter! Dive into curated content, travel insights, and exclusive updates delivered straight to your inbox."}),(0,i.jsx)("form",{onSubmit:e=>e.preventDefault(),className:"relative",children:(0,i.jsxs)("div",{className:"relative flex items-center",children:[(0,i.jsx)("input",{type:"email",placeholder:"Enter your email address",className:"w-full bg-transparent border-2 border-[#464646] rounded-full py-2 xs:py-3 sm:py-3.5 md:py-4 pl-10 xs:pl-12 sm:pl-14 pr-24 xs:pr-28 sm:pr-32 md:pr-36 text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors text-xs xs:text-sm sm:text-base md:text-lg",required:!0}),(0,i.jsx)(l.A,{className:"absolute left-3 xs:left-4 sm:left-5 w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-[#A1A1A1]"}),(0,i.jsx)("button",{type:"submit",className:"absolute right-2 xs:right-2.5 sm:right-3 bg-white text-primary font-outfit font-medium text-xs xs:text-sm sm:text-base md:text-[20px] px-3 xs:px-4 sm:px-6 md:px-8 py-1 xs:py-1.5 sm:py-2 md:py-2.5 rounded-full hover:bg-[#f4f4f4] transition-colors",children:"Submit"})]})})]})]})})})}},7166:(e,t,s)=>{"use strict";s.d(t,{D:()=>i}),s(9509);let i=e=>{{let t=window.location.hostname.includes("github.io");return"".concat(t?"/shilajit-travel":"").concat(e)}}},7875:(e,t,s)=>{"use strict";s.d(t,{default:()=>p});var i=s(5155),a=s(9932),l=s(2227),n=s(4049),o=s(4170),r=s(6766),x=s(2115),m=s(2311),d=s(7166),c=s(5437);let p=()=>{let[e,t]=(0,x.useState)(""),[s,p]=(0,x.useState)(""),[u,h]=(0,x.useState)("1"),{isMobile:g}=(0,c.Ye)();return(0,i.jsxs)("div",{id:"hero",className:"relative h-screen w-full",children:[(0,i.jsx)(r.default,{src:(0,d.D)("/images/hero-bg.jpg"),alt:"Hero Background",fill:!0,className:"object-cover",priority:!0}),(0,i.jsx)("div",{className:"absolute inset-0 bg-hero-gradient"}),(0,i.jsx)(a.P.div,{variants:m.bK,initial:"hidden",animate:"visible",className:"relative h-full w-full flex flex-col justify-center items-center px-4",children:(0,i.jsxs)(a.P.div,{variants:(0,m.qG)("up"),className:"w-full flex flex-col items-center justify-center",children:[(0,i.jsx)(a.P.h1,{variants:(0,m.qG)("up",.2),className:"font-outfit font-semibold text-2xl xs:text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[120px] leading-[1.1] tracking-[0.2em] xs:tracking-[0.25em] sm:tracking-[0.29em] text-white mb-1 sm:mb-2 md:mb-4 text-center",style:{transform:"translateX(0.1em)"},children:"SHILAJIT WARRIOR"}),(0,i.jsx)(a.P.p,{variants:(0,m.qG)("up",.4),className:"font-sfpro text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-xl xl:text-[24px] tracking-[0.15em] xs:tracking-[0.2em] sm:tracking-[0.25em] text-white mb-3 sm:mb-6 md:mb-12 text-center",style:{transform:"translateX(0.075em)"},children:"START YOUR JOURNEY HERE WITH US"}),(0,i.jsx)(a.P.div,{variants:m.Yo,className:"w-full max-w-[95%] xs:max-w-[90%] sm:max-w-[80%] md:max-w-[600px] mx-auto relative",children:(0,i.jsx)("div",{className:"bg-white/6 backdrop-blur-md border border-white/11 rounded-xl xs:rounded-2xl sm:rounded-full p-2 xs:p-3 sm:p-4",children:(0,i.jsxs)("div",{className:"flex flex-col xs:flex-row items-center gap-1.5 xs:gap-2 sm:gap-3",children:[(0,i.jsxs)(a.P.div,{whileHover:{scale:1.02},whileTap:{scale:.98},className:"flex items-center w-full xs:w-auto flex-1 relative group",children:[(0,i.jsx)(l.A,{className:"w-3.5 xs:w-4 sm:w-5 text-white absolute left-2"}),(0,i.jsx)("input",{type:"date",value:e,onChange:e=>t(e.target.value),className:"w-full bg-transparent text-white pl-6 xs:pl-7 sm:pl-8 pr-2 py-1 outline-none font-sfpro text-[10px] xs:text-xs sm:text-sm md:text-base transition-all duration-300 focus:bg-white/10 rounded-full"})]}),(0,i.jsx)("div",{className:"hidden xs:block w-px h-4 sm:h-5 bg-white/30"}),(0,i.jsxs)(a.P.div,{whileHover:{scale:1.02},whileTap:{scale:.98},className:"flex items-center w-full xs:w-auto flex-1 relative group",children:[(0,i.jsx)(n.A,{className:"w-3.5 xs:w-4 sm:w-5 text-white absolute left-2 rotate-45"}),(0,i.jsx)("input",{type:"text",value:s,onChange:e=>p(e.target.value),placeholder:"Enter city",className:"w-full bg-transparent text-white pl-6 xs:pl-7 sm:pl-8 pr-2 py-1 outline-none font-sfpro text-[10px] xs:text-xs sm:text-sm md:text-base transition-all duration-300 focus:bg-white/10 rounded-full"})]}),(0,i.jsx)("div",{className:"hidden xs:block w-px h-4 sm:h-5 bg-white/30"}),(0,i.jsxs)(a.P.div,{whileHover:{scale:1.02},whileTap:{scale:.98},className:"flex items-center w-full xs:w-auto flex-1 relative group",children:[(0,i.jsx)(o.A,{className:"w-3.5 xs:w-4 sm:w-5 text-white absolute left-2"}),(0,i.jsx)("select",{value:u,onChange:e=>h(e.target.value),className:"w-full bg-transparent text-white pl-6 xs:pl-7 sm:pl-8 pr-2 py-1 outline-none font-sfpro text-[10px] xs:text-xs sm:text-sm md:text-base appearance-none transition-all duration-300 focus:bg-white/10 rounded-full",children:[1,2,3,4,5,6].map(e=>(0,i.jsxs)("option",{value:e,className:"text-black",children:[e," Person",e>1?"s":""]},e))})]}),(0,i.jsx)(a.P.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>{console.log({date:e,city:s,persons:u})},className:"w-full xs:w-auto mt-1.5 xs:mt-0 bg-[#F4F4F4] text-[#181413] font-poppins font-semibold text-[10px] xs:text-xs sm:text-sm md:text-base px-3 xs:px-4 sm:px-6 py-1 xs:py-1.5 sm:py-2 rounded-full hover:bg-[#e5e5e5] transition-colors",children:"Search"})]})})})]})})]})}},8599:(e,t,s)=>{"use strict";s.d(t,{default:()=>x});var i=s(5155),a=s(9932),l=s(6766),n=s(7166),o=s(5437);let r=[{id:1,image:"/images/blog-1.jpg",date:"Des 25, 2023",title:"Unveiling the Hottest Travel Destinations of the Year",description:"Dive into a world of wanderlust as we unveil the hottest travel destinations of the year."},{id:2,image:"/images/blog-2.jpg",date:"Nov 25, 2024",title:"Exclusive Peek into the World's Most Luxurious Getaways",description:"Indulge in opulence as we provide an exclusive peek into the world's most luxurious getaways."}],x=()=>{let{isMobile:e}=(0,o.Ye)();return(0,i.jsx)("section",{id:"blog",className:"py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-white",children:(0,i.jsxs)("div",{className:"max-w-7xl mx-auto",children:[(0,i.jsxs)("div",{className:"text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16",children:[(0,i.jsx)(a.P.h2,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"section-title mb-1 sm:mb-2 md:mb-4",children:"Our Blog"}),(0,i.jsx)(a.P.h3,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.2},className:"section-subtitle",children:"Our tour memories"})]}),(0,i.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12 lg:mb-16",children:r.map((e,t)=>(0,i.jsxs)(a.P.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.2*t},className:"group cursor-pointer",children:[(0,i.jsx)("div",{className:"relative aspect-[16/9] rounded-[15px] xs:rounded-[20px] sm:rounded-[30px] md:rounded-[50px] lg:rounded-[71px] overflow-hidden mb-3 sm:mb-4 md:mb-6 lg:mb-8",children:(0,i.jsx)(l.default,{src:(0,n.D)(e.image),alt:e.title,fill:!0,className:"object-cover transition-transform duration-500 group-hover:scale-110"})}),(0,i.jsxs)("div",{className:"bg-white/50 rounded-[15px] xs:rounded-[20px] sm:rounded-[30px] md:rounded-[50px] lg:rounded-[71px] p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8",children:[(0,i.jsx)("p",{className:"font-poppins text-sm xs:text-base sm:text-lg md:text-xl lg:text-[22px] text-secondary mb-1 sm:mb-2 md:mb-3 lg:mb-4",children:e.date}),(0,i.jsx)("h4",{className:"font-outfit font-semibold text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[40px] text-primary mb-1 sm:mb-2 md:mb-3 lg:mb-4",children:e.title}),(0,i.jsx)("p",{className:"font-outfit font-light text-xs xs:text-sm sm:text-base md:text-lg lg:text-[22px] text-secondary",children:e.description})]})]},e.id))}),(0,i.jsx)("div",{className:"text-center",children:(0,i.jsx)(a.P.button,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"button-primary",children:"View More"})})]})})}},8611:(e,t,s)=>{"use strict";s.d(t,{default:()=>o});var i=s(5155),a=s(9932),l=s(6766);let n=[{id:1,image:"/images/location-1.jpg",location:"Batanghari, East Lampung",title:"Banjarrejo's Mountain Tour",size:"large"},{id:2,image:"/images/location-2.jpg",location:"Tanggerang, Central Jakarta",title:"Dufan Beach Tour",size:"small"},{id:3,image:"/images/location-3.jpg",location:"Kudus, Central Java",title:"Safari Park Tourism",size:"small"},{id:4,image:"/images/location-4.jpg",location:"Cikarang, West Brooklyn",title:"Intan Sport Center",size:"medium"}],o=()=>(0,i.jsx)("section",{className:"py-20 px-4 md:px-8",children:(0,i.jsxs)("div",{className:"max-w-7xl mx-auto",children:[(0,i.jsxs)("div",{className:"text-center mb-16 max-w-[1000px] mx-auto",children:[(0,i.jsx)(a.P.h2,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"section-title mb-4",children:"Best Location"}),(0,i.jsx)(a.P.h3,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.2},className:"section-subtitle mb-8",children:"Tour in Asia"}),(0,i.jsx)(a.P.p,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.4},className:"font-outfit font-light text-2xl md:text-[37px] text-secondary mx-auto",children:"Extraordinary natural beauty, enjoy the rich culture and experience the friendliness of the local people"})]}),(0,i.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-8",children:n.map((e,t)=>(0,i.jsxs)(a.P.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.2*t},className:"relative rounded-[20px] md:rounded-[40px] overflow-hidden group cursor-pointer ".concat("large"===e.size?"lg:col-span-4 aspect-[3/2] md:aspect-[2/1]":"medium"===e.size?"lg:col-span-4 aspect-[3/2] md:aspect-[2/1]":"lg:col-span-2 aspect-square"),children:[(0,i.jsx)(l.default,{src:e.image,alt:e.title,fill:!0,className:"object-cover transition-transform duration-500 group-hover:scale-110"}),(0,i.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"}),(0,i.jsxs)("div",{className:"absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 text-white",children:[(0,i.jsx)("p",{className:"font-outfit font-light text-lg md:text-[28px] mb-1 md:mb-2",children:e.location}),(0,i.jsx)("h4",{className:"font-outfit font-medium text-xl md:text-[38px] leading-tight",children:e.title})]})]},e.id))})]})})},8647:(e,t,s)=>{"use strict";s.d(t,{default:()=>r});var i=s(5155),a=s(9932),l=s(6766),n=s(7166),o=s(5437);let r=()=>{let{isMobile:e}=(0,o.Ye)();return(0,i.jsxs)("section",{id:"about",className:"w-full py-10 sm:py-14 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16 max-w-[1440px] mx-auto space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32",children:[(0,i.jsxs)("div",{className:"flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-16",children:[(0,i.jsxs)(a.P.div,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{duration:.5},className:"w-full lg:w-1/2 relative aspect-[4/3]",children:[(0,i.jsx)(l.default,{src:(0,n.D)("/images/experience-1.jpg"),alt:"Eiffel Mountain Tour",fill:!0,className:"object-cover rounded-[20px] xs:rounded-[30px] sm:rounded-[40px] md:rounded-[50px]",priority:!0}),(0,i.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 rounded-[20px] xs:rounded-[30px] sm:rounded-[40px] md:rounded-[50px]"}),(0,i.jsxs)("div",{className:"absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 text-white",children:[(0,i.jsx)("p",{className:"text-base xs:text-lg sm:text-xl md:text-2xl font-light",children:"Cikarang, West Sulawesi"}),(0,i.jsx)("h3",{className:"text-xl xs:text-2xl sm:text-3xl md:text-4xl font-medium mt-1 sm:mt-2",children:"Eiffel Mountain Tour"})]})]}),(0,i.jsxs)(a.P.div,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:.5},className:"w-full lg:w-1/2 space-y-3 sm:space-y-4 md:space-y-6 mt-6 lg:mt-0",children:[(0,i.jsxs)("div",{className:"space-y-2 sm:space-y-3 md:space-y-5",children:[(0,i.jsx)("span",{className:"text-gray-500 text-xl xs:text-2xl sm:text-3xl md:text-4xl font-light",children:"Memorable"}),(0,i.jsxs)("h2",{className:"text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-black",children:["For your best",(0,i.jsx)("br",{}),"experience"]})]}),(0,i.jsx)("p",{className:"text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-500 leading-relaxed",children:"For your best experience, we curate moments that transcend expectation. Immerse yourself in a world where every detail is meticulously crafted to ensure unparalleled satisfaction."}),(0,i.jsx)("button",{className:"bg-black text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full text-sm xs:text-base sm:text-lg md:text-xl font-semibold hover:bg-black/90 transition-colors",children:"Read More"})]})]}),(0,i.jsxs)("div",{className:"flex flex-col lg:flex-row-reverse items-center gap-6 sm:gap-8 lg:gap-16",children:[(0,i.jsxs)(a.P.div,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:.5},className:"w-full lg:w-1/2 relative aspect-[4/3]",children:[(0,i.jsx)(l.default,{src:(0,n.D)("/images/experience-2.jpg"),alt:"Safari Park Tourism",fill:!0,className:"object-cover rounded-[20px] xs:rounded-[30px] sm:rounded-[40px] md:rounded-[50px]",priority:!0}),(0,i.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 rounded-[20px] xs:rounded-[30px] sm:rounded-[40px] md:rounded-[50px]"}),(0,i.jsxs)("div",{className:"absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 text-white",children:[(0,i.jsx)("p",{className:"text-base xs:text-lg sm:text-xl md:text-2xl font-light",children:"Kudus, Central Java"}),(0,i.jsx)("h3",{className:"text-xl xs:text-2xl sm:text-3xl md:text-4xl font-medium mt-1 sm:mt-2",children:"Safari Park Tourism"})]})]}),(0,i.jsxs)(a.P.div,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{duration:.5},className:"w-full lg:w-1/2 space-y-3 sm:space-y-4 md:space-y-6 mt-6 lg:mt-0",children:[(0,i.jsxs)("div",{className:"space-y-2 sm:space-y-3 md:space-y-5",children:[(0,i.jsx)("span",{className:"text-gray-500 text-xl xs:text-2xl sm:text-3xl md:text-4xl font-light",children:"Experience"}),(0,i.jsxs)("h2",{className:"text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-black",children:["Get your memorable",(0,i.jsx)("br",{}),"adventure with us"]})]}),(0,i.jsx)("p",{className:"text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-500 leading-relaxed",children:"For your best experience, we curate moments that transcend expectation. Immerse yourself in a world where every detail is meticulously crafted to ensure unparalleled satisfaction."}),(0,i.jsx)("button",{className:"bg-black text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full text-sm xs:text-base sm:text-lg md:text-xl font-semibold hover:bg-black/90 transition-colors",children:"Read More"})]})]})]})}},8657:(e,t,s)=>{"use strict";s.d(t,{default:()=>p});var i=s(5155),a=s(2115),l=s(6874),n=s.n(l),o=s(9932),r=s(760),x=s(2311),m=s(6766),d=s(7166),c=s(5437);let p=()=>{let[e,t]=(0,a.useState)(!1),[s,l]=(0,a.useState)(!1),{isMobile:p}=(0,c.Ye)();(0,a.useEffect)(()=>{let e=()=>{l(window.scrollY>10)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);let u=e=>{let s=document.getElementById(e);if(s){let e=e=>{e.preventDefault()};window.addEventListener("scroll",e,{passive:!1});let t=window.pageYOffset,i=s.getBoundingClientRect().top+window.pageYOffset-t,a=null;requestAnimationFrame(function s(l){var n;null===a&&(a=l);let o=l-a,r=(n=Math.min(o/1e3,1))<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2;window.scrollTo(0,t+i*r),o<1e3?requestAnimationFrame(s):window.removeEventListener("scroll",e)})}t(!1)};return(0,i.jsxs)(o.P.nav,{variants:(0,x.qG)("down"),initial:"hidden",animate:"visible",className:"fixed top-0 left-0 right-0 z-50 py-2 xs:py-3 sm:py-4 md:py-6 px-2 xs:px-3 sm:px-4 md:px-8 lg:px-16 transition-all duration-300 ".concat(s?"bg-black/80 backdrop-blur-md":""),children:[(0,i.jsxs)("div",{className:"max-w-[1440px] mx-auto flex justify-between items-center",children:[(0,i.jsxs)(o.P.div,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"flex items-center gap-1 sm:gap-2",children:[(0,i.jsx)("div",{className:"relative w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 md:w-10 md:h-10",children:(0,i.jsx)(m.default,{src:(0,d.D)("/images/shilajit-icon.png"),alt:"Shilajit Warrior Logo",width:40,height:40,className:"object-contain"})}),(0,i.jsx)(n(),{href:"/",className:"font-poppins font-bold text-xs xs:text-sm sm:text-base md:text-lg lg:text-[19px] tracking-[0.07em] text-white",children:"SHILAJIT WARRIOR"})]}),(0,i.jsxs)("div",{className:"hidden md:flex items-center gap-6 lg:gap-16",children:[(0,i.jsx)("div",{className:"flex items-center gap-6 lg:gap-16",children:["Home","About","Blog","Contact"].map(e=>(0,i.jsxs)(o.P.button,{whileHover:{scale:1.1},whileTap:{scale:.95},onClick:()=>u(e.toLowerCase()),className:"text-white font-poppins text-base sm:text-lg md:text-[19px] relative group",children:[e,(0,i.jsx)(o.P.span,{initial:{scaleX:0},whileHover:{scaleX:1},className:"absolute bottom-0 left-0 w-full h-[2px] bg-white origin-left"})]},e))}),(0,i.jsx)(o.P.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"text-white font-poppins font-semibold text-base sm:text-lg md:text-[19px] tracking-[0.1em]",children:"LOG IN"})]}),(0,i.jsx)(o.P.button,{whileHover:{scale:1.1},whileTap:{scale:.9},className:"md:hidden text-white p-1",onClick:()=>t(!e),children:(0,i.jsx)("svg",{className:"w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})]}),(0,i.jsx)(r.N,{children:e&&(0,i.jsx)(o.P.div,{variants:x.ly,initial:"hidden",animate:"visible",exit:"exit",className:"md:hidden fixed top-[40px] xs:top-[44px] sm:top-[52px] md:top-[72px] left-0 right-0 bg-black/90 backdrop-blur-lg py-3 xs:py-4 sm:py-6 px-3 sm:px-4",children:(0,i.jsxs)("div",{className:"flex flex-col items-center gap-3 xs:gap-4 sm:gap-6",children:[["Home","About","Blog","Contact"].map((e,t)=>(0,i.jsxs)(o.P.button,{variants:(0,x.qG)("up",.1*t),whileHover:{scale:1.1},whileTap:{scale:.95},onClick:()=>u(e.toLowerCase()),className:"text-white font-poppins text-xs xs:text-sm sm:text-base relative group",children:[e,(0,i.jsx)(o.P.span,{initial:{scaleX:0},whileHover:{scaleX:1},className:"absolute bottom-0 left-0 w-full h-[2px] bg-white origin-left"})]},e)),(0,i.jsx)(o.P.button,{variants:(0,x.qG)("up",.4),whileHover:{scale:1.05},whileTap:{scale:.95},className:"text-white font-poppins font-semibold text-xs xs:text-sm sm:text-base tracking-[0.1em]",children:"LOG IN"})]})})})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[303,441,684,358],()=>t(325)),_N_E=e.O()}]);