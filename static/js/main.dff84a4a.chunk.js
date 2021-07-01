(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),o=n.n(c),i=(n(28),n(11)),s=n(4),l=n(5),u=n(7),h=n(6),d=(n(29),n(30),n(1)),m=function(e){var t=e.url,n=e.alt;return Object(d.jsx)("img",{src:t,alt:n,className:"ImageGalleryItem-image"})},g=function(e){var t=e.images,n=e.openModal;return Object(d.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,a=e.webformatURL,r=e.tags,c=e.largeImageURL;return Object(d.jsx)("li",{className:"ImageGalleryItem",onClick:function(){n(c,r)},children:Object(d.jsx)(m,{url:a,alt:r})},t)}))})},b=n(21),j=n.n(b),f=function(e){var t=e.searchQuery,n=void 0===t?"":t,a=e.currentPage,r=void 0===a?1:a,c=e.pageSize,o=void 0===c?12:c;return j.a.get("https://pixabay.com/api/?q=".concat(n,"&page=").concat(r,"&key=").concat("21185221-d49bba1554bfecf624305df2b","&image_type=photo&orientation=horizontal&per_page=").concat(o)).then((function(e){return e.data.hits}))},p=n(23),v=(n(50),n(8)),y=n.n(v),O=function(e){var t=e.title,n=e.button;return Object(d.jsxs)("header",{className:y.a.head,children:[Object(d.jsx)("h1",{className:y.a.title,children:t}),Object(d.jsx)(p.a,{className:y.a.button,href:"https://github.com/2F4S7/goit-react-hw-03-image-finder",target:"_blank",variant:"dark",children:"Github Repository"},n)," "]})},x=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleChange=function(t){e.setState({value:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.changeQuery(e.state.value),e.setState({value:""})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsx)("header",{className:"Searchbar",onSubmit:this.handleSubmit,children:Object(d.jsxs)("form",{className:"SearchForm",children:[Object(d.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(d.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(d.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.value,onChange:this.handleChange})]})})}}]),n}(a.Component),w=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.closeModal()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.closeModal()},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(d.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(d.jsx)("div",{className:"Modal",children:this.props.children})})}}]),n}(a.Component),k=function(e){var t=e.onClick;return Object(d.jsx)("div",{className:"button-conteiner",children:Object(d.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})})},S=n(22),M=n.n(S),C=function(){return Object(d.jsx)("div",{className:"spinner-conteiner",children:Object(d.jsx)(M.a,{type:"Grid",color:"#00BFFF",height:100,width:100})})},N=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:"",currentPage:1,images:[],isLoading:!1,showModal:!1,modalImg:"",modalAlt:"",error:null},e.onChangeQuery=function(t){e.setState({searchQuery:t,currentPage:1,images:[],error:null})},e.fetchImages=function(){var t=e.state,n=t.currentPage,a={searchQuery:t.searchQuery,currentPage:n};e.setState({isLoading:!0}),f(a).then((function(t){e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(t)),currentPage:e.currentPage+1}})),e.scrollWindow()})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.openModal=function(t,n){e.setState((function(e){return{showModal:!e.showModal,modalImg:t,modalAlt:n}}))},e.closeModal=function(){e.setState((function(e){return{showModal:!e.showModal,modalImg:"",modalAlt:""}}))},e}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImages()}},{key:"scrollWindow",value:function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.images,a=e.isLoading,r=e.showModal,c=e.modalImg,o=e.modalAlt,i=n.length>0&&!a;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(O,{title:"React Home Work Image finder 03"}),Object(d.jsx)(x,{changeQuery:this.onChangeQuery}),t&&Object(d.jsx)("h1",{style:{color:"#ff0000",textAlign:"center"},children:"Something going wrong"}),Object(d.jsx)(g,{images:n,openModal:this.openModal}),a&&Object(d.jsx)(C,{}),i&&Object(d.jsx)(k,{onClick:this.fetchImages}),r&&Object(d.jsx)(w,{closeModal:this.closeModal,children:Object(d.jsx)("img",{src:c,alt:o})})]})}}]),n}(a.Component),I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};n(71);o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root")),I()},8:function(e,t,n){e.exports={title:"MyGit_title__3mNeI",head:"MyGit_head__4RXHW",button:"MyGit_button__Nw7u3"}}},[[72,1,2]]]);
//# sourceMappingURL=main.dff84a4a.chunk.js.map