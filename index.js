import moment from 'moment';


// check if object is not empty 
module.export.isEmpty = (obj) => {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}


// get the days, weeks, months from given date 
module.export.daysAgo = (date) => {

    let date = moment(date),
        now = moment(),
        days = now.diff(date, "days"),
        weeks = now.diff(date, "weeks"),
        months = now.diff(date, "months"),
        result = "";

    if (months) {
        result += months + " month" + (months > 1 && "s");
        days = days % 30;
    } else if (weeks) {
        result += weeks + " week" + (weeks > 1 && "s");
        days = days % 7;
    } else if (days || weeks === 0) {
        result += days + " day" + (days > 1 && "s");
    }
    return result;
}

// get the days, weeks, months for given date 
module.export.daysToGo = (date) => {

    let date = moment(date),
        now = moment(),
        days = date.diff(now, "days"),
        weeks = date.diff(now, "weeks"),
        months = date.diff(now, "months"),
        result = "";

    if (months) {
        result += months + " month" + (months > 1 && "s");
        days = days % 30;
    } else if (weeks) {
        result += weeks + " week" + (weeks > 1 && "s");
        days = days % 7;
    } else if (days || weeks === 0) {
        result += days + " day" + (days > 1 && "s");
    }
    return result;
}


// get the days, weeks, months for given date 
module.export.formatDate = (datetimestamp = new Date(), format) => {
    return moment(datetimestamp).format(format);
}


module.export.encodeFormData = (data) => {
    let formBody = [];

    for (let property in data) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(data[property]);
        formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    return formBody;
};
