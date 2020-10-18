(function () {
  // --- Helper functions
  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this, args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  // --- Main
  document.addEventListener('DOMContentLoaded', () => {
    [...document.getElementsByClassName('dropdown__btn')].forEach(button => {
      button.addEventListener('click', event => button.nextElementSibling.classList.toggle('dropdown__list--inactive'));
    });

    [...document.getElementsByClassName('article__share-btn')].forEach(button => {
      button.addEventListener('click', event => {
        button.classList.toggle('article__share-btn--hidden');
        button.nextElementSibling.classList.toggle('article__shared--hidden');
      });
    });

    [...document.getElementsByClassName('user__report')].forEach(button => {
      button.addEventListener('click', event => {
        document.querySelector('.modal--report').classList.toggle('modal--hidden');
      });
    });

    [...document.getElementsByClassName('user__block')].forEach(button => {
      button.addEventListener('click', event => {
        document.querySelector('.modal--block').classList.toggle('modal--hidden');
      });
    });

    document.querySelector('.btn-add').addEventListener('click', event => {
      document.querySelector('.modal--add-article').classList.toggle('modal--hidden');
    });

    [...document.getElementsByClassName('modal__close')].forEach(button => {
      button.addEventListener('click', event => {
        button.closest('.modal').classList.toggle('modal--hidden');
      });
    });
  });

  // --- Events
  window.addEventListener('load', () => {
    document.body.classList.remove('loading');
    document.body.classList.add('loaded');
  });
})();
