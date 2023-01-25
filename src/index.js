const axios = require('axios').default;

const simtalk = (text, lang) => new Promise((resolve, reject) => {
    if (typeof text !== 'string' || !text) reject(new Error('Text must be string'));
    if (typeof lang !== 'string') reject(new Error('Lang must be string'));
    const params = new URLSearchParams();
    params.append('text', text);
    params.append('lc', lang);
    axios({
        method: 'POST',
        url: 'https://api.simsimi.vn/v2/simtalk',
        data: params,
    }).then(response => resolve(response.data)).catch(reject);
});

module.exports = {
    simsimi
}