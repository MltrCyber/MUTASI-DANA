const { PendingXHR } = require('pending-xhr-puppeteer');
const { v4: uuidv4 } = require('uuid');

let browsers = {}; 
let pages = {};

exports.loginController = async function(req, res) {
    const {phone, pin} = req.body;
    const browser = req.browser;
    const page = req.page;
    const sessionID = req.sessionID;
    // incomplete :P 
    // sini open project kesaya 
    // https://projects.co.id/public/browse_users/view/496e26/fdciabdul

    try {
        const fCardElement = await page.waitForSelector('.f-card', {timeout: 5000});
      // incomplete :P 
    // sini open project kesaya 
    // https://projects.co.id/public/browse_users/view/496e26/fdciabdul

        res.send({ success: true, sessionID: sessionID });
    } catch (error) {
        console.log(error);
        console.log("An element did not appear in time!");
        res.send({ success: false, error });
        await browser.close();
    }
};

exports.submitOTPController = async function(req, res) {
    try {
        const { otp, sessionID } = req.body; 
        const page = pages[sessionID];  
    // incomplete :P 
    // sini open project kesaya 
    // https://projects.co.id/public/browse_users/view/496e26/fdciabdul
        res.send({ success: true });
    } catch (error) {
        console.error(error);
        res.send({ success: false, error });
    }
};

exports.getMutasiController = async function(req, res) {
    try {
        const sessionID = req.params.sessionID;
        const page = pages[sessionID];
        const browser = browsers[sessionID]; 

        if (!page || !browser) {
            res.send({ success: false, error: 'Invalid session' });
            return;
        }
    // incomplete :P 
    // sini open project kesaya 
    // https://projects.co.id/public/browse_users/view/496e26/fdciabdul
        const response = await responsePromise;
        res.send(response);
    } catch (error) {
        console.error(error);
        res.send({ success: false, error });
    }
};
