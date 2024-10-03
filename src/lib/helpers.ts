/* eslint-disable no-promise-executor-return */
import { parse, set, formatISO } from 'date-fns';
import _ from 'lodash';

export const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

// format time into minutes and seconds
export function formatTime(seconds: number) {
    if (seconds >= 60) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes} minute${minutes > 1 ? 's' : ''} ${remainingSeconds} second${remainingSeconds !== 1 ? 's' : ''}`;
    }
    return `${seconds} second${seconds !== 1 ? 's' : ''}`;
}

// Utility function to generate a range of numbers
export const range = (
    start: number,
    end: number,
    step: number = 1
): number[] => {
    const output: number[] = [];
    for (let i = start; i < end; i += step) {
        output.push(i);
    }
    return output;
};

export function getDobISO(val: string, key: string) {
    // Your date string in "dd/MM" format
    const dateString = val;
    // Step 1: Parse the date string into a Date object
    // Since "28/06" doesn't include a year, we'll use the current year
    const currentYear = new Date().getFullYear(); // You can also set a specific year like 2024
    const parsedDate = parse(dateString, key, new Date());
    // Step 2: Set the year to the current year (or a specific year if needed)
    const adjustedDate = set(parsedDate, { year: currentYear });
    // Step 3: Convert the adjusted date to an ISO string
    const isoStringDob = formatISO(adjustedDate);
    return isoStringDob;
}

export function getDateJoinedISO(val: string, key: string) {
    const dateString = val;
    // Step 1: Parse the date string into a Date object
    // Specify the format "MM/yyyy"
    const parsedDate = parse(dateString, key, new Date());
    // Step 2: Set the day to the 1st of the month (since it's month/year only)
    const adjustedDate = set(parsedDate, { date: 1 });
    // Step 3: Convert the adjusted date to an ISO string
    const isoStringDateJoined = formatISO(adjustedDate, {
        representation: 'complete',
    });

    return isoStringDateJoined;
}

export function fullNameInitials(fullName: string) {
    const initials = _.map(fullName?.split(' '), (word) =>
        _.upperFirst(word[0])
    ).join('');
    return initials;
}
