import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body>
    <div className="error__wrapper">
      <div className="error">
        <div className="error__img">
          <img src="https://img.icons8.com/cotton/2x/error--v1.png" alt=""/>
        </div>
        <div className="error__info">
          <div className="error__message"/>
        </div>
      </div>
    </div>
    <div className="wrapper">
      <header className="header">
        <div className="wrapper__search">
          <input className="search__input" type="text" placeholder="javascript"/>
          <button className="search__button" type="button">Search</button>
        </div>
        <div className="wrapper__sort">
          <label>
            <select name="sort" id="sort">
              <option value="publishedAt" selected="">New</option>
              <option value="popularity">Top</option>
              <option value="relevancy">More closely</option>
            </select>
          </label>
        </div>
        <div className="wrapper__pagination">
          <label htmlFor="checkbox">Auto-scroll</label>
          <input id="checkbox" type="checkbox"/>
        </div>
      </header>

      <div className="content" id="content">
        <article className="article">
          <a className="article__title" href="https://www.poynter.org/?p=802354">What’s the infection rate where I
            live? How many people are in hospitals? What is there even to do? These projects offer answers.</a>
          <div className="article__inner-content">
            <div className="article__image">
              <img className="image" src="https://www.poynter.org/wp-content/uploads/2020/07/pjimage-7.jpg"
                   alt="No Image"/>
            </div>
            <div className="article__description">This piece originally appeared in Local Edition, our newsletter
              devoted to the telling stories of local journalists. Want to be part of the conversation? You can
              subscribe here.&nbsp; Every morning, I open up the Tampa Bay Times on my phone and scan the headlines …
            </div>
          </div>
          <div className="article__author">Author: <span className="author__name">Kristen Hare</span></div>
          <div className="article__create-at">published <span className="create__time">25 minutes ago</span></div>
        </article>
        <article className="article">
          <a className="article__title" href="https://sensorstechforum.com/teamv-virus/">TeamV Virus (.teamV File)
            Dharma Removal Guide</a>
          <div className="article__inner-content">
            <div className="article__image">
              <img className="image"
                   src="https://sensorstechforum.com/wp-content/uploads/2020/07/Team-v-virus-remove-restore-files-1024x384.png"
                   alt="No Image"/>
            </div>
            <div className="article__description">All your files have been encrypted! All your files have been
              encrypted due to a security problem with your PC. If you want to restore them, write us to the e-mail
              teamvv@protonmail.com Write this ID in the title of your message XXXXXX In case of no answer in …
            </div>
          </div>
          <div className="article__author">Author: <span className="author__name">Ventsislav Krastev</span></div>
          <div className="article__create-at">published <span className="create__time">39 minutes ago</span></div>
        </article>
        <article className="article">
          <a className="article__title"
             href="https://www.rosehosting.com/blog/how-to-speed-up-wordpress-and-boost-performance-on-an-ubuntu-20-04-vps/">How
            to Speed Up WordPress and Boost Performance on an Ubuntu 20.04 VPS</a>
          <div className="article__inner-content">
            <div className="article__image">
              <img className="image"
                   src="https://www.rosehosting.com/blog/wp-content/uploads/2020/06/how-to-speed-up-wordpress-and-boost-performance-on-an-ubuntu20.04-vps.jpg"
                   alt="No Image"/>
            </div>
            <div className="article__description">WordPress is one of the most popular open-source content management
              systems around the globe. It's one of the easiest blogging platforms to get started with, as evidenced
              by over 35.2% of all websites being powered by WordPress.If you are already a web master…
            </div>
          </div>
          <div className="article__author">Author: <span className="author__name">rosehosting.com</span></div>
          <div className="article__create-at">published <span className="create__time">1 hour ago</span></div>
        </article>
        <article className="article">
          <a className="article__title" href="https://github.com/jaxcore/bumblebee">Show HN: Bumblebee – a JavaScript
            voice app framework based on DeepSpeech</a>
          <div className="article__inner-content">
            <div className="article__image">
              <img className="image" src="https://avatars1.githubusercontent.com/u/496757?s=400&amp;v=4"
                   alt="No Image"/>
            </div>
            <div className="article__description">Article URL: https://github.com/jaxcore/bumblebee
              Comments URL: https://news.ycombinator.com/item?id=23780177
              Points: 1
              # Comments: 0
            </div>
          </div>
          <div className="article__author">Author: <span className="author__name">dsteinman</span></div>
          <div className="article__create-at">published <span className="create__time">1 hour ago</span></div>
        </article>
        <article className="article">
          <a className="article__title"
             href="https://myprivacy.dpgmedia.be/?siteKey=6OfBU0sZ5RFXpOOK&amp;callbackUrl=https://www.demorgen.be/privacy-wall/accept?redirectUri=%2fnieuws%2flive-coronavirus-slechts-3-regio-s-krijgen-code-rood-op-de-coronakaart%7eb638c04f%2f">Live
            - Coronavirus: Slechts 3 regio’s krijgen code rood op de coronakaart</a>
          <div className="article__inner-content">
            <div className="article__image">
              <img className="image"
                   src="https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png"
                   alt="No Image"/>
            </div>
            <div className="article__description">Volg hieronder de laatste ontwikkelingen over het coronavirus in
              onze liveblog. Elke ochtend vindt u de recentste Belgische cijfers op deze pagina.
            </div>
          </div>
          <div className="article__author">Author: <span className="author__name">Unknown</span></div>
          <div className="article__create-at">published <span className="create__time">1 hour ago</span></div>
        </article>
        <article className="article">
          <a className="article__title"
             href="https://myprivacy.dpgmedia.be/?siteKey=6OfBU0sZ5RFXpOOK&amp;callbackUrl=https://www.demorgen.be/privacy-wall/accept?redirectUri=%2fnieuws%2ftrump-wil-gewoon-dat-alles-weer-normaal-wordt-ook-al-wijst-alles-op-het-tegenovergestelde%7eb6c5456e%2f">‘Trump
            wil gewoon dat alles weer normaal wordt, ook al wijst alles op het tegenovergestelde’</a>
          <div className="article__inner-content">
            <div className="article__image">
              <img className="image"
                   src="https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png"
                   alt="No Image"/>
            </div>
            <div className="article__description">De VS worden zwaar getroffen door het coronavirus. Waar eerst de
              oostkust werd geraakt, woedt het virus nu vooral in Republikeinse staten als Florida en Texas. Wat
              betekent dit voor Trumps herverkiezingskansen? We bellen met correspondent Michael Persson.
            </div>
          </div>
          <div className="article__author">Author: <span className="author__name">Unknown</span></div>
          <div className="article__create-at">published <span className="create__time">1 hour ago</span></div>
        </article>
        <article className="article">
          <a className="article__title" href="https://blog.jetbrains.com/webstorm/2020/07/webstorm-2020-2-beta/">WebStorm
            2020.2 Beta: Start Debugging from Run and Terminal Tool Windows</a>
          <div className="article__inner-content">
            <div className="article__image">
              <img className="image"
                   src="https://blog.jetbrains.com/wp-content/uploads/2020/07/featured-webstorm-2020-2-beta.png"
                   alt="No Image"/>
            </div>
            <div className="article__description">WebStorm 2020.2 Beta is now available! To catch up on what has
              already been implemented in v2020.2, check out our previous EAP blog posts. The Toolbox App is the
              easiest way to get the EAP builds and keep your stable WebStorm version and any EAP versions up t…
            </div>
          </div>
          <div className="article__author">Author: <span className="author__name">Ekaterina Ryabukha</span></div>
          <div className="article__create-at">published <span className="create__time">1 hour ago</span></div>
        </article>
        <article className="article">
          <a className="article__title"
             href="https://www.welivesecurity.com/2020/07/09/more-evil-deep-look-evilnum-toolset/">More evil: A deep
            look at Evilnum and its toolset</a>
          <div className="article__inner-content">
            <div className="article__image">
              <img className="image"
                   src="https://www.welivesecurity.com/wp-content/uploads/2020/07/Evilnum-malware-APT-group-analysis.jpg"
                   alt="No Image"/>
            </div>
            <div className="article__description">ESET has analyzed the operations of Evilnum, the APT group behind
              the Evilnum malware previously seen in attacks against financial technology companies. While said
              malware has been seen in the wild since at least 2018 and documented previously, little has bee…
            </div>
          </div>
          <div className="article__author">Author: <span className="author__name">Matías Porolli</span></div>
          <div className="article__create-at">published <span className="create__time">1 hour ago</span></div>
        </article>
        <article className="article">
          <a className="article__title"
             href="https://blogs.sap.com/2020/07/09/learn-javascript-as-abap-developer-part-4/">Learn JavaScript as
            ABAP developer Part 4</a>
          <div className="article__inner-content">
            <div className="article__image">
              <img className="image"
                   src="https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png"
                   alt="No Image"/>
            </div>
            <div className="article__description">Variable declaration Function declaration Concurrency with Promises
              and async functions Encapsulation with modules Encapsulation CommonJS modules or just modules
              encapsulate functions and variables like a ABAP function group. They can be used for node.js appl…
            </div>
          </div>
          <div className="article__author">Author: <span className="author__name">Johannes Gerbershagen</span></div>
          <div className="article__create-at">published <span className="create__time">1 hour ago</span></div>
        </article>
        <article className="article">
          <a className="article__title"
             href="https://qvault.io/2020/07/01/running-go-in-the-browser-with-web-assembly-wasm/">Show HN: Building a
            Go Playground with WASM</a>
          <div className="article__inner-content">
            <div className="article__image">
              {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
              <img className="image" src="https://qvault.io/wp-content/uploads/2020/07/maxresdefault.jpg"
                   alt="No Image"/>
            </div>
            <div className="article__description">If you are familiar with the Go Playground, then you know how
              convenient it is to be able to have a Go scratchpad in the browser. Want to show someone a code snippet?
              Want to quickly test some syntax? Browser-based code pads a helpful. On that note, I created…
            </div>
          </div>
          <div className="article__author">Author: <span className="author__name">lanecwagner</span></div>
          <div className="article__create-at">published <span className="create__time">1 hour ago</span></div>
        </article>
      </div>
      <footer className="footer">
        <ul className="footer__list">
          <li className="footer__item">
            <button className="button-1">1</button>
          </li>
          <li className="footer__item">
            <button className="button-2">2</button>
          </li>
          <li className="footer__item">
            <button className="button-3">3</button>
          </li>
          <li className="footer__item">
            <button className="button-4">4</button>
          </li>
          <li className="footer__item">
            <button className="button-5">5</button>
          </li>
          <li className="footer__item">
            <button className="button-6">6</button>
          </li>
          <li className="footer__item">
            <button className="button-7">7</button>
          </li>
          <li className="footer__item">
            <button className="button-8">8</button>
          </li>
          <li className="footer__item">
            <button className="button-9">9</button>
          </li>
          <li className="footer__item">
            <button className="button-10">10</button>
          </li>
        </ul>
      </footer>
    </div>


    <template>
      <article className="article">
        <a className="article__title"/>
        <div className="article__inner-content">
          <div className="article__image">
            <img className="image" src="" alt="No Image"/>
          </div>
          <div className="article__description"/>
        </div>
        <div className="article__author">Author: <span className="author__name"/></div>
        <div className="article__create-at">published <span className="create__time"/></div>
      </article>
    </template>


    </body>
  );
}

export default App;
