(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{21:function(e,a,t){e.exports={ImageGallery:"ImageGallery_ImageGallery__DncjJ",ImageGalleryItem:"ImageGallery_ImageGalleryItem__30xkQ"}},22:function(e,a,t){e.exports={ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2bkPr"}},23:function(e,a,t){e.exports={App:"App_App__2s_Fq"}},25:function(e,a,t){e.exports={Loader:"Loader_Loader__17sQZ"}},27:function(e,a,t){e.exports={Button:"Button_Button__3R1xi"}},30:function(e,a,t){e.exports=t(74)},74:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(20),c=t.n(o),l=t(10),i=t(3),s=t(4),u=t(6),m=t(5),h=t(7),p=t(28),d=t(29),g=t(8),f=t.n(g),y=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={query:""},t.handleChange=function(e){t.setState({query:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state.query)},t}return Object(h.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state.query;return r.a.createElement("header",{className:f.a.Searchbar},r.a.createElement("form",{className:f.a.SearchForm,onSubmit:this.handleSubmit},r.a.createElement("button",{className:f.a.SearchFormButton},r.a.createElement("span",{className:f.a.SearchFormButtonLabel},"Search")),r.a.createElement("input",{value:e,onChange:this.handleChange,className:f.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})))}}]),a}(n.Component),b=t(21),_=t.n(b),v=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={},t.onChange=function(e){var a=t.props,n=a.onChange,r=a.onModalOpen,o=e.target.srcset;e.target!==e.currentTarget&&(n(o),r())},t}return Object(h.a)(a,e),Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,a){e.items!==this.props.items&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.props.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:_.a.ImageGallery,onClick:this.onChange},e))}}]),a}(n.Component),S=t(22),O=t.n(S),I=function(e){var a=e.items;return r.a.createElement(r.a.Fragment,null,a.map((function(e){var a=e.id,t=e.modalURL,n=e.url;return r.a.createElement("li",{key:a},r.a.createElement("img",{className:O.a.ImageGalleryItemImage,src:n,alt:"",srcSet:t}))})))},E=t(23),C=t.n(E),j=t(24),k=t.n(j),L=t(25),M=t.n(L),F=function(){return r.a.createElement(k.a,{className:M.a.Loader,type:"ThreeDots",color:"#00BFFF",height:100,width:100,timeout:3e3})},w=(t(56),function(e){var a=e.text;return r.a.createElement("h1",null,"What's up, dude? Oops: ",a,". \xaf\\_(\u30c4)_/\xaf")}),x=t(26),B=t.n(x),A={page:1,query:" ",articlesQuery:function(){return B.a.get("".concat("https://pixabay.com/api/","?q=").concat(this.query,"&page=").concat(this.page,"&key=").concat("15651675-34a5d56e7ceea037b075b1fd1","&image_type=photo&orientation=horizontal&per_page=12"))},get searchQuery(){return this.query},set searchQuery(e){this.query=e},incrementPage:function(){this.page+=1},resetPage:function(){this.page=1}},N=t(9),R=t.n(N),G=function(e){function a(){var e,t;Object(i.a)(this,a);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(t=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(o)))).state={},t.backdropRef=Object(n.createRef)(),t.handleKeyPress=function(e){var a=t.props.onCloseModal;"Escape"===e.code&&a()},t.handleBackdropClick=function(e){var a=t.backdropRef.current,n=t.props.onCloseModal;a&&e.target!==a||n()},t}return Object(h.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this.props.src;return r.a.createElement("div",{className:R.a.Overlay,ref:this.backdropRef,onClick:this.handleBackdropClick},r.a.createElement("div",{className:R.a.Modal},r.a.createElement("img",{src:e,alt:""})))}}]),a}(n.Component),Q=t(27),q=t.n(Q),U=function(e){var a=e.onChange;return r.a.createElement("button",{type:"button",className:q.a.Button,onClick:a},"Load more")},P=function(e){return e.map((function(e){var a=e.webformatURL,t=e.largeImageURL,n=Object(d.a)(e,["webformatURL","largeImageURL"]);return Object(p.a)({url:a,modalURL:t},n)}))},D=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={images:[],isLoading:!1,error:null,isModalOpen:!1,modalSize:""},t.imagesListQuery=function(){A.articlesQuery().then((function(e){var a=e.data;A.incrementPage(),t.setState((function(e){return{images:[].concat(Object(l.a)(e.images),Object(l.a)(P(a.hits)))}}))})).catch((function(e){return t.setState({error:e})})).finally((function(){t.setState({isLoading:!1})}))},t.clearImages=function(){t.setState({images:""})},t.fetchImages=function(e){t.setState({isLoading:!0}),t.clearImages(),A.resetPage(),A.searchQuery=e,t.imagesListQuery()},t.handleLoadMore=function(){t.setState({isLoading:!0}),t.imagesListQuery()},t.handleModalUrlChange=function(e){t.setState({modalSize:e})},t.handleOpenModal=function(){t.setState({isModalOpen:!0})},t.handleCloseModal=function(){t.setState({isModalOpen:!1,modalSize:""})},t}return Object(h.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.fetchImages()}},{key:"render",value:function(){var e=this.state,a=e.images,t=e.isLoading,n=e.error,o=e.isModalOpen,c=e.modalSize;return r.a.createElement("div",{className:C.a.App},r.a.createElement(y,{onSubmit:this.fetchImages}),n&&r.a.createElement(w,{text:n.message}),a.length>0&&r.a.createElement(v,{items:a,onChange:this.handleModalUrlChange,onModalOpen:this.handleOpenModal},r.a.createElement(I,{items:a})),t&&r.a.createElement(F,null),o&&r.a.createElement(G,{onCloseModal:this.handleCloseModal,src:c}),a.length>0&&r.a.createElement(U,{onChange:this.handleLoadMore}))}}]),a}(n.Component);c.a.render(r.a.createElement(D,null),document.getElementById("root"))},8:function(e,a,t){e.exports={App:"Searcbar_App__2HvsA",Searchbar:"Searcbar_Searchbar__srXIb",SearchForm:"Searcbar_SearchForm__P4C8_",SearchFormButton:"Searcbar_SearchFormButton__xoJ5l",SearchFormButtonLabel:"Searcbar_SearchFormButtonLabel__FERoQ",SearchFormInput:"Searcbar_SearchFormInput__23e8C"}},9:function(e,a,t){e.exports={Overlay:"Modal_Overlay__2AxMb",Modal:"Modal_Modal__2WBTT"}}},[[30,1,2]]]);
//# sourceMappingURL=main.53a02ee3.chunk.js.map