(function () {
  const content = document.querySelector('.content');
  const button = document.querySelector('.search__button');
  const input = document.querySelector('.search__input');
  const pages = document.querySelectorAll('.footer__item');
  const sort = document.querySelector('#sort');
  const errorWrapper = document.querySelector('.error__wrapper');
  const error = document.querySelector('.error__message');

  for (let i = 0; i < pages.length; i++) {
    pages[i].addEventListener('click', function () {
      let articles = document.querySelectorAll('.article');
      articles.forEach((n) => n.remove());
      pageRender(defaultSearch, sortBy, pages[i].innerText);
    });
  }

  sort.addEventListener('change', function () {
    sortBy = sort.value;
    let articles = document.querySelectorAll('.article');
    articles.forEach((n) => n.remove());
    pageRender(defaultSearch, sortBy, defaultPage);
  });

  const template = document
    .querySelector('template')
    .content.querySelector('article');

  const API_KEY = '156be9d7440f4a6c9ef2e997ed3a22aa';
  const postsCount = '10';
  let sortBy = 'publishedAt';
  let defaultSearch = 'javascript';
  let defaultPage = 1;

  function pageRender(search, sort, page) {
    fetch(
      `https://newsapi.org/v2/everything?q=${search}&sortBy=${sort}&page=${page}&pageSize=${postsCount}&apiKey=${API_KEY}`,
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.articles.forEach((item) => {
          let elem = template.cloneNode(true);
          elem.querySelector('.article__title').textContent = item.title;
          elem.querySelector('.article__title').href = item.url;
          item.urlToImage
            ? (elem.querySelector('.image').src = item.urlToImage)
            : (elem.querySelector('.image').src =
                'https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png');
          elem.querySelector('.article__description').textContent =
            item.description;
          item.author
            ? (elem.querySelector('.author__name').textContent = item.author)
            : (elem.querySelector('.author__name').textContent = 'Unknown');
          elem.querySelector('.create__time').textContent = publishDate(
            item.publishedAt,
          );

          content.appendChild(elem);
        });
      })
      .catch((err) => {
        errorWrapper.style.display = 'block';
        error.textContent = err.message;

        setTimeout(function () {
          errorWrapper.style.display = 'none';
          this.sort.disabled = 'true';
          input.disabled = 'true';
          button.disabled = 'true';
        }, 2000);
      });
  }

  input.addEventListener('keydown', logKey);
  function logKey(e) {
    if (e.code === 'Enter') {
      let articles = document.querySelectorAll('.article');
      articles.forEach((n) => n.remove());
      if (input.value.trim()) {
        defaultSearch = input.value.trim();
      }
      pageRender(defaultSearch, sortBy, defaultPage);
    }
  }

  button.addEventListener('click', function () {
    let articles = document.querySelectorAll('.article');
    articles.forEach((n) => n.remove());
    if (input.value.trim()) {
      defaultSearch = input.value.trim();
    }
    pageRender(defaultSearch, sortBy, defaultPage++);
  });

  function publishDate(date) {
    const currentDate = new Date();
    const publishDate = new Date(date);
    if (currentDate.getFullYear() > publishDate.getFullYear()) {
      const differenceYear =
        publishDate.getFullYear() - currentDate.getFullYear();
      return `${
        differenceYear > 1
          ? `${differenceYear} years ago`
          : `${differenceYear} year ago`
      }`;
    } else if (currentDate.getMonth() > publishDate.getMonth()) {
      const differenceMonth = currentDate.getMonth() - publishDate.getMonth();
      return `${
        differenceMonth > 1
          ? `${differenceMonth} months ago`
          : `${differenceMonth} month ago`
      }`;
    } else if (currentDate.getDate() > publishDate.getDate()) {
      const differenceDay = currentDate.getDate() - publishDate.getDate();
      return `${
        differenceDay > 1
          ? `${differenceDay} days ago`
          : `${differenceDay} day ago`
      }`;
    } else if (currentDate.getHours() > publishDate.getHours()) {
      const differenceHour = currentDate.getHours() - publishDate.getHours();
      return `${
        differenceHour > 1
          ? `${differenceHour} hours ago`
          : `${differenceHour} hour ago`
      }`;
    } else if (currentDate.getMinutes() > publishDate.getMinutes()) {
      const differenceMinutes =
        currentDate.getMinutes() - publishDate.getMinutes();
      return `${
        differenceMinutes > 1
          ? `${differenceMinutes} minutes ago`
          : `${differenceMinutes} minute ago`
      }`;
    } else {
      return 'Published less than a minute';
    }
  }

  pageRender(defaultSearch, sortBy, defaultPage);
})();
