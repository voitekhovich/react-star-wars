import { HTTP, HTTPS } from "../constants/api";

/**
 * Изменяет URL с HTTP на HTTPS
 * @param {String} url - url для изменения
 * @returns {String} - url с HTTPS
 */
export const changeHTTP = url => {
  const result = url? url.replace(HTTP, HTTPS) : url;
  return result;
}

/**
 * Отправляет запрос Fetch
 * @param {String} url - url для запроса
 * @returns {Promise} - Promise с результатом запроса
 */
export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.error("Не удалось выполнить запрос.\n", error.message);
    return false;
  }
};

// (async () => {
//   const body = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);
//   console.log(body);
// })();
