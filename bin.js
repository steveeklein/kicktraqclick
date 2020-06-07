const request = require('request');
const moment = require('moment');
const package = require('./package.json');
const cron = require('node-cron');

const link = 'https://www.kickstarter.com/projects/228767892/open-ocean/?ref=kicktraq';

const clickIt = () => {
  const intervalInMilliseconds = 86400000;//24 hours
  request(link, function (error, response, body) {
    if (error) {
      console.error(new Error(error));
    } else {
      console.log(` ******************************************`, `\n`,
        `*    Thanks for using ${package.name}!     *`, `\n`,
        `*                                        *`, `\n`,
        `******************************************`, `\n`,
        `I clicked kicktraq for: `, `\n`, `${link} `, `\n`, `${moment().format('MMMM Do YYYY')} at ${moment().format('h:mm:ss a')}`, '\n\n',
        
        `I'll click again:`, `\n`,
        `${moment().add('hours',24).format('MMMM Do YYYY')} at ${moment().format('h:mm:ss a')}`, '\n\n');
    }
  });
  setTimeout(clickIt, intervalInMilliseconds);
}

clickIt();