const request = require('request');
const moment = require('moment');
const package = require('./package.json');
const cron = require('node-cron');

const link = 'https://www.kickstarter.com/projects/228767892/open-ocean/?ref=kicktraq';

const clickIt = () => {
  console.log(` ******************************************`, `\n`,
        `*    Thanks for using ${package.name}!     *`, `\n`,
        `*                                        *`, `\n`,
        `******************************************`, `\n`)
  request(link, function (error, response, body) {
    if (error) {
      console.error(new Error(error));
    } else {
      console.log(
        `I clicked kicktraq for: `, `\n`, `${link} `, `\n`, `${moment().format('MMMM Do YYYY')} at ${moment().format('h:mm a')}`, '\n\n',
        
        `I'll click again:`, `\n`,
        `${moment().add(24,'hours').format('MMMM Do YYYY')} at ${moment().format('h:mm a')}`, '\n\n');
    }
  });
  cron.schedule(`${moment().minutes()} ${moment().hour()} * * *`, () => { //this is cron syntax for every at current hour and minute
    clickIt();
  })
}

clickIt();