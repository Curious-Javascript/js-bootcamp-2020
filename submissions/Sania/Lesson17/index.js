(function () {
  const input = document.querySelector('.search__input');
  const paginationClass = document.querySelector('.pagination').classList;
  const checkBox = document.querySelector('.search__check');
  const newsBlock = document.querySelector('.news');
  let pageCounter = 1;
  let sortBy = "publishedAt";

  const fetchNews = (topic) => {
    let url = `http://newsapi.org/v2/everything?q=${topic}&sortBy=${sortBy}&pageSize=10&page=${pageCounter}&apiKey=e694d9cdc2964ac8bd46732096b96936`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.status === 'error') {
          return errorMessage(data)
        }
        checkBox.checked === true ? renderNewsWithScroll(data) : renderNews(data)
      });
  };

  const selectValue = () => {
    const selectNode = document.querySelector('.search__select');
    const selectValue = selectNode.selectedIndex;
    sortBy = selectNode.options[selectValue].text;
    newsBlock.innerHTML = '';
    fetchNews(input.value);
  };

  const errorMessage = (data) => {
    const errorNode = document.querySelector('.alert');
    const errorMessage = data.message;
    errorNode.innerHTML = errorMessage;
    errorNode.classList.add('alert--active');
    setTimeout(() => {
      errorNode.classList.remove('alert--active');
    }, 3000);
  };

  const searchNews = () => {
    newsBlock.innerHTML = '';
    pageCounter = 1;
    fetchNews(input.value);
  };

  const lazyLoading = () => {
    document.getElementsByTagName('body')[0].onscroll = function () {
      let positionNewsBlock = newsBlock.getBoundingClientRect().bottom - document.documentElement?.clientHeight;
      if (positionNewsBlock <= 0 && checkBox.checked === true) {
        pageCounter++;
        fetchNews(input.value);
      }
    };
  };

  const toggleLazyLoading = () => {
    checkBox.checked === true ? paginationClass.remove('pagination--active') : paginationClass.add('pagination--active');
    lazyLoading()
  };

  const renderPagination = (data) => {
    const paginationNode = document.querySelector('.pagination');
    paginationNode.innerHTML = ``;
    const totalPage = Math.round(data.totalResults / 10);
    for (let counter = 1; totalPage > 10 ? counter <= 10 : counter <= totalPage; counter++) {
      const newButton = document.createElement('button');
      paginationNode.appendChild(newButton);
      newButton.textContent = counter;
      newButton.className = "pagination__button";
      newButton.onclick = function () {
        pageCounter = counter;
        fetchNews(input.value)
      }
    }
    document.getElementsByClassName('pagination__button')[pageCounter -1].classList.add('pagination__button--active');
  };

  const getPublishDate = (date) => {
    const localDate = new Date();
    const publishDate = new Date(date);

    if (localDate.getFullYear() < publishDate.getFullYear()) {
      const differenceYear = publishDate.getFullYear() - localDate.getFullYear();
      return `Published ${differenceYear > 1 ? `${differenceYear} years ago` : `${differenceYear} year ago`}`
    } else if (localDate.getMonth() > publishDate.getMonth()) {
      const differenceMonth = localDate.getMonth() - publishDate.getMonth();
      return `Published ${differenceMonth > 1 ? `${differenceMonth} months ago` : `${differenceMonth} month ago`}`
    } else if (localDate.getDate() > publishDate.getDate()) {
      const differenceDay = localDate.getDate() - publishDate.getDate();
      return `Published ${differenceDay > 1 ? `${differenceDay} days ago` : `${differenceDay} day ago`}`
    } else if (localDate.getHours() > publishDate.getHours()) {
      const differenceHour = localDate.getHours() - publishDate.getHours();
      return `Published ${differenceHour > 1 ? `${differenceHour} hours ago` : `${differenceHour} hour ago`}`
    } else if (localDate.getMinutes() > publishDate.getMinutes()) {
      const differenceMinutes = localDate.getMinutes() - publishDate.getMinutes();
      return `Published ${differenceMinutes > 1 ? `${differenceMinutes} minutes ago` : `${differenceMinutes} minute ago`}`
    } else {
      return 'Published less than a minute'
    }
  };

  const renderImage = (image) => {
    return image ? `<img class="news__image" src="${image}" alt="img">` : `<i class="news__image news__image--default">Icon not found</i>`
  };

  const mapNews = (arr) => arr.map((data) => `<div class="news__item">
                 <a class="news__link" href=${data.url} target="_blank">
                     ${data.title}
                 </a>
                 <div class="news__inner-wrap">
                     ${renderImage(data.urlToImage)}
                     <div class="news__description">
                         ${data.description}
                     </div>
                 </div>
                 <div class="news__author">
                     Author: ${data.author ? data.author : 'Unknown'}
                 </div>
                 <div class="news__data">
                     ${getPublishDate(data.publishedAt)}
                 </div>
             </div>`
  );

  const renderNews = (data) => {
    if (data) {
      paginationClass.add('pagination--active');
      renderPagination(data);
    }
    newsBlock.innerHTML = mapNews(data.articles).join('');
  };

  const renderNewsWithScroll = (data) => {
    newsBlock.insertAdjacentHTML('beforeend', mapNews(data.articles).join(''));
  };
  window._ = {
    searchNews,
    toggleLazyLoading,
    selectValue,
  };
})();

