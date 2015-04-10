import superagent from 'superagent-promise';
import co from 'co';

const url = 'v1/beers.json';

export function getBeers() {
    return co(function *() {
        let response = yield superagent.get(url).end();
        return JSON.parse(response.text).beers;
    });
}
