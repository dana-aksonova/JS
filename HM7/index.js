const posts = [
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-1.com'
    },
    {
      img: "https://placeimg.com/400/150/nature",
      title: "Post title 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-2.com'
    },
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-3.com'
    }
  ];
//select root
let root = document.querySelector('#root');

function createMovieCard(data){
  let general = document.createElement('div');
  let  movImg = document.createElement('img');
  let body = document.createElement('div');
  let title =document.createElement('h2');
  let description = document.createElement('p');
  let date =document.createElement('p');
  let rating = document.createElement('p');
  let button = document.createElement('a');

  //attr
  movImg.setAttribute('src',data.img);
  movImg.setAttribute ('alt','movie image');
  button.setAttribute('href', data.link);
  //   let text = general.setAttribute(item.text);

  //add class
  general.classList.add ('movie')
  movImg.classList.add ('movie__image')
  body.classList.add ('movie__body')
  title.classList.add ('movie__title')
  description.classList.add ('movie__description')
  date.classList.add ('movie__date')
  rating.classList.add ('movie__rating')
  button.classList.add('button')
  //text content
  title.textContent = data.title
  description.textContent = data.text
  date.textContent = 'Released: 1972-03-14'
  rating = 'Rating: 8.6'
  button.textContent = 'Read more'
  //paste el to html
  root.append(general)
  general.append(movImg)
  general.append(button)
  general.append(body)
  body.append(title)
  body.append(description)
  body.append(date)
  body.append(rating)
}

function createCards(posts){
    posts.forEach(function (item) {
        createMovieCard(item);
    })
}

// function createCards(posts){
//     for (let el in posts){
//         createMovieCard(el);
//     }  
// }

createCards(posts);

