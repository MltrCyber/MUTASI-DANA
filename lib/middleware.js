const { v4: uuidv4 } = require('uuid');

let browsers = {}; 
let pages = {};

exports.browserMiddleware = async function(req, res, next) {
    const browser = await startBrowser();
    const page = await browser.newPage();
    let sessionID = uuidv4();

    pages[sessionID] = page;
    browsers[sessionID] = browser;

    req.sessionID = sessionID;
    req.page = page;
    req.browser = browser;

    next();
};
