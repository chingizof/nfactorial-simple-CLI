const conf = new (require('conf'))()
const axios = require('axios');

function btc () {
    let response = null;
    new Promise(async (resolve, reject) => {
    try {
        response = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/price-performance-stats/latest?id=1', {
        headers: {
            'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c',
        },
        });
    } catch(ex) {
        response = null;
        // error
        console.log("#ERROR")
        console.log(ex);
        reject(ex);
    }
    if (response) {
        // success
        const json = response.data;
        console.log("Current BTC price is :")
        console.log(json.data['1'].quote.USD.open)
        resolve();
    }
    });
}


module.exports = btc