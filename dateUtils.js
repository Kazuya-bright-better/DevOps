const { logger } = require("@configs/logger");
const dayjs = require("dayjs");
// Define the utility function to calculate time difference
const diffTotalTimeHour = (startTime, endTime) => {
    // Calculate the difference
    const cal = endTime - startTime;
    // Return the calculated value
    return cal;
};

const changeDateFormatDDMMYYYY = (date) => {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
};

const changeTimeToMinutes = (time) => {
    const [hours, minutes, seconds] = time.split(":").map(Number);
    return hours * 60 + minutes + seconds / 60;
};

const changeTimeFormatHHMM = (time) => {
    try {
        if (time === null) {
            return "";
        }
        const date = dayjs(time);
        const timeFormat = date.utc().format("HH:mm");
        return timeFormat;
    } catch (error) {
        logger.info(error);
        return "-";
    }
};

const changeTimeFormatHHMMSS = (time) => {
    try {
        if (time === null) {
            return "";
        }
        const date = dayjs(time);
        const timeFormat = date.utc().format("HH:mm:ss");
        return timeFormat;
    } catch (error) {
        logger.info(error);
        return "-";
    }
};

const changeFormatDecimal = (value, decimals = 2) => {
    return value != null ? Number(value.toFixed(decimals)) : null;
};

const ValidateDateDDMMYYYY = (dateStr) => {
    // Match format dd/mm/yyyy
    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    const match = regex.exec(dateStr);
    if (!match) return false;

    const day = parseInt(match[1], 10);
    const month = parseInt(match[2], 10) - 1; // month is 0-indexed
    const year = parseInt(match[3], 10);

    const date = new Date(year, month, day);
    return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day;
};

const changeDateFormatToYYYYMMDD = (date) => {
    const [dd, mm, yyyy] = date.split("/");
    return `${yyyy}-${mm}-${dd}`;
};

const calculateHours = (startTime, endTime, date = null) => {
    const baseDate = date ? dayjs(date).format("YYYY-MM-DD") : dayjs().format("YYYY-MM-DD");
    console.log(baseDate);
    // Create datetime strings
    const startDateTime = `${baseDate} ${startTime}`;
    let endDateTime = `${baseDate} ${endTime}`;
    console.log(startDateTime, endDateTime);
    let start = dayjs(startDateTime);
    let end = dayjs(endDateTime);

    // If end is before start, add a day to end
    if (end.isBefore(start)) {
        end = end.add(1, "day");
    }

    return end.diff(start, "hour", true);
};
const getDateFormatYYYYMMDDCheck = (dateString) => {
    if (!dateString) return null;

    // Try parsing as DD/MM/YYYY first
    const parsedFromFormatted = dayjs(dateString, "DD/MM/YYYY", true);
    if (parsedFromFormatted.isValid()) {
        return parsedFromFormatted.format("YYYY-MM-DD");
    }

    // Fallback to natural parsing (e.g., "Fri Apr 25 2025 11:16:39 GMT+0700")
    const parsedFromNative = dayjs(dateString);
    if (parsedFromNative.isValid()) {
        return parsedFromNative.format("YYYY-MM-DD");
    }

    // If all parsing fails
    return null;
};

// Export the functions for use in other React files
module.exports = {
    diffTotalTimeHour,
    changeDateFormatDDMMYYYY,
    changeTimeToMinutes,
    changeTimeFormatHHMM,
    changeTimeFormatHHMMSS,
    changeFormatDecimal,
    ValidateDateDDMMYYYY,
    changeDateFormatToYYYYMMDD,
    calculateHours,
    getDateFormatYYYYMMDDCheck,
};
