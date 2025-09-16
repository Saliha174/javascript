let movies = document.getElementById("movies-results");
// movies.style.display = "flex";
// movies.style.flexDirection = "column"
// movies.style.width = "100px";
let img;




// moviesDetails.appendChild(img);


    const URL ="https://api.themoviedb.org/3/trending/movie/week?api_key=682e092936d2a61a00df86a83d88f574";
      
    function movie(){


            fetch(URL)
                .then((response)=>{
                    console.log(response);
                    return response.json();

                }).then((data)=>{
                    console.log(data);
                    // console.log(data.results[0].poster_path);

                    // const a =document.createElement("a");
                    // console.log(a);                    
                    // const img = document.createElement("img");
                    // a.appendChild(img)
                    // movies.appendChild(a);

                    // img.src = `https://image.tmdb.org/t/p/w500${data.results[0].poster_path}`;
                    for ( let i = 0 ; i< data.results.length ; ++i){
                        const a =document.createElement("a");
                        a.setAttribute("href","movie.html");
                        a.setAttribute("data-img",`https://image.tmdb.org/t/p/w500${data.results[i].poster_path}`);
                        a.className = "clickable";
                        const img = document.createElement("img");
                        img.id=`result${i}`;
                        const h4 = document.createElement("h4");
                        movies.appendChild(h4);
                        a.appendChild(img);
                        movies.appendChild(a);
                        h4.innerHTML =data.results[i].title;
                        img.src = `https://image.tmdb.org/t/p/w500${data.results[i].poster_path}`;
                        

                    }
                    // let moviesDetails=document.getElementById("movie-details");
                    // const images = document.querySelector(".clickable");
                    // images.forEach(image => {
                    //     moviesDetails.appendChild(image);
                    //     const imgSrc=image.getAttribute("data-img");
                    //     window.location.href=`images.html?img=${encodeURIComponent(imgSrc)}`
                    // });
                        

                    


                    
                    
                   

                })
                

                
            }   
        movie(); 
        
        
// movies.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     movie ();        
// });



