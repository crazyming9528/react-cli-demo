import {FETCH_POST} from "./types";

// export function fetchPosts(){
//
//     console.log("action")
//
//     return function (dispatch) {
//
//         fetch("https://jsonplaceholder.typicode.com/posts")
//             .then(res => res.json())
//             .then(posts => dispatch({
//                 type:FETCH_POST,
//                 payloadL:posts
//             }));
//
//     }
//
// }



//es6 简洁写法
export const  fetchPosts =()=> dispatch =>{
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(posts => dispatch({
                type:FETCH_POST,
                payload:posts
            }));
};
