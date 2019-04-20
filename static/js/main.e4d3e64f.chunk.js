(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),i=a.n(l),s=(a(16),a(2)),c=a(3),o=a(4),m=a(7),d=a(5),u=a(6),h=a(1),g=(a(17),{}),b="https://danfortin2.github.io/rankmybeer/api";g.createBeer=function(e){var t="";switch(e.beerlist){case"lager":t="/lagers";break;case"stout":t="/stouts";break;case"pilsner":t="/pilsners";break;case"ale":t="/ales";break;default:t="/lagers"}var a="".concat(b).concat(t),n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({beers:e})};return fetch(a,n).then(function(e){return e.ok?e.json().then(function(e){return e.beers}):new Promise(function(e){return e(null)})})},g.getLagers=function(){var e="".concat(b,"/lagers");return fetch(e).then(function(e){return e.ok?e.json().then(function(e){return e.beers.map(function(e){return e})}):new Promise(function(e){return e([])})})},g.updateLagers=function(e){var t="".concat(b,"/lagers/").concat(e.id),a={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({beers:e})};return fetch(t,a).then(function(e){return e.ok?e.json().then(function(e){return e.beers}):new Promise(function(e){return e(null)})})},g.deleteLagers=function(e){var t="".concat(b,"/lagers/").concat(e);return fetch(t,{method:"DELETE"})},g.getAles=function(){var e="".concat(b,"/ales");return fetch(e).then(function(e){return e.ok?e.json().then(function(e){return e.beers.map(function(e){return e})}):new Promise(function(e){return e([])})})},g.updateAles=function(e){var t="".concat(b,"/ales/").concat(e.id),a={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({beers:e})};return fetch(t,a).then(function(e){return e.ok?e.json().then(function(e){return e.beers}):new Promise(function(e){return e(null)})})},g.deleteAles=function(e){var t="".concat(b,"/ales/").concat(e);return fetch(t,{method:"DELETE"})},g.getPilsner=function(){var e="".concat(b,"/pilsners");return fetch(e).then(function(e){return e.ok?e.json().then(function(e){return e.beers.map(function(e){return e})}):new Promise(function(e){return e([])})})},g.updatePilsners=function(e){var t="".concat(b,"/pilsners/").concat(e.id),a={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({beers:e})};return fetch(t,a).then(function(e){return e.ok?e.json().then(function(e){return e.beers}):new Promise(function(e){return e(null)})})},g.deletePilsner=function(e){var t="".concat(b,"/pilsners/").concat(e);return fetch(t,{method:"DELETE"})},g.getStout=function(){var e="".concat(b,"/stouts");return fetch(e).then(function(e){return e.ok?e.json().then(function(e){return e.beers.map(function(e){return e})}):new Promise(function(e){return e([])})})},g.updateStouts=function(e){var t="".concat(b,"/stouts/").concat(e.id),a={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({beers:e})};return fetch(t,a).then(function(e){return e.ok?e.json().then(function(e){return e.beers}):new Promise(function(e){return e(null)})})},g.deleteStout=function(e){var t="".concat(b,"/stouts/").concat(e);return fetch(t,{method:"DELETE"})};var p=g,E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={generateBeerScreen:!1,beers:[],currentBeerId:"",beername:"",brewed:"",rating:"",alc:"",beerlist:"",description:"",imgUrl:""},a.deleteItem=a.deleteItem.bind(Object(h.a)(Object(h.a)(a))),a.generateEditBeerScreen=a.generateEditBeerScreen.bind(Object(h.a)(Object(h.a)(a))),a.editBeerScreen=a.editBeerScreen.bind(Object(h.a)(Object(h.a)(a))),a.closeEditBeerScreen=a.closeEditBeerScreen.bind(Object(h.a)(Object(h.a)(a))),a.updateBeerTile=a.updateBeerTile.bind(Object(h.a)(Object(h.a)(a))),a.handleFormFieldValueChanges=a.handleFormFieldValueChanges.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.getLagers().then(function(t){e.setState({beers:t})})}},{key:"deleteItem",value:function(e){var t=this;p.deleteLagers(e).then(function(){p.getLagers().then(function(e){t.setState({beers:e})})})}},{key:"componentWillReceiveProps",value:function(e){var t=this,a=this.props;e.refresh!==a&&p.getLagers().then(function(e){t.setState({beers:e})})}},{key:"generateEditBeerScreen",value:function(e){this.setState({generateBeerScreen:!0,currentBeerId:e})}},{key:"closeEditBeerScreen",value:function(){this.setState({generateBeerScreen:!1})}},{key:"editBeerScreen",value:function(){if(!0===this.state.generateBeerScreen)return r.a.createElement("div",{className:"Dialogue-Box"},"   ",r.a.createElement("div",null,"     ",r.a.createElement("ul",{className:"menu-items"},"       ",r.a.createElement("li",{className:"close",onClick:this.closeEditBeerScreen},"Close"),"       ",r.a.createElement("li",{className:"add",onClick:this.updateBeerTile},"Add"),"     "),"   "),"   ",r.a.createElement("div",null,"     ",r.a.createElement("h2",null,"Edit Beer Review"),"     ",r.a.createElement("h3",{className:"required-fields"},"* denotes required fields"),"   "),"   ",r.a.createElement("div",{className:"beer-input-fields"},"     ",r.a.createElement("form",null,"       ",r.a.createElement("label",null,r.a.createElement("span",{className:"required"},"*"),"Name of Beer:         ",r.a.createElement("input",{type:"text",name:"beername",maxLength:"30",size:"30",onChange:this.handleFormFieldValueChanges}),"       "),"       ",r.a.createElement("label",null,r.a.createElement("span",{className:"required"},"*"),"Brewed In:         ",r.a.createElement("input",{type:"text",name:"brewed",maxLength:"30",size:"30",onChange:this.handleFormFieldValueChanges}),"       "),"       ",r.a.createElement("fieldset",{id:"beer-dropdown"},"         ",r.a.createElement("label",null,r.a.createElement("span",{className:"required"},"*"),"Beer Type:"),"         ",r.a.createElement("select",{id:"myList",name:"beerlist",onChange:this.handleFormFieldValueChanges},"           ",r.a.createElement("option",{value:""}),"           ",r.a.createElement("option",{value:"lager"},"Lager"),"           ",r.a.createElement("option",{value:"stout"},"Stout"),"           ",r.a.createElement("option",{value:"pilsner"},"Pilsner"),"           ",r.a.createElement("option",{value:"ale"},"Ale"),"         "),"       "),"       ",r.a.createElement("fieldset",{id:"beer-dropdown",className:"beer-color"},"         ",r.a.createElement("label",null,r.a.createElement("span",{className:"required"},"*"),"Beer Color:"),"         ",r.a.createElement("select",{id:"myList",name:"imgUrl",onChange:this.handleFormFieldValueChanges},"           ",r.a.createElement("option",{value:""}),"           ",r.a.createElement("option",{value:"/images/lightgold.png",className:"Light-beer",alt:"Light gold beer in a glass"},"Light Gold"),"           ",r.a.createElement("option",{value:"/images/gold.png",className:"gold-beer",alt:"Gold beer in a glass"},"Gold"),"           ",r.a.createElement("option",{value:"/images/brown.png",className:"brown-beer",alt:"Brown beer in a glass"},"Brown"),"           ",r.a.createElement("option",{value:"/images/black.png",className:"black-beer",alt:"Black beer in a glass"},"Black"),"           ",r.a.createElement("option",{value:"/images/red.png",className:"red-beer",alt:"Redish beer in a glass"},"Red"),"         "),"       "),"       ",r.a.createElement("label",null,r.a.createElement("span",{className:"required"},"*"),"Rating:         ",r.a.createElement("input",{type:"number",name:"rating",min:"1",max:"5",size:"1",onChange:this.handleFormFieldValueChanges}),"         /5 \u2605's       "),"       ",r.a.createElement("label",null,r.a.createElement("span",{className:"required"},"*"),"Alc %:         ",r.a.createElement("input",{type:"number",name:"alc",min:"1",max:"5",size:"1",onChange:this.handleFormFieldValueChanges}),"       "),"       ",r.a.createElement("label",{className:"formfielddesc"},r.a.createElement("span",{className:"required"},"*"),"Description:          ",r.a.createElement("textarea",{type:"text",name:"description",maxLength:"150",cols:"62",rows:"3",onChange:this.handleFormFieldValueChanges}),"       "),"     "),"   ")," ")}},{key:"handleFormFieldValueChanges",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(s.a)({},n,a))}},{key:"updateBeerTile",value:function(){var e=this,t={id:this.state.currentBeerId,beerlist:this.state.beerlist,name:this.state.beername,percent:this.state.alc,rating:Math.round(this.state.rating),description:this.state.description,location:this.state.brewed,imgUrl:this.state.imgUrl};t.name&&t.location&&t.description&&t.percent&&t.imgUrl&&t.beerlist&&t.rating?t.rating<0||t.rating>5?alert("This isn't rocket science. Put a number between 1 and 5 for the rating."):t.percent<0||t.percent>99||t.percent.length>4?alert("Be reasonable. Put a real Alcohol percentage in!"):(this.setState({generateBeerScreen:!1,currentBeerId:"",beername:"",brewed:"",rating:"",alc:"",description:""}),p.updateLagers(t).then(function(){p.getLagers().then(function(t){e.setState({beers:t})})})):alert("You must fill in all required fields. Rating cannot be a 0. Ratings will be rounded to a whole number.")}},{key:"renderBeerList",value:function(){var e=this;return Object.keys(this.state.beers).map(function(t){var a=e.state.beers[t];return r.a.createElement("div",{className:"Lager-Tile",key:a.id},r.a.createElement("div",{className:"delete-me"},r.a.createElement("span",{onClick:e.generateEditBeerScreen.bind(e,a.id)},"Edit"),r.a.createElement("span",{onClick:e.deleteItem.bind(e,a.id)},"X")),r.a.createElement("h2",null,a.name),r.a.createElement("img",{className:"beerimg",src:a.imgUrl}),r.a.createElement("div",{className:"Beer-information"},r.a.createElement("p",null,a.rating,"/5 \u2605's"),r.a.createElement("p",null,"Alc. ",a.percent,"%")),r.a.createElement("div",{className:"location"},r.a.createElement("p",null,"Brewed in: ",a.location)),r.a.createElement("div",{className:"beerdesc"},r.a.createElement("p",null,a.description)))})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"Beer-List"},this.renderBeerList()),r.a.createElement("div",{className:"Add-Dialogue"},this.editBeerScreen()))}}]),t}(r.a.Component),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={generateBeerScreen:!1,beers:[],currentBeerId:"",beername:"",brewed:"",rating:"",alc:"",beerlist:"",description:"",imgUrl:""},a.deleteItem=a.deleteItem.bind(Object(h.a)(Object(h.a)(a))),a.generateEditBeerScreen=a.generateEditBeerScreen.bind(Object(h.a)(Object(h.a)(a))),a.editBeerScreen=a.editBeerScreen.bind(Object(h.a)(Object(h.a)(a))),a.closeEditBeerScreen=a.closeEditBeerScreen.bind(Object(h.a)(Object(h.a)(a))),a.updateBeerTile=a.updateBeerTile.bind(Object(h.a)(Object(h.a)(a))),a.handleFormFieldValueChanges=a.handleFormFieldValueChanges.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.getAles().then(function(t){e.setState({beers:t})})}},{key:"deleteItem",value:function(e){var t=this;p.deleteAles(e).then(function(){p.getAles().then(function(e){t.setState({beers:e})})})}},{key:"componentWillReceiveProps",value:function(e){var t=this,a=this.props;e.refresh!==a&&p.getAles().then(function(e){t.setState({beers:e})})}},{key:"generateEditBeerScreen",value:function(e){this.setState({generateBeerScreen:!0,currentBeerId:e})}},{key:"closeEditBeerScreen",value:function(){this.setState({generateBeerScreen:!1})}},{key:"editBeerScreen",value:function(){if(!0===this.state.generateBeerScreen)return r.a.createElement("div",{className:"Dialogue-Box"},"   ",r.a.createElement("div",null,"     ",r.a.createElement("ul",{className:"menu-items"},"       ",r.a.createElement("li",{className:"close",onClick:this.closeEditBeerScreen},"Close"),"       ",r.a.createElement("li",{className:"add",onClick:this.updateBeerTile},"Add"),"     "),"   "),"   ",r.a.createElement("div",null,"     ",r.a.createElement("h2",null,"Edit Beer Review"),"     ",r.a.createElement("h3",{className:"required-fields"},"* denotes required fields"),"   "),"   ",r.a.createElement("div",{className:"beer-input-fields"},"     ",r.a.createElement("form",null,"       ",r.a.createElement("label",null,r.a.createElement("span",{className:"required"},"*"),"Name of Beer:         ",r.a.createElement("input",{type:"text",name:"beername",maxLength:"30",size:"30",onChange:this.handleFormFieldValueChanges}),"       "),"       ",r.a.createElement("label",null,r.a.createElement("span",{className:"required"},"*"),"Brewed In:         ",r.a.createElement("input",{type:"text",name:"brewed",maxLength:"30",size:"30",onChange:this.handleFormFieldValueChanges}),"       "),"       ",r.a.createElement("fieldset",{id:"beer-dropdown"},"         ",r.a.createElement("label",null,r.a.createElement("span",{className:"required"},"*"),"Beer Type:"),"         ",r.a.createElement("select",{id:"myList",name:"beerlist",onChange:this.handleFormFieldValueChanges},"           ",r.a.createElement("option",{value:""}),"           ",r.a.createElement("option",{value:"lager"},"Lager"),"           ",r.a.createElement("option",{value:"stout"},"Stout"),"           ",r.a.createElement("option",{value:"pilsner"},"Pilsner"),"           ",r.a.createElement("option",{value:"ale"},"Ale"),"         "),"       "),"       ",r.a.createElement("fieldset",{id:"beer-dropdown",className:"beer-color"},"         ",r.a.createElement("label",null,r.a.createElement("span",{className:"required"},"*"),"Beer Color:"),"         ",r.a.createElement("select",{id:"myList",name:"imgUrl",onChange:this.handleFormFieldValueChanges},"           ",r.a.createElement("option",{value:""}),"           ",r.a.createElement("option",{value:"/images/lightgold.png",className:"Light-beer",alt:"Light gold beer in a glass"},"Light Gold"),"           ",r.a.createElement("option",{value:"/images/gold.png",className:"gold-beer",alt:"Gold beer in a glass"},"Gold"),"           ",r.a.createElement("option",{value:"/images/brown.png",className:"brown-beer",alt:"Brown beer in a glass"},"Brown"),"           ",r.a.createElement("option",{value:"/images/black.png",className:"black-beer",alt:"Black beer in a glass"},"Black"),"           ",r.a.createElement("option",{value:"/images/red.png",className:"red-beer",alt:"Redish beer in a glass"},"Red"),"         "),"       "),"       ",r.a.createElement("label",null,r.a.createElement("span",{className:"required"},"*"),"Rating:         ",r.a.createElement("input",{type:"number",name:"rating",min:"1",max:"5",size:"1",onChange:this.handleFormFieldValueChanges}),"         /5 \u2605's       "),"       ",r.a.createElement("label",null,r.a.createElement("span",{className:"required"},"*"),"Alc %:         ",r.a.createElement("input",{type:"number",name:"alc",min:"1",max:"5",size:"1",onChange:this.handleFormFieldValueChanges}),"       "),"       ",r.a.createElement("label",{className:"formfielddesc"},r.a.createElement("span",{className:"required"},"*"),"Description:          ",r.a.createElement("textarea",{type:"text",name:"description",maxLength:"150",cols:"62",rows:"3",onChange:this.handleFormFieldValueChanges}),"       "),"     "),"   ")," ")}},{key:"handleFormFieldValueChanges",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(s.a)({},n,a))}},{key:"updateBeerTile",value:function(){var e=this,t={id:this.state.currentBeerId,beerlist:this.state.beerlist,name:this.state.beername,percent:this.state.alc,rating:Math.round(this.state.rating),description:this.state.description,location:this.state.brewed,imgUrl:this.state.imgUrl};t.name&&t.location&&t.description&&t.percent&&t.imgUrl&&t.beerlist&&t.rating?t.rating<0||t.rating>5?alert("This isn't rocket science. Put a number between 1 and 5 for the rating."):t.percent<0||t.percent>99||t.percent.length>4?alert("Be reasonable. Put a real Alcohol percentage in!"):(this.setState({generateBeerScreen:!1,currentBeerId:"",beername:"",brewed:"",rating:"",alc:"",description:""}),p.updateAles(t).then(function(){p.getAles().then(function(t){e.setState({beers:t})})})):alert("You must fill in all required fields. Rating cannot be a 0. Ratings will be rounded to a whole number.")}},{key:"renderBeerList",value:function(){var e=this;return Object.keys(this.state.beers).map(function(t){var a=e.state.beers[t];return r.a.createElement("div",{className:"Lager-Tile",key:a.id},r.a.createElement("div",{className:"delete-me"},r.a.createElement("span",{onClick:e.generateEditBeerScreen.bind(e,a.id)},"Edit"),r.a.createElement("span",{onClick:e.deleteItem.bind(e,a.id)},"X")),r.a.createElement("h2",null,a.name),r.a.createElement("img",{className:"beerimg",src:a.imgUrl}),r.a.createElement("div",{className:"Beer-information"},r.a.createElement("p",null,a.rating,"/5 \u2605's"),r.a.createElement("p",null,"Alc. ",a.percent,"%")),r.a.createElement("div",{className:"location"},r.a.createElement("p",null,"Brewed in: ",a.location)),r.a.createElement("div",{className:"beerdesc"},r.a.createElement("p",null,a.description)))})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"Beer-List"},this.renderBeerList()),r.a.createElement("div",{className:"Add-Dialogue"},this.editBeerScreen()))}}]),t}(r.a.Component),B=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={generateBeerScreen:!1,beers:[],currentBeerId:"",beername:"",brewed:"",rating:"",alc:"",beerlist:"",description:"",imgUrl:""},a.deleteItem=a.deleteItem.bind(Object(h.a)(Object(h.a)(a))),a.generateEditBeerScreen=a.generateEditBeerScreen.bind(Object(h.a)(Object(h.a)(a))),a.editBeerScreen=a.editBeerScreen.bind(Object(h.a)(Object(h.a)(a))),a.closeEditBeerScreen=a.closeEditBeerScreen.bind(Object(h.a)(Object(h.a)(a))),a.updateBeerTile=a.updateBeerTile.bind(Object(h.a)(Object(h.a)(a))),a.handleFormFieldValueChanges=a.handleFormFieldValueChanges.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.getPilsner().then(function(t){e.setState({beers:t})})}},{key:"deleteItem",value:function(e){var t=this;p.deletePilsner(e).then(function(){p.getPilsner().then(function(e){t.setState({beers:e})})})}},{key:"componentWillReceiveProps",value:function(e){var t=this,a=this.props;e.refresh!==a&&p.getPilsner().then(function(e){t.setState({beers:e})})}},{key:"generateEditBeerScreen",value:function(e){this.setState({generateBeerScreen:!0,currentBeerId:e})}},{key:"closeEditBeerScreen",value:function(){this.setState({generateBeerScreen:!1})}},{key:"editBeerScreen",value:function(){if(!0===this.state.generateBeerScreen)return r.a.createElement("div",{className:"Dialogue-Box"},"   ",r.a.createElement("div",null,"     ",r.a.createElement("ul",{className:"menu-items"},"       ",r.a.createElement("li",{className:"close",onClick:this.closeEditBeerScreen},"Close"),"       ",r.a.createElement("li",{className:"add",onClick:this.updateBeerTile},"Add"),"     "),"   "),"   ",r.a.createElement("div",null,"     ",r.a.createElement("h2",null,"Edit Beer Review"),"     ",r.a.createElement("h3",{className:"required-fields"},"* denotes required fields"),"   "),"   ",r.a.createElement("div",{className:"beer-input-fields"},"     ",r.a.createElement("form",null,"       ",r.a.createElement("label",null,r.a.createElement("span",{className:"required"},"*"),"Name of Beer:         ",r.a.createElement("input",{type:"text",name:"beername",maxLength:"30",size:"30",onChange:this.handleFormFieldValueChanges}),"       "),"       ",r.a.createElement("label",null,r.a.createElement("span",{className:"required"},"*"),"Brewed In:         ",r.a.createElement("input",{type:"text",name:"brewed",maxLength:"30",size:"30",onChange:this.handleFormFieldValueChanges}),"       "),"       ",r.a.createElement("fieldset",{id:"beer-dropdown"},"         ",r.a.createElement("label",null,r.a.createElement("span",{className:"required"},"*"),"Beer Type:"),"         ",r.a.createElement("select",{id:"myList",name:"beerlist",onChange:this.handleFormFieldValueChanges},"           ",r.a.createElement("option",{value:""}),"           ",r.a.createElement("option",{value:"lager"},"Lager"),"           ",r.a.createElement("option",{value:"stout"},"Stout"),"           ",r.a.createElement("option",{value:"pilsner"},"Pilsner"),"           ",r.a.createElement("option",{value:"ale"},"Ale"),"         "),"       "),"       ",r.a.createElement("fieldset",{id:"beer-dropdown",className:"beer-color"},"         ",r.a.createElement("label",null,r.a.createElement("span",{className:"required"},"*"),"Beer Color:"),"         ",r.a.createElement("select",{id:"myList",name:"imgUrl",onChange:this.handleFormFieldValueChanges},"           ",r.a.createElement("option",{value:""}),"           ",r.a.createElement("option",{value:"/images/lightgold.png",className:"Light-beer",alt:"Light gold beer in a glass"},"Light Gold"),"           ",r.a.createElement("option",{value:"/images/gold.png",className:"gold-beer",alt:"Gold beer in a glass"},"Gold"),"           ",r.a.createElement("option",{value:"/images/brown.png",className:"brown-beer",alt:"Brown beer in a glass"},"Brown"),"           ",r.a.createElement("option",{value:"/images/black.png",className:"black-beer",alt:"Black beer in a glass"},"Black"),"           ",r.a.createElement("option",{value:"/images/red.png",className:"red-beer",alt:"Redish beer in a glass"},"Red"),"         "),"       "),"       ",r.a.createElement("label",null,r.a.createElement("span",{className:"required"},"*"),"Rating:         ",r.a.createElement("input",{type:"number",name:"rating",min:"1",max:"5",size:"1",onChange:this.handleFormFieldValueChanges}),"         /5 \u2605's       "),"       ",r.a.createElement("label",null,r.a.createElement("span",{className:"required"},"*"),"Alc %:         ",r.a.createElement("input",{type:"number",name:"alc",min:"1",max:"5",size:"1",onChange:this.handleFormFieldValueChanges}),"       "),"       ",r.a.createElement("label",{className:"formfielddesc"},r.a.createElement("span",{className:"required"},"*"),"Description:          ",r.a.createElement("textarea",{type:"text",name:"description",maxLength:"150",cols:"62",rows:"3",onChange:this.handleFormFieldValueChanges}),"       "),"     "),"   ")," ")}},{key:"handleFormFieldValueChanges",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(s.a)({},n,a))}},{key:"updateBeerTile",value:function(){var e=this,t={id:this.state.currentBeerId,beerlist:this.state.beerlist,name:this.state.beername,percent:this.state.alc,rating:Math.round(this.state.rating),description:this.state.description,location:this.state.brewed,imgUrl:this.state.imgUrl};t.name&&t.location&&t.description&&t.percent&&t.imgUrl&&t.beerlist&&t.rating?t.rating<0||t.rating>5?alert("This isn't rocket science. Put a number between 1 and 5 for the rating."):t.percent<0||t.percent>99||t.percent.length>4?alert("Be reasonable. Put a real Alcohol percentage in!"):(this.setState({generateBeerScreen:!1,currentBeerId:"",beername:"",brewed:"",rating:"",alc:"",description:""}),p.updatePilsners(t).then(function(){p.getPilsner().then(function(t){e.setState({beers:t})})})):alert("You must fill in all required fields. Rating cannot be a 0. Ratings will be rounded to a whole number.")}},{key:"renderBeerList",value:function(){var e=this;return Object.keys(this.state.beers).map(function(t){var a=e.state.beers[t];return r.a.createElement("div",{className:"Lager-Tile",key:a.id},r.a.createElement("div",{className:"delete-me"},r.a.createElement("span",{onClick:e.generateEditBeerScreen.bind(e,a.id)},"Edit"),r.a.createElement("span",{onClick:e.deleteItem.bind(e,a.id)},"X")),r.a.createElement("h2",null,a.name),r.a.createElement("img",{className:"beerimg",src:a.imgUrl}),r.a.createElement("div",{className:"Beer-information"},r.a.createElement("p",null,a.rating,"/5 \u2605's"),r.a.createElement("p",null,"Alc. ",a.percent,"%")),r.a.createElement("div",{className:"location"},r.a.createElement("p",null,"Brewed in: ",a.location)),r.a.createElement("div",{className:"beerdesc"},r.a.createElement("p",null,a.description)))})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"Beer-List"},this.renderBeerList()),r.a.createElement("div",{className:"Add-Dialogue"},this.editBeerScreen()))}}]),t}(r.a.Component),f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={generateBeerScreen:!1,beers:[],currentBeerId:"",beername:"",brewed:"",rating:"",alc:"",beerlist:"",description:"",imgUrl:""},a.deleteItem=a.deleteItem.bind(Object(h.a)(Object(h.a)(a))),a.generateEditBeerScreen=a.generateEditBeerScreen.bind(Object(h.a)(Object(h.a)(a))),a.editBeerScreen=a.editBeerScreen.bind(Object(h.a)(Object(h.a)(a))),a.closeEditBeerScreen=a.closeEditBeerScreen.bind(Object(h.a)(Object(h.a)(a))),a.updateBeerTile=a.updateBeerTile.bind(Object(h.a)(Object(h.a)(a))),a.handleFormFieldValueChanges=a.handleFormFieldValueChanges.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.getStout().then(function(t){e.setState({beers:t})})}},{key:"deleteItem",value:function(e){var t=this;p.deleteStout(e).then(function(){p.getStout().then(function(e){t.setState({beers:e})})})}},{key:"componentWillReceiveProps",value:function(e){var t=this,a=this.props;e.refresh!==a&&p.getStout().then(function(e){t.setState({beers:e})})}},{key:"generateEditBeerScreen",value:function(e){this.setState({generateBeerScreen:!0,currentBeerId:e})}},{key:"closeEditBeerScreen",value:function(){this.setState({generateBeerScreen:!1})}},{key:"editBeerScreen",value:function(){if(!0===this.state.generateBeerScreen)return r.a.createElement("div",{className:"Dialogue-Box"},"   ",r.a.createElement("div",null,"     ",r.a.createElement("ul",{className:"menu-items"},"       ",r.a.createElement("li",{className:"close",onClick:this.closeEditBeerScreen},"Close"),"       ",r.a.createElement("li",{className:"add",onClick:this.updateBeerTile},"Add"),"     "),"   "),"   ",r.a.createElement("div",null,"     ",r.a.createElement("h2",null,"Edit Beer Review"),"     ",r.a.createElement("h3",{className:"required-fields"},"* denotes required fields"),"   "),"   ",r.a.createElement("div",{className:"beer-input-fields"},"     ",r.a.createElement("form",null,"       ",r.a.createElement("label",null,r.a.createElement("span",{className:"required"},"*"),"Name of Beer:         ",r.a.createElement("input",{type:"text",name:"beername",maxLength:"30",size:"30",onChange:this.handleFormFieldValueChanges}),"       "),"       ",r.a.createElement("label",null,r.a.createElement("span",{className:"required"},"*"),"Brewed In:         ",r.a.createElement("input",{type:"text",name:"brewed",maxLength:"30",size:"30",onChange:this.handleFormFieldValueChanges}),"       "),"       ",r.a.createElement("fieldset",{id:"beer-dropdown"},"         ",r.a.createElement("label",null,r.a.createElement("span",{className:"required"},"*"),"Beer Type:"),"         ",r.a.createElement("select",{id:"myList",name:"beerlist",onChange:this.handleFormFieldValueChanges},"           ",r.a.createElement("option",{value:""}),"           ",r.a.createElement("option",{value:"lager"},"Lager"),"           ",r.a.createElement("option",{value:"stout"},"Stout"),"           ",r.a.createElement("option",{value:"pilsner"},"Pilsner"),"           ",r.a.createElement("option",{value:"ale"},"Ale"),"         "),"       "),"       ",r.a.createElement("fieldset",{id:"beer-dropdown",className:"beer-color"},"         ",r.a.createElement("label",null,r.a.createElement("span",{className:"required"},"*"),"Beer Color:"),"         ",r.a.createElement("select",{id:"myList",name:"imgUrl",onChange:this.handleFormFieldValueChanges},"           ",r.a.createElement("option",{value:""}),"           ",r.a.createElement("option",{value:"/images/lightgold.png",className:"Light-beer",alt:"Light gold beer in a glass"},"Light Gold"),"           ",r.a.createElement("option",{value:"/images/gold.png",className:"gold-beer",alt:"Gold beer in a glass"},"Gold"),"           ",r.a.createElement("option",{value:"/images/brown.png",className:"brown-beer",alt:"Brown beer in a glass"},"Brown"),"           ",r.a.createElement("option",{value:"/images/black.png",className:"black-beer",alt:"Black beer in a glass"},"Black"),"           ",r.a.createElement("option",{value:"/images/red.png",className:"red-beer",alt:"Redish beer in a glass"},"Red"),"         "),"       "),"       ",r.a.createElement("label",null,r.a.createElement("span",{className:"required"},"*"),"Rating:         ",r.a.createElement("input",{type:"number",name:"rating",min:"1",max:"5",size:"1",onChange:this.handleFormFieldValueChanges}),"         /5 \u2605's       "),"       ",r.a.createElement("label",null,r.a.createElement("span",{className:"required"},"*"),"Alc %:         ",r.a.createElement("input",{type:"number",name:"alc",min:"1",max:"5",size:"1",onChange:this.handleFormFieldValueChanges}),"       "),"       ",r.a.createElement("label",{className:"formfielddesc"},r.a.createElement("span",{className:"required"},"*"),"Description:          ",r.a.createElement("textarea",{type:"text",name:"description",maxLength:"150",cols:"62",rows:"3",onChange:this.handleFormFieldValueChanges}),"       "),"     "),"   ")," ")}},{key:"handleFormFieldValueChanges",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(s.a)({},n,a))}},{key:"updateBeerTile",value:function(){var e=this,t={id:this.state.currentBeerId,beerlist:this.state.beerlist,name:this.state.beername,percent:this.state.alc,rating:Math.round(this.state.rating),description:this.state.description,location:this.state.brewed,imgUrl:this.state.imgUrl};t.name&&t.location&&t.description&&t.percent&&t.imgUrl&&t.beerlist&&t.rating?t.rating<0||t.rating>5?alert("This isn't rocket science. Put a number between 1 and 5 for the rating."):t.percent<0||t.percent>99||t.percent.length>4?alert("Be reasonable. Put a real Alcohol percentage in!"):(this.setState({generateBeerScreen:!1,currentBeerId:"",beername:"",brewed:"",rating:"",alc:"",description:""}),p.updateStouts(t).then(function(){p.getStout().then(function(t){e.setState({beers:t})})})):alert("You must fill in all required fields. Rating cannot be a 0. Ratings will be rounded to a whole number.")}},{key:"renderBeerList",value:function(){var e=this;return Object.keys(this.state.beers).map(function(t){var a=e.state.beers[t];return r.a.createElement("div",{className:"Lager-Tile",key:a.id},r.a.createElement("div",{className:"delete-me"},r.a.createElement("span",{onClick:e.generateEditBeerScreen.bind(e,a.id)},"Edit"),r.a.createElement("span",{onClick:e.deleteItem.bind(e,a.id)},"X")),r.a.createElement("h2",null,a.name),r.a.createElement("img",{className:"beerimg",src:a.imgUrl}),r.a.createElement("div",{className:"Beer-information"},r.a.createElement("p",null,a.rating,"/5 \u2605's"),r.a.createElement("p",null,"Alc. ",a.percent,"%")),r.a.createElement("div",{className:"location"},r.a.createElement("p",null,"Brewed in: ",a.location)),r.a.createElement("div",{className:"beerdesc"},r.a.createElement("p",null,a.description)))})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"Beer-List"},this.renderBeerList()),r.a.createElement("div",{className:"Add-Dialogue"},this.editBeerScreen()))}}]),t}(r.a.Component),S=(a(18),{Lager:"Lager",Stout:"Stout",Pilsner:"Pilsner",Ale:"Ale"}),N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={sortBy:"",showAddBeerScreen:!1,beername:"",brewed:"",rating:"",alc:"",beerlist:"",description:"",imgUrl:"",updateBeerList:!1},a.renderSortByOptions=a.renderSortByOptions.bind(Object(h.a)(Object(h.a)(a))),a.handleSortByChange=a.handleSortByChange.bind(Object(h.a)(Object(h.a)(a))),a.generateAddBeerScreen=a.generateAddBeerScreen.bind(Object(h.a)(Object(h.a)(a))),a.displayBeerModal=a.displayBeerModal.bind(Object(h.a)(Object(h.a)(a))),a.hideAddBeerScreen=a.hideAddBeerScreen.bind(Object(h.a)(Object(h.a)(a))),a.handleFormFieldValueChanges=a.handleFormFieldValueChanges.bind(Object(h.a)(Object(h.a)(a))),a.addBeerTile=a.addBeerTile.bind(Object(h.a)(Object(h.a)(a))),a.renderBeerOptions=a.renderBeerOptions.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"renderSortByOptions",value:function(){var e=this;return Object.keys(S).map(function(t){var a=S[t];return r.a.createElement("li",{className:e.getSortByClass(a),onClick:e.handleSortByChange.bind(e,a),key:a},t)})}},{key:"handleSortByChange",value:function(e){this.setState({sortBy:e})}},{key:"getSortByClass",value:function(e){return this.state.sortBy===e?"active":void 0}},{key:"generateAddBeerScreen",value:function(){this.setState({showAddBeerScreen:!0})}},{key:"hideAddBeerScreen",value:function(){this.setState({showAddBeerScreen:!1})}},{key:"handleFormFieldValueChanges",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(s.a)({},n,a))}},{key:"addBeerTile",value:function(){var e=this,t={beerlist:this.state.beerlist,name:this.state.beername,percent:this.state.alc,rating:Math.round(this.state.rating),description:this.state.description,location:this.state.brewed,imgUrl:this.state.imgUrl};t.name&&t.location&&t.description&&t.percent&&t.imgUrl&&t.beerlist&&t.rating?t.rating<0||t.rating>5?alert("This isn't rocket science. Put a number between 1 and 5 for the rating."):t.percent<0||t.percent>99||t.percent.length>4?alert("Be reasonable. Put a real Alcohol percentage in!"):(this.setState({showAddBeerScreen:!1,beername:"",brewed:"",rating:"",alc:"",description:""}),p.createBeer(t).then(function(t){e.setState({updateBeerList:!0})})):alert("You must fill in all required fields. Rating cannot be a 0. Ratings will be rounded to a whole number.")}},{key:"displayBeerModal",value:function(){if(!0===this.state.showAddBeerScreen)return r.a.createElement("div",{className:"Dialogue-Box"},"   ",r.a.createElement("div",null,"     ",r.a.createElement("ul",{className:"menu-items"},"       ",r.a.createElement("li",{className:"close",onClick:this.hideAddBeerScreen},"Close"),"       ",r.a.createElement("li",{className:"add",onClick:this.addBeerTile},"Add"),"     "),"   "),"   ",r.a.createElement("div",null,"     ",r.a.createElement("h2",null,"Add Beer Review"),"     ",r.a.createElement("h3",{className:"required-fields"},"* denotes required fields"),"   "),"   ",r.a.createElement("div",{className:"beer-input-fields"},"     ",r.a.createElement("form",null,"       ",r.a.createElement("label",null,r.a.createElement("span",{className:"required"},"*"),"Name of Beer:         ",r.a.createElement("input",{type:"text",name:"beername",maxLength:"30",size:"30",onChange:this.handleFormFieldValueChanges}),"       "),"       ",r.a.createElement("label",null,r.a.createElement("span",{className:"required"},"*"),"Brewed In:         ",r.a.createElement("input",{type:"text",name:"brewed",maxLength:"30",size:"30",onChange:this.handleFormFieldValueChanges}),"       "),"       ",r.a.createElement("fieldset",{id:"beer-dropdown"},"         ",r.a.createElement("label",null,r.a.createElement("span",{className:"required"},"*"),"Beer Type:"),"         ",r.a.createElement("select",{id:"myList",name:"beerlist",onChange:this.handleFormFieldValueChanges},"           ",r.a.createElement("option",{value:""}),"           ",r.a.createElement("option",{value:"lager"},"Lager"),"           ",r.a.createElement("option",{value:"stout"},"Stout"),"           ",r.a.createElement("option",{value:"pilsner"},"Pilsner"),"           ",r.a.createElement("option",{value:"ale"},"Ale"),"         "),"       "),"       ",r.a.createElement("fieldset",{id:"beer-dropdown",className:"beer-color"},"         ",r.a.createElement("label",null,r.a.createElement("span",{className:"required"},"*"),"Beer Color:"),"         ",r.a.createElement("select",{id:"myList",name:"imgUrl",onChange:this.handleFormFieldValueChanges},"           ",r.a.createElement("option",{value:""}),"           ",r.a.createElement("option",{value:"/images/lightgold.png",className:"Light-beer",alt:"Light gold beer in a glass"},"Light Gold"),"           ",r.a.createElement("option",{value:"/images/gold.png",className:"gold-beer",alt:"Gold beer in a glass"},"Gold"),"           ",r.a.createElement("option",{value:"/images/brown.png",className:"brown-beer",alt:"Brown beer in a glass"},"Brown"),"           ",r.a.createElement("option",{value:"/images/black.png",className:"black-beer",alt:"Black beer in a glass"},"Black"),"           ",r.a.createElement("option",{value:"/images/red.png",className:"red-beer",alt:"Redish beer in a glass"},"Red"),"         "),"       "),"       ",r.a.createElement("label",null,r.a.createElement("span",{className:"required"},"*"),"Rating:         ",r.a.createElement("input",{type:"number",name:"rating",min:"1",max:"5",size:"1",maxLength:"1",onChange:this.handleFormFieldValueChanges}),"         /5 \u2605's       "),"       ",r.a.createElement("label",null,r.a.createElement("span",{className:"required"},"*"),"Alc %:         ",r.a.createElement("input",{type:"number",name:"alc",min:"1",max:"5",size:"1",maxLength:"4",onChange:this.handleFormFieldValueChanges}),"       "),"       ",r.a.createElement("label",{className:"formfielddesc"},r.a.createElement("span",{className:"required"},"*"),"Description:          ",r.a.createElement("textarea",{type:"text",name:"description",maxLength:"150",cols:"62",rows:"3",onChange:this.handleFormFieldValueChanges}),"       "),"     "),"   ")," ")}},{key:"renderBeerOptions",value:function(){return"Lager"===this.state.sortBy?r.a.createElement(E,{updateBeerList:this.props.updateBeerList}):"Ale"===this.state.sortBy?r.a.createElement(v,{updateBeerList:this.props.updateBeerList}):"Pilsner"===this.state.sortBy?r.a.createElement(B,{updateBeerList:this.props.updateBeerList}):"Stout"===this.state.sortBy?r.a.createElement(f,{updateBeerList:this.props.updateBeerList}):void 0}},{key:"render",value:function(){return r.a.createElement("div",{className:"Title"},r.a.createElement("header",{className:"Title-header"},r.a.createElement("div",null,r.a.createElement("h1",null,"The Beer Ranker")),r.a.createElement("div",null,r.a.createElement("ul",{className:"Beer-Types"},this.renderSortByOptions())),r.a.createElement("div",{className:"Add-Beer"},r.a.createElement("span",{className:"plus-icon",onClick:this.generateAddBeerScreen},"+"))),r.a.createElement("div",{className:"HomePage"},this.renderBeerOptions()),r.a.createElement("div",{className:"Add-Dialogue"},this.displayBeerModal()))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.e4d3e64f.chunk.js.map