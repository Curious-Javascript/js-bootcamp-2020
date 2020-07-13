(function () {
  const content = document.querySelector('.content');
  const searchButton = document.querySelector('.search__button');
  const input = document.querySelector('.search__input');
  const footer = document.querySelector('.footer');
  const sort = document.querySelector('#sort');

  // Error Notify
  const errorWrapper = document.querySelector('.error__wrapper');
  const error = document.querySelector('.error__message');

  // Pagination
  let currentPage = document.querySelector('#current-page');
  let allPages = document.querySelector('#all-pages');

  // Auto-scroll
  let autoScroll = document.querySelector('#checkbox');

  sort.addEventListener('change', function () {
    sortBy = sort.value;
    removeArticles();
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

        currentPage.textContent = defaultPage;
        allPages.textContent = Math.ceil(data.totalResults / 10);
      })
      .catch((err) => {
        errorWrapper.style.display = 'block';
        error.textContent = err.message;

        setTimeout(function () {
          errorWrapper.style.display = 'none';
          this.sort.disabled = 'true';
          input.disabled = 'true';
          searchButton.disabled = 'true';
        }, 2000);
      });
  }

  input.addEventListener('keydown', logKey);

  function logKey(e) {
    if (e.code === 'Enter') {
      removeArticles();
      if (input.value.trim()) {
        defaultSearch = input.value.trim();
      }
      pageRender(defaultSearch, sortBy, defaultPage);
    }
  }

  searchButton.addEventListener('click', function () {
    removeArticles();
    if (input.value.trim()) {
      defaultSearch = input.value.trim();
    }
    pageRender(defaultSearch, sortBy, defaultPage++);
  });

  // ========= Pagination =============

  document
    .querySelector('.footer__next')
    .addEventListener('click', function () {
      if (defaultPage < allPages.textContent) {
        removeArticles();
        pageRender(defaultSearch, sortBy, defaultPage++);
      }
    });

  document
    .querySelector('.footer__prev')
    .addEventListener('click', function () {
      if (defaultPage > 1) {
        removeArticles();
        pageRender(defaultSearch, sortBy, --defaultPage);
      }
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

  // Remove isset Articles
  function removeArticles() {
    let articles = document.querySelectorAll('.article');
    articles.forEach((n) => n.remove());
  }

  // Auto-scroll
  autoScroll.addEventListener('change', function () {
    if (autoScroll.checked) {
      footer.style.display = 'none';

      window.addEventListener('scroll', function () {
        let positionNewsBlock =
          content.getBoundingClientRect().bottom -
          document.documentElement.clientHeight;
        if (positionNewsBlock <= -50 && autoScroll.checked) {
          pageRender(defaultSearch, sortBy, defaultPage++);
        }
      });
    } else {
      footer.style.display = 'block';
    }
  });

  pageRender(defaultSearch, sortBy, defaultPage);
})();
