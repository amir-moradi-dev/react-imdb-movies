import{b as f,i as m,c as M,r as v,S as L,j as e,F as x,a,e as C,f as c}from"./index-1f192a01.js";import{M as I,a as b}from"./index-39e1b743.js";const g="_movieMoreDetails_1opc3_1",u={movieMoreDetails:g};var s={},j=m;Object.defineProperty(s,"__esModule",{value:!0});var _=s.default=void 0,R=j(f()),S=M,$=(0,R.default)((0,S.jsx)("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),"FavoriteBorder");_=s.default=$;var d={},y=m;Object.defineProperty(d,"__esModule",{value:!0});var h=d.default=void 0,z=y(f()),q=M,T=(0,z.default)((0,q.jsx)("path",{d:"m18 4 2 3h-3l-2-3h-2l2 3h-3l-2-3H8l2 3H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4zm-6.75 11.25L10 18l-1.25-2.75L6 14l2.75-1.25L10 10l1.25 2.75L14 14l-2.75 1.25zm5.69-3.31L16 14l-.94-2.06L13 11l2.06-.94L16 8l.94 2.06L19 11l-2.06.94z"}),"MovieFilter");h=d.default=T;function H(r){const{favoriteMovies:t,setFavoriteMovies:l}=v.useContext(L),p=t.find(i=>i.imdbID===r.imdbID);v.useEffect(()=>{},[t,l]);function D(){return t.find(o=>o.imdbID===r.imdbID)===void 0?a("p",{onClick:()=>n(1),children:[e(c,{style:{color:"red"}})," Add To Favorites"]}):a("p",{onClick:()=>n(-1),children:[e(_,{style:{color:"red"}})," Remove From Favorites"]})}function n(i){if(i===-1){const o=t.filter(F=>F.imdbID!==r.imdbID);l(o);return}if(i===1){const o=[...t,r];l(o);return}return new Error("Some Thing Went Wrong")}return e(x,{children:a(I,{children:[e(b,{movie:r}),a("div",{className:u.movieMoreDetails,children:[a(C,{to:"/movie-detail/"+r.imdbID,children:[e(h,{style:{color:"darkgreen"}}),"Go To Details"]}),D()]}),e("div",{className:u.favoriteMovie,children:p&&e(c,{style:{color:"red"},fontSize:"large"})})]})})}export{H as M};
