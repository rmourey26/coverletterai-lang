(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(4369)}])},6525:function(e,t,s){"use strict";s.r(t);var n=s(5893),a=s(7294),i=s(1502),o=s.n(i);let r=()=>{let[e,t]=(0,a.useState)(""),[s,i]=(0,a.useState)([]),[r,l]=(0,a.useState)(!1),[c,d]=(0,a.useState)([{role:"assistant",content:"Hi, there! Simply type the job title, job description, and a few details about your experience and I'll respond with your cover letter!"}]),_=async()=>{l(!0);let e=[...c,{role:"user",content:"Business analyst experienced in Jira and NoSQL databases."}];d(e);let t=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:e})}),s=await t.json();d(e=>[...e,{role:"assistant",content:s.result.content}]);let n=c.map(e=>e.content.trim());i(n),console.log([n]),l(!1)},m=()=>{let e=s.join("\n"),t=new Blob([e],{type:"text/plain;charset=utf-8"}),n=document.createElement("a");n.href=URL.createObjectURL(t),n.download="api-response-data.txt",n.click(),document.body.appendChild(n),n.click(),setTimeout(()=>{document.body.removeChild(n),URL.revokeObjectURL(n.href)},100)};return(0,n.jsxs)("div",{className:o().btn,children:[(0,n.jsx)("button",{onClick:_,disabled:r,children:r?"Loading...":"Get API Response Data"}),s.length>0&&(0,n.jsxs)("div",{children:[(0,n.jsx)("button",{onClick:m,children:"Download as Text File"}),(0,n.jsx)("h2",{children:"Preview:"}),(0,n.jsx)("ul",{children:s.map((e,t)=>(0,n.jsx)("li",{children:e},t))})]})]})};t.default=r},4369:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return h}});var n=s(5893),a=s(7294),i=s(9008),o=s.n(i),r=s(1502),l=s.n(r),c=s(5675),d=s.n(c),_=s(4740),m=s(2191),u=s(6525);function h(){let[e,t]=(0,a.useState)([]),[s,i]=(0,a.useState)(""),[r,c]=(0,a.useState)(!1),[h,p]=(0,a.useState)([{role:"assistant",content:"Hi, there! Simply type the job title, job description, and a few details about your experience and I'll respond with your cover letter!"}]),g=(0,a.useRef)(null),x=(0,a.useRef)(null);(0,a.useEffect)(()=>{let e=g.current;e.scrollTop=e.scrollHeight},[h]),(0,a.useEffect)(()=>{x.current.focus()},[]);let j=()=>{p(e=>[...e,{role:"assistant",content:"Oops! There seems to be an error. Please try again."}]),c(!1),i("")},f=async e=>{if(e.preventDefault(),""===s.trim())return;c(!0);let t=[...h,{role:"user",content:s}];p(t),setLetters(t);let n=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:t})});i("");let a=await n.json();if(!a){j();return}p(e=>[...e,{role:"assistant",content:a.result.content}]),c(!1)},v=e=>{"Enter"===e.key&&s?!e.shiftKey&&s&&f(e):"Enter"===e.key&&e.preventDefault()};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o(),{children:[(0,n.jsx)("title",{children:"coverletterAI"}),(0,n.jsx)("meta",{name:"description",content:"coverletter AI web app"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("div",{className:l().topnav,children:[(0,n.jsx)("div",{className:l().navlogo,children:(0,n.jsx)("a",{href:"https://coverletterai.ai",children:"coverletterAI"})}),(0,n.jsxs)("div",{className:l().navlinks,children:[(0,n.jsx)("a",{href:"https://platform.openai.com/docs/models/gpt-4",target:"_blank",children:"Doc"}),(0,n.jsx)("a",{href:"https://replit.com/@rmourey26/coverletterai-lang",target:"_blank",children:"Replit"})]})]}),(0,n.jsxs)("main",{className:l().main,children:[(0,n.jsx)("div",{className:l().cloud,children:(0,n.jsx)("div",{ref:g,className:l().messagelist,children:h.map((e,t)=>(0,n.jsxs)("div",{className:"user"===e.role&&r&&t===h.length-1?l().usermessagewaiting:"assistant"===e.role?l().apimessage:l().usermessage,children:["assistant"===e.role?(0,n.jsx)(d(),{src:"/2.1.png",alt:"AI",width:"30",height:"30",className:l().boticon,priority:!0}):(0,n.jsx)(d(),{src:"/usericon.png",alt:"Me",width:"30",height:"30",className:l().usericon,priority:!0}),(0,n.jsx)("div",{className:l().markdownanswer,children:(0,n.jsx)(_.D,{linkTarget:"_blank",children:e.content})})]},t))})}),(0,n.jsxs)("div",{className:l().center,children:[(0,n.jsx)("div",{className:l().cloudform,children:(0,n.jsxs)("form",{onSubmit:f,children:[(0,n.jsx)("textarea",{disabled:r,onKeyDown:v,ref:x,autoFocus:!1,rows:1,maxLength:512,type:"text",id:"userInput",name:"userInput",placeholder:r?"Waiting for response...":"Type your job title, description, and experience...",value:s,onChange:e=>i(e.target.value),className:l().textarea}),(0,n.jsx)("button",{type:"submit",disabled:r,className:l().generatebutton,children:r?(0,n.jsxs)("div",{className:l().loadingwheel,children:[(0,n.jsx)(m.Z,{color:"inherit",size:20})," "]}):(0,n.jsx)("svg",{viewBox:"0 0 20 20",className:l().svgicon,xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"})})})]})}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsx)(u.default,{})})}),(0,n.jsx)("div",{className:l().footer,children:(0,n.jsxs)("p",{children:[" Built by ",(0,n.jsx)("a",{href:"https://coverletterai.ai",target:"_blank",children:"coverletterAI"}),"."]})})]})]})]})}},1502:function(e){e.exports={main:"Home_main__nLjiQ",header:"Home_header__GCVRv",btn:"Home_btn__UGRT9",topnav:"Home_topnav__BfkuW",navlogo:"Home_navlogo__AhPAx",navlinks:"Home_navlinks__mBPil",apptitle:"Home_apptitle__ajcBb",appdescription:"Home_appdescription__3WT4M",link:"Home_link__mt0ji",cloudform:"Home_cloudform__W4PLJ",textarea:"Home_textarea__lSHf7",generatebutton:"Home_generatebutton__omKYX",loadingwheel:"Home_loadingwheel__IWJnE",svgicon:"Home_svgicon__PLaWz",messagelist:"Home_messagelist__YHr8p",letterlist:"Home_letterlist__HxZRR",messagelistloading:"Home_messagelistloading__tlCYV",usermessage:"Home_usermessage__tWHWR",usermessagewaiting:"Home_usermessagewaiting__PYv_4","loading-gradient":"Home_loading-gradient__8jpVG",apimessage:"Home_apimessage__VhfTn",fadein:"Home_fadein__CBLON",markdownanswer:"Home_markdownanswer__UUDfu",boticon:"Home_boticon__Xr0Q4",usericon:"Home_usericon___BrVD",letteranswer:"Home_letteranswer__Z5jxO",letternanswer:"Home_letternanswer__9ITLx",lettanswer:"Home_lettanswer__HcGlE",center:"Home_center__4BFgC",cloud:"Home_cloud__S7par",pointsnormal:"Home_pointsnormal__yRwA_",pointsdim:"Home_pointsdim__x_zcw",footer:"Home_footer____T7K"}}},function(e){e.O(0,[794,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);