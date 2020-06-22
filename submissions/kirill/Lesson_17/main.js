(function () {
  const wrapper = document.querySelector('.wrapper');
  const button = document.querySelector('.wrapper__button');
  const template = document
    .querySelector('template')
    .content.querySelector('article');

  const API_KEY = '156be9d7440f4a6c9ef2e997ed3a22aa';
  const postsCount = '10';
  const sortBy = 'publishedAt';
  const defaultSearch = 'javascript';
  let defaultPage = 1;

  function pageRender(search, page) {
    fetch(
      `https://newsapi.org/v2/everything?q=${search}&sortBy=${sortBy}&page=${page}&pageSize=${postsCount}&apiKey=${API_KEY}`,
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

          wrapper.appendChild(elem);
        });
      });
  }

  button.addEventListener('click', function () {
    pageRender(defaultSearch, defaultPage++);
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

  pageRender(defaultSearch, defaultPage);
})();
