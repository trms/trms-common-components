import moment from 'moment';

function toTightyTime(time, defaultTime="12:00:00 am") {
  let m = moment();
  var timeRegex = /(\d+)(?:\.|:)?(\d+)?(?:\.|:)?(\d+)?\s?(am|pm|a|p|\+|-)?/;
  var results = timeRegex.exec(time.toLowerCase());
  var forcePm = false;

  if (!results) {return defaultTime;}

  if (results[4] &&
     (results[4] === 'pm' || results[4] === 'p' || results[4] === '+')) {
       forcePm = true;
  }

  var hour = results[1] || 0;
  hour = parseInt(hour, 10);
  if (hour < 12 && forcePm) {
    hour += 12;
  } else if (hour === 12 && forcePm === false) {
    hour = 0;
  }
  m.set('hour', hour);
  m.set('minute', results[2] || 0);
  m.set('second', results[3] || 0);

  return m.format('h:mm:ss a');
}

export default {
  toTightyTime: toTightyTime
};
