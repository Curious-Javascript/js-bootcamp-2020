const wrapper = document.querySelector('.wrapper');
const template = document
  .querySelector('template')
  .content.querySelector('article');
let currTime = new Date();

const apiKey = '156be9d7440f4a6c9ef2e997ed3a22aa';
let postsCount = '10';
let sortBy = 'publishedAt';
let search = 'javascript';

let res = fetch(
  `https://newsapi.org/v2/everything?q=${search}&sortBy=${sortBy}&pageSize=${postsCount}&apiKey=${apiKey}`,
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.articles.map((item) => {
      let elem = template.cloneNode(true);
      elem.querySelector('.article__title').textContent = item.title;
      elem.querySelector('.article__title').href = item.url;
      elem.querySelector('.image').src = item.urlToImage;
      elem.querySelector('.article__description').textContent =
        item.description;
      if (item.author) {
        elem.querySelector('.author__name').textContent = item.author;
      } else {
        elem.querySelector('.author__name').textContent = 'Unknown';
      }
      elem.querySelector('.create__time').textContent = timeAgo(
        msToDate(currTime, new Date(item.publishedAt)),
      );

      wrapper.appendChild(elem);
    });
  });

function msToDate(currentDate, postCreateDate) {
  let millis = currentDate - postCreateDate;
  let seconds = parseInt((millis / 1000) % 60),
    minutes = parseInt((millis / (1000 * 60)) % 60),
    hours = parseInt((millis / (1000 * 60 * 60)) % 24),
    days = parseInt((millis / (1000 * 60 * 60 * 24)) % 1000);

  days = days < 10 ? '0' + days : days;
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  return { days: +days, hours: +hours, minutes: +minutes, seconds: +seconds };
}

function timeAgo(obj) {
  if (obj['days'] > 0) {
    return obj['days'] === 1
      ? `${obj['days']} day ago`
      : `${obj['days']} days ago`;
  }
  if (obj['hours'] > 0) {
    return obj['hours'] === 1
      ? `${obj['hours']} hour ago`
      : `${obj['hours']} hours ago`;
  }
  if (obj['minutes'] > 0) {
    return obj['minutes'] === 1
      ? `${obj['minutes']} minute ago`
      : `${obj['minutes']} minutes ago`;
  }
  if (obj['seconds'] > 0) {
    return obj['seconds'] === 1
      ? `${obj['seconds']} second ago`
      : `${obj['seconds']} seconds ago`;
  }
}
