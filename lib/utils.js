const puppeteer = require('puppeteer-extra');

exports.startBrowser = async function() {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 100,
        args: [
            '--window-size=1366,768',
            '--disable-notifications',
            '--no-sandbox',
            '--proxy-server=socks5://localhost:1080',
        ],
        executablePath: '/usr/bin/google-chrome-stable',
    });
    return browser;
};
