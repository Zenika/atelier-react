import superagent from 'superagent-promise';
import co from 'co';
import { sprintf } from 'sprintf-js';

const urlList = 'v1/beers.json';
const urlDetail = 'v1/beers/%s.json';

export function getBeers() {
  return co(function *() {
    let response = yield superagent.get(urlList, {'per_page': '100'}).end();
    return JSON.parse(response.text).beers;
  });
}

export function getBeer(id) {
  const url = sprintf(urlDetail, id);

  return co(function *() {
    let response = yield superagent.get(url).end();
    return JSON.parse(response.text);
  });
}
