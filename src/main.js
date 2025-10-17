// import { getImagesByQuery } from "./js/pixabay-api.js";
// import {
//   createGallery,
//   clearGallery,
//   showLoader,
//   hideLoader,
// } from "./js/render-functions.js";

// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";

// const form = document.querySelector(".form");
// const input = form.querySelector("input[name='search-text']");

// const errorToastOptions = {
//     position: "topRight",
//     backgroundColor: '#EF4040',
//     messageColor: '#FFFFFF',
//     iconUrl: './img/error-pic.svg',
//     iconColor: '#FFFFFF',
//     progressBar: true,
//     progressBarColor: '#B51B1B',
//     close: true,
//     timeout: 5000,
//     pauseOnHover: true,
//     width: '432px',
//     height: '88px',
//     padding: '20px',
//     borderRadius: '4px',
//     class: 'custom-error-toast',
// };

// form.addEventListener("submit", onSearch);

// async function onSearch(event) {
//   event.preventDefault();

//   const query = input.value.trim();
//   if (!query) {
//     iziToast.warning({
//       message: "Please enter a search term!",
//       position: "topRight",
//     });
//     return;
//   }

//   clearGallery();
//   showLoader();

//   try {
//     const data = await getImagesByQuery(query);

//     if (!data.hits || data.hits.length === 0) {
//       iziToast.error({
//         message: "Sorry, there are no images matching your search query. Please try again!",
//         ...errorToastOptions,
//       });
//       return;
//     }

//     createGallery(data.hits);
//   } catch (error) {
//     iziToast.error({
//       message: "Something went wrong. Please try again later.",
//       ...errorToastOptions,
//     });
//   } finally {
//     hideLoader();
//     input.value = "";
//   }
// }

import { getImagesByQuery } from "./js/pixabay-api.js";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from "./js/render-functions.js";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const input = form.querySelector("input[name='search-text']");

const errorToastOptions = {
    position: "topRight",
    backgroundColor: '#EF4040',
    messageColor: '#FFFFFF',
    iconUrl: './img/error-pic.svg',
    iconColor: '#FFFFFF',
    progressBar: true,
    progressBarColor: '#B51B1B',
    close: true,
    timeout: 5000,
    pauseOnHover: true,
    width: '432px',
    height: '88px',
    padding: '20px',
    borderRadius: '4px',
    class: 'custom-error-toast',
    // Изменение: Комментарий о том, где стилизуется иконка закрытия и "дорожка" прогресс-бара.
    // Стиль иконки закрытия (error-close.svg) и "дорожки" прогресс-бара (border-bottom тоста)
    // задаются в файле styles.css для класса .custom-error-toast и его дочерних элементов.
};

form.addEventListener("submit", onSearch);

async function onSearch(event) {
  event.preventDefault();

  const query = input.value.trim();
  if (!query) {
    iziToast.warning({
      message: "Please enter a search term!",
      position: "topRight",
    });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);

    if (!data.hits || data.hits.length === 0) {
      iziToast.error({
        message: "Sorry, there are no images matching your search query. Please try again!",
        ...errorToastOptions,
      });
      return;
    }

    createGallery(data.hits);
  } catch (error) {
    iziToast.error({
      message: "Something went wrong. Please try again later.",
      ...errorToastOptions,
    });
  } finally {
    hideLoader();
    input.value = "";
  }
}