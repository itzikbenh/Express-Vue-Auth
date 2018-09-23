const differenceInCalendarDays = require('date-fns/difference_in_calendar_days');
const differenceInHours = require('date-fns/difference_in_hours');
const differenceInMinutes = require('date-fns/difference_in_minutes');
const addDays = require('date-fns/add_days');
const addHours = require('date-fns/add_hours');
const getTime = require('date-fns/get_time');
const format = require('date-fns/format');

module.exports = {
    oneDayFromNow: () => {
        return getTime(addDays(module.exports.getUTCDate(), 1));
    },

    oneHourFromNow: () => {
        return getTime(addHours(module.exports.getUTCDate(), 1));
    },

    getDateTimeForDB: () => {
        return format(module.exports.getUTCDate(), 'YYYY-MM-DD HH:mm:ss');
    },

    getUTCTime: () => getTime(module.exports.getUTCDate()),

    //https://github.com/date-fns/date-fns/issues/376#issuecomment-353871093
    getUTCDate: (dateString = Date.now()) => {
        const date = new Date(dateString);

        return new Date(
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate(),
            date.getUTCHours(),
            date.getUTCMinutes(),
            date.getUTCSeconds(),
        );
    },

    twoWeeksFromNow: () => {
        return getTime(addDays(module.exports.getUTCDate(), 14));
    },

    timeDiffFromNow: exp => {
        const now = module.exports.getUTCDate();

        return {
            days: differenceInCalendarDays(exp, now),
            hours: differenceInHours(exp, now),
            minutes: differenceInMinutes(exp, now),
        };
    },

    timeDiff: (now, exp) => {
        return {
            days: differenceInCalendarDays(exp, now),
            hours: differenceInHours(exp, now),
            minutes: differenceInMinutes(exp, now),
        };
    },
};
