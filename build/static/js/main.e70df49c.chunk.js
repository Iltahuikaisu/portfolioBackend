(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{14:function(e,t){},15:function(e,t,a){e.exports=a.p+"static/media/me.a1d4d129.jpg"},16:function(e,t,a){e.exports=a(40)},21:function(e,t,a){},22:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(13),r=a.n(o),i=(a(21),a(2)),c=(a(22),function(e){if("loading"===e.appStates.allProjects)return l.a.createElement("div",null,"loading");var t=e.appStates.allProjects.map((function(t){return e.state===t.state&&(e.appStates.showDetails.find((function(e){return e===t.name}))?l.a.createElement("div",{key:t.name},t.details,l.a.createElement("button",{onClick:function(){e.appStates.setShowDetails(e.appStates.showDetails.filter((function(e){return e!==t.name})))}},"less details")):l.a.createElement("div",{key:t.name},t.name,l.a.createElement("button",{onClick:function(){e.appStates.setShowDetails(e.appStates.showDetails.concat(t.name))}},"more details")))}));return l.a.createElement(l.a.Fragment,null,t)}),s=a(3),u=a.n(s),m=function(e){return u.a.get("".concat("/","projects")).then((function(e){return e}))},p=function(e){var t={name:e.name,feedback:e.feedback};return u.a.post("".concat("/","feedback"),t).then((function(e){return e}))},d=a(14),f=a.n(d),E=a(15),g=a.n(E),b=function(e){console.log(e);var t={feedback:e.appStates.newFeedback,name:e.appStates.newName};return l.a.createElement("div",null,l.a.createElement("h2",null,"Feedback"),l.a.createElement("form",null,l.a.createElement("div",null,l.a.createElement("div",null,"Input your name (optional)"),l.a.createElement("input",{type:"text",onChange:function(t){return e.appStates.setNewName(t.target.value)}})),l.a.createElement("div",null,l.a.createElement("div",null,"Share your thoughts"),l.a.createElement("textarea",{rows:"10",columns:"50",onChange:function(t){return e.appStates.setNewFeedback(t.target.value)}})),l.a.createElement("input",{type:"submit",onClick:function(e){console.log(t),e.preventDefault(),p(t)}})))},h=function(e){var t=e.info.name,a=e.info.details,n=e.appStates.showDetails,o=e.appStates.setShowDetails;return n.find((function(e){return e===t}))?l.a.createElement(l.a.Fragment,null,a,l.a.createElement("button",{onClick:function(){o(n.filter((function(e){return e!==t})))}},"less details")):l.a.createElement(l.a.Fragment,null,t,l.a.createElement("button",{onClick:function(){o(n.concat(t))}},"more details"))},S={languageSkills:{name:"Language Skills",details:"Native finnish, fluent english and rusty swedish."},contactInformation:{name:"Contact Information",details:"I prefer using phone or aaro-antero.kurki@tuni.fi."},workExperience:{name:"Work experience",details:"2014-2016 summers I was trainee at Lemp\xe4\xe4l\xe4 Water. 2018 summer I worked for workpower doing odd jobs. 2019 summer i did face to face marketing for KUA."},hobbies:{name:"Hobbies",details:"I play long and boring boardgames, read books and jog"},portfolioInfo:{name:"About this portfolio",details:"This cv uses react for frontend, Node (express) for backend and MongoDb for storing Feedback and my projects. I will improve this based on feedback and my growing skills."},education:{name:"Education",details:"I am first year TAMK student studying for Degree Programme in Business Information Systems."}},k=function(){var e=Object(n.useState)("loading"),t=Object(i.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)([]),s=Object(i.a)(r,2),u=s[0],p=s[1],d=Object(n.useState)(""),E=Object(i.a)(d,2),k=E[0],w=E[1],v=Object(n.useState)(""),j=Object(i.a)(v,2),y=j[0],I=j[1],D={allProjects:a,setAllProjects:o,showDetails:u,setShowDetails:p,newFeedback:k,setNewFeedback:w,newName:y,setNewName:I};return Object(n.useEffect)((function(){m({collectionModel:f.a}).then((function(e){console.log("got ".concat(e)),o(e.data)}))}),[]),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h2",null,"Portfolio Aaro-Antero Kurki"),l.a.createElement(h,{appStates:D,info:S.portfolioInfo})),l.a.createElement("div",null,"I am motivated 1st year student at TAMK, planning to become a solid professional in the field of programming."),l.a.createElement("h3",null,"Ready"),l.a.createElement(c,{state:"ready",appStates:D}),l.a.createElement("h3",null,"Ongoing"),l.a.createElement(c,{state:"ongoing",appStates:D}),l.a.createElement("h3",null,"Planned"),l.a.createElement(c,{state:"planned",appStates:D})),l.a.createElement("h3",null,"Curriculum Vitae"),l.a.createElement("img",{src:g.a,alt:"My face",height:"150"}),l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement(h,{appStates:D,info:S.workExperience})),l.a.createElement("p",null,l.a.createElement(h,{appStates:D,info:S.languageSkills})),l.a.createElement("p",null,l.a.createElement(h,{appStates:D,info:S.hobbies})),l.a.createElement("p",null,l.a.createElement(h,{appStates:D,info:S.contactInformation})),l.a.createElement("p",null,l.a.createElement(h,{appStates:D,info:S.education}))),l.a.createElement(b,{appStates:D}))};r.a.render(l.a.createElement(k,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e70df49c.chunk.js.map