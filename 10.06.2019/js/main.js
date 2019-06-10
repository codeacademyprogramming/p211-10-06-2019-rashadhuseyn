"use strict";

const load = document.getElementById("load");
const resultDiv = document.getElementById("result");
const searchWord = document.getElementById("search-word");

//DEMO API

// load.onclick = function(){

//   const http = new XMLHttpRequest();

//   http.onreadystatechange = function(){
//     if(http.readyState === 4 && http.status === 200){
//       const posts = JSON.parse(http.responseText);

//       posts.map(post => {
//         const colMd4 = document.createElement("div");
//         colMd4.classList.add("col-md-4");

//         const wrapper = document.createElement("div");
//         wrapper.classList.add("wrapper");

//         const h2 =document.createElement("h2");
//         h2.innerText = post.title;

//         const p = document.createElement("p");
//         p.innerText = post.body;

//         wrapper.appendChild(h2);
//         wrapper.appendChild(p);

//         colMd4.appendChild(wrapper);
//         result.appendChild(colMd4);

//       })

//     }
//   }

//   http.open("GET", "https://jsonplaceholder.typicode.com/posts");
//   http.send();

// }

//UNSPLASH API
load.onclick = function() {
  const search = searchWord.value.trim();
  resultDiv.innerText = "";

  if (search !== "") {
    const http = new XMLHttpRequest();

    http.onreadystatechange = function() {
      if (http.readyState === 4 && http.status === 200) {
        //successfully loaded images from unsplash
        const results = JSON.parse(http.responseText).results;

        if(results.length > 0)
        {
          results.map(result => {
            const img = document.createElement("img");
            img.setAttribute("src", result.urls.regular);
  
            resultDiv.appendChild(img);
          });
        }
        else{
          resultDiv.innerText = "No result found for search word " + search;
        }
      } else if (http.readyState === 4 && http.status !== 200) {
        console.log("error happened");
      }
    };

    http.open(
      "GET",
      "https://api.unsplash.com/search/photos?" +
        "client_id=aeb68510d3d60c873ef91d89519627f05af3f1f02a9bb700e3da93ce292212f4" +
        "&query="+search
    );
    http.send();
  }
};
