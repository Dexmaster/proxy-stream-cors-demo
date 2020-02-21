const URL = require("url");
const proxy = require("http-proxy-stream");

module.exports = async (request, response) => {
    const { url, headers } = request;
    const { query } = URL.parse(url, true);
    const { link } = query;

    const matches = (new RegExp("^https?://([^/]+)", "ig")).exec(link || "");

    if (!matches || matches.length < 1) {
        response.writeHead(400);
        response.end("Bad Request");
    }

    const [origin, host] = matches;
    request.headers = {...headers, host, origin};

    proxy(request, {
        url: link,
    })
        .then(proxiedResponse => proxiedResponse.pipe(response))
        .catch(err => {
            response.writeHead(500);
            response.end(err);
        });
};