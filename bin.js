const request = require('request');
const moment = require('moment');

const clickIt = () => {
  const intervalInMilliseconds = 86400000;//24 hours
  request("https://www.kickstarter.com/projects/228767892/open-ocean/?ref=kicktraq", function (error, response, body) {
    if (error) {
      console.error(new Error(error));
    } else {
      console.log(`I clicked kicktraq for https://www.kickstarter.com/projects/228767892/open-ocean/?ref=kicktraq at ${moment().format('MMMM Do YYYY, h:mm:ss a')}`,'\n',`I'll click again on ${moment().add(intervalInMilliseconds, 'milliseconds').format('MMMM Do YYYY, h:mm:ss a')} `);
    }
  });
  setTimeout(clickIt, intervalInMilliseconds);
}

clickIt();