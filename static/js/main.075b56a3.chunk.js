(this.webpackJsonpmemory_game=this.webpackJsonpmemory_game||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"image":"assets/images/bear.png","clicked":false},{"id":2,"image":"assets/images/dog.png","clicked":false},{"id":3,"image":"assets/images/beaver.png","clicked":false},{"id":4,"image":"assets/images/bird.png","clicked":false},{"id":5,"image":"assets/images/cat.png","clicked":false},{"id":6,"image":"assets/images/cow.png","clicked":false},{"id":7,"image":"assets/images/dolphin.png","clicked":false},{"id":8,"image":"assets/images/crocodile.png","clicked":false}]')},function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),s=a.n(c),o=a(5),i=a(1),l=a(2),m=a(4),u=a(3),f=(a(14),function(e){return r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,"Memory Game!"),r.a.createElement("h2",null,"Click an image to earn points. Don't click an image more than once!"))}),g=(a(15),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={navMessage:"",movement:!1},e.renderNavbarMessage=function(){switch(e.state.navMessage){case"perfect":return"You were right!";case"wrong":return"You were wrong!";default:return"Click an image to begin!!"}},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t,a){var n=this,r={movement:!0};0===this.props.score&&0===this.props.topScore?r.navMessage="":0===this.props.score&&this.props.topScore>0?r.navMessage="wrong":r.navMessage="perfect",this.props.score!==e.score&&this.setState(r,(function(){setTimeout((function(){return n.setState({movement:!1})}),500)}))}},{key:"render",value:function(){return r.a.createElement("li",{className:this.state.movement?this.state.navMessage:""},this.renderNavbarMessage())}}]),a}(r.a.Component)),d=(a(16),function(e){return r.a.createElement("nav",{className:"navbar"},r.a.createElement("ul",null,r.a.createElement("li",{className:"brand"},r.a.createElement("a",{href:"/"},"Memory Game")),r.a.createElement("li",null,r.a.createElement(g,{score:e.score,topScore:e.topScore})),r.a.createElement("li",null,"Current Score: ",e.score," | Best Score: ",e.topScore)))}),p=(a(17),function(e){return r.a.createElement("main",{className:"container"},e.children)}),h=(a(18),function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"bottom"},"Memory Game!"))}),v=(a(19),function(e){return r.a.createElement("div",{role:"img","aria-label":"card-item",onClick:function(){return e.handleClick(e.id)},style:{backgroundImage:'url("'.concat(e.image,'")')},className:"card-item".concat(e.shake?" shake":""," ")})}),k=a(8),b=(a(20),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={gameData:k,score:0,topScore:0},e.goodGuess=function(t){var a=e.state,n=a.topScore,r=a.score+1,c=r>n?r:n;e.setState({gameData:e.shufflerFunc(t),score:r,topScore:c})},e.badGuess=function(t){e.setState({gameData:e.dataReset(t),score:0})},e.dataReset=function(t){var a=t.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{clicked:!1})}));return e.shufflerFunc(a)},e.shufflerFunc=function(e){for(var t=e.length-1;t>0;){var a=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[a],e[a]=n,t--}return e},e.handleClick=function(t){var a=!1,n=e.state.gameData.map((function(e){var n=Object(o.a)({},e);return n.id===t&&(n.clicked||(n.clicked=!0,a=!0)),n}));a?e.goodGuess(n):e.badGuess(n)},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({gameData:this.shufflerFunc(this.state.gameData)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"mainDiv"},r.a.createElement(d,{score:this.state.score,topScore:this.state.topScore}),r.a.createElement(f,null),r.a.createElement(p,null,this.state.gameData.map((function(t){return r.a.createElement(v,{key:t.id,id:t.id,shake:!e.state.score&&e.state.topScore,handleClick:e.handleClick,image:t.image})}))),r.a.createElement(h,null))}}]),a}(r.a.Component)),E=function(){return r.a.createElement(b,null)};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.075b56a3.chunk.js.map