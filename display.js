(function () {
    $.getJSON("http://amodar.github.io/movies/filteredMovies.json", function (movie) {
        var limitMovies = [];
        var totalMovies = 15;
        
        for (var i = 0; i < totalMovies; i++) {
            limitMovies.push(movie[i]);
        }
        
        var domTitle = document.getElementById('title');
        var domGenre = document.getElementById('genre');
        var domScore = document.getElementById('score');
        var domImdb = document.getElementById('imdbID');
        var domUL = document.getElementById('ul_movie');
        
        
        for ( i = 0; i < limitMovies.length; i++ ) {
            var addMovies = '<li class="li_movie" id="' + i + '"><img src="' 
                            + limitMovies[i].Poster + '"/></li>';
            
            domUL.innerHTML += addMovies;
        }
        
        i = 0;
        
        var getDescription = function (i) {
            domTitle.innerHTML = "Title: " + limitMovies[i].Title;
            domGenre.innerHTML = "Genre: " + limitMovies[i].Genre;
            domScore.innerHTML = "Rating: " + limitMovies[i].imdbRating;
            domImdb.innerHTML  = 'Link: <a target="_blank" href="http://www.imdb.com/title/' 
                                 + limitMovies[i].imdbID + '/">Imdb</a>';
        }

        document.getElementById("0").classList.toggle("active");
        getDescription(i);
        
        
        window.onkeyup = function (e) {

            if (e.keyCode === 37) {
                //left arrow pressed
                
                i = i < 1 ? 0 : --i;
                $(".li_movie").removeClass("active");
                document.getElementById(i).classList.toggle("active");
                getDescription(i);
                document.getElementById('top').scrollLeft -= 218;
                //console.log(i);
            }
            if (e.keyCode === 39) {
                //right arrow pressed
                
                i >= (limitMovies.length - 1) ? limitMovies.length : ++i;
                $(".li_movie").removeClass("active");
                document.getElementById(i).classList.toggle("active");  
                getDescription(i);
                document.getElementById('top').scrollLeft += 218;
                
                //console.log(i);
                
            }
    
            /* adding movies
            if (e.keyCode === 65) {
                //a key pressed
                ++i;
                limitMovies.push(movie[i]);
                document.getElementById("ul_movie").innerHTML += addMovie;
            }
            */
        };

    });
}());
