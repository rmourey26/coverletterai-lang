(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4369)}])},4369:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return u}});var n=t(5893),a=t(7294),i=t(9008),o=t.n(i),r=t(1502),l=t.n(r),c=t(5675),_=t.n(c),m=t(4740),d=t(2191);function u(){let[e,s]=(0,a.useState)(""),[t,i]=(0,a.useState)(!1),[r,c]=(0,a.useState)([{role:"assistant",content:"Hi, there! What job are you applying for?"}]),u=(0,a.useRef)(null),h=(0,a.useRef)(null);(0,a.useEffect)(()=>{let e=u.current;e.scrollTop=e.scrollHeight},[r]),(0,a.useEffect)(()=>{h.current.focus()},[]);let p=()=>{c(e=>[...e,{role:"assistant",content:"Oops! There seems to be an error. Please try again."}]),i(!1),s("")},g=async t=>{if(t.preventDefault(),""===e.trim())return;i(!0);let n=[...r,{role:"user",content:e}];c(n);let a=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:n})});s("");let o=await a.json();if(!o){p();return}c(e=>[...e,{role:"assistant",content:o.result.content}]),i(!1)},f=s=>{"Enter"===s.key&&e?!s.shiftKey&&e&&g(s):"Enter"===s.key&&s.preventDefault()};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o(),{children:[(0,n.jsx)("title",{children:"GPT-4 Chat UI"}),(0,n.jsx)("meta",{name:"description",content:"GPT-4 interface"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("div",{className:l().topnav,children:[(0,n.jsx)("div",{className:l().navlogo,children:(0,n.jsx)("a",{href:"/",children:"CoverletterAI"})}),(0,n.jsxs)("div",{className:l().navlinks,children:[(0,n.jsx)("a",{href:"https://platform.openai.com/docs/models/gpt-4",target:"_blank",children:"Docs"}),(0,n.jsx)("a",{href:"https://replit.com/@rmourey26/coverletterai-lang",target:"_blank",children:"Replit"})]})]}),(0,n.jsxs)("main",{className:l().main,children:[(0,n.jsx)("div",{className:l().cloud,children:(0,n.jsx)("div",{ref:u,className:l().messagelist,children:r.map((e,s)=>(0,n.jsxs)("div",{className:"user"===e.role&&t&&s===r.length-1?l().usermessagewaiting:"assistant"===e.role?l().apimessage:l().usermessage,children:["assistant"===e.role?(0,n.jsx)(_(),{src:"/openai.png",alt:"AI",width:"30",height:"30",className:l().boticon,priority:!0}):(0,n.jsx)(_(),{src:"/usericon.png",alt:"Me",width:"30",height:"30",className:l().usericon,priority:!0}),(0,n.jsx)("div",{className:l().markdownanswer,children:(0,n.jsx)(m.D,{linkTarget:"_blank",children:e.content})})]},s))})}),(0,n.jsxs)("div",{className:l().center,children:[(0,n.jsx)("div",{className:l().cloudform,children:(0,n.jsxs)("form",{onSubmit:g,children:[(0,n.jsx)("textarea",{disabled:t,onKeyDown:f,ref:h,autoFocus:!1,rows:1,maxLength:512,type:"text",id:"userInput",name:"userInput",placeholder:t?"Waiting for response...":"Type your question...",value:e,onChange:e=>s(e.target.value),className:l().textarea}),(0,n.jsx)("button",{type:"submit",disabled:t,className:l().generatebutton,children:t?(0,n.jsxs)("div",{className:l().loadingwheel,children:[(0,n.jsx)(d.Z,{color:"inherit",size:20})," "]}):(0,n.jsx)("svg",{viewBox:"0 0 20 20",className:l().svgicon,xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"})})})]})}),(0,n.jsx)("div",{className:l().footer,children:(0,n.jsxs)("p",{children:["Powered by ",(0,n.jsx)("a",{href:"https://openai.com/",target:"_blank",children:"OpenAI"}),". Built on ",(0,n.jsx)("a",{href:"https://replit.com/@zahid/GPT-4-UI",target:"_blank",children:"Replit"}),"."]})})]})]})]})}},1502:function(e){e.exports={main:"Home_main__nLjiQ",header:"Home_header__GCVRv",topnav:"Home_topnav__BfkuW",navlogo:"Home_navlogo__AhPAx",navlinks:"Home_navlinks__mBPil",apptitle:"Home_apptitle__ajcBb",appdescription:"Home_appdescription__3WT4M",link:"Home_link__mt0ji",cloudform:"Home_cloudform__W4PLJ",textarea:"Home_textarea__lSHf7",generatebutton:"Home_generatebutton__omKYX",loadingwheel:"Home_loadingwheel__IWJnE",svgicon:"Home_svgicon__PLaWz",messagelist:"Home_messagelist__YHr8p",messagelistloading:"Home_messagelistloading__tlCYV",usermessage:"Home_usermessage__tWHWR",usermessagewaiting:"Home_usermessagewaiting__PYv_4","loading-gradient":"Home_loading-gradient__8jpVG",apimessage:"Home_apimessage__VhfTn",fadein:"Home_fadein__CBLON",markdownanswer:"Home_markdownanswer__UUDfu",boticon:"Home_boticon__Xr0Q4",usericon:"Home_usericon___BrVD",center:"Home_center__4BFgC",cloud:"Home_cloud__S7par",pointsnormal:"Home_pointsnormal__yRwA_",pointsdim:"Home_pointsdim__x_zcw",footer:"Home_footer____T7K"}}},function(e){e.O(0,[794,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);