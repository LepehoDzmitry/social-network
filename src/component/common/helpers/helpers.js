export const getRelativeDate = (date = new Date()) => {
    const timesParams = {
        minute: 60000,
        hour: 60000 * 60,
        fourHour: 60000 * 60 * 4,
        day: 60000 * 60 * 24
    };
    date = new Date(date);
    const now = new Date();
    const relative = date - now;
    const relativeAbs = Math.abs(relative);
    const relativeDay = Math.ceil((date.getTime() - date.getTimezoneOffset() * timesParams.minute) / timesParams.day)
        - Math.ceil((now.getTime() - now.getTimezoneOffset() * timesParams.minute) / timesParams.day);
    const options = {
        md: {
            month: "long",
            day: "numeric"
        }
    };
    const rtf = new Intl.RelativeTimeFormat("ru-RU", {numeric: 'auto'});
    if (relativeAbs < timesParams.minute) {
        return "Только что"
    } else if (relativeAbs < timesParams.hour) {
        return rtf.format(Math.ceil(relative / timesParams.minute), "minute");
    } else if (relativeAbs < timesParams.fourHour) {
        return rtf.format(Math.ceil(relative / timesParams.hour), "hour");
    } else if (relativeDay <= 0 && relativeDay >= -1) {
        return `${rtf.format(relativeDay === -0 ? 0 : relativeDay, "day")} в ${date.getHours()}:${("0" + date.getMinutes()).slice(-2)}`;
    } else {
        return `${date.toLocaleDateString("ru-RU", options.md)} в ${date.getHours()}:${("0" + date.getMinutes()).slice(-2)}`;
    }
};
