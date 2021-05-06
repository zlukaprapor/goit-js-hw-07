
const images = [
      {
        url:
          'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
      },
      {
        url:
          'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
      },
      {
        url:
          'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
      },
    ];

const ulRef = document.querySelector('#gallery')

const galeryColection = images.map(
  image =>
    `<li> <img class="img-galery" src="${image.url}" alt="${image.alt}" width=500px
 height=100%> </li>`,
);
ulRef.insertAdjacentHTML('beforeend', galeryColection.join(''));


//минимальное оформление галереи гридами
const elem = document.querySelector('style')
const elemAddgreed = `#gallery { 
    display: grid;
    grid-template-rows: 1fr 1fr 1fr  ;
    grid-template-columns: 1fr 1fr 1fr ;
    grid-gap: 1vw;
    }`
elem.insertAdjacentHTML('beforeend', elemAddgreed);





