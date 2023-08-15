async function init() {
  const response = await fetch('http://localhost:8090/https://search.naver.com/search.naver?where=nexearch&sm=top_sug.pre&fbm=1&acr=2&acq=%EC%83%81%EC%98%81&qdt=0&ie=utf8&query=%EC%83%81%EC%98%81%EC%98%81%ED%99%94', {
  headers: {
    "X-Requested-With": "XMLHttpRequest"
  }
});
const body = response.text().then(function(html){
  var html_dom = new DOMParser().parseFromString(html,'text/html');
  console.log(html_dom.body);
  var movies = html_dom.querySelectorAll(".data_area");
  console.log(movies);
  display(movies);
});
}

function display(movies) {
  const result = document.querySelector('#result');
  let string = '';
  movies.forEach((movie) => {
    var title = movie.querySelector(".title .this_text").innerText;
    var genreAndDurationAndReleaseDate = movie.querySelector(".info_group").querySelectorAll("dd");
    var genre = genreAndDurationAndReleaseDate[0].innerText;
    var duration = genreAndDurationAndReleaseDate[1].innerText;
    var releaseDate = movie.querySelector(".info_group dt+dd").innerText;
    var rating = movie.querySelector(".num").innerText;
    var actorElements = movie.querySelectorAll(".info_group")[2].querySelectorAll("dd span");
    var actor = Array.from(actorElements).map(element => element.innerText).join(", ");

    var poster = movie.querySelector(".img_box img").src;
    string += `<table><tr><th>영화</th><td>${title}</td></tr>
                <tr><th>장르</th><td>${genre}</td></tr>
                <tr><th>상영시간</th><td>${duration}</td></tr>
                <tr><th>개봉일</th><td>${releaseDate}</td></tr>
                <tr><th>평점</th><td>${rating}</td></tr>
                <tr><th>출연</th><td>${actor}</td></tr>
                <tr><th>표지</th><td><img width="178" height="200" src="${poster}"></td></tr></table>`;
  });                     
  result.innerHTML = string;
}

init();
