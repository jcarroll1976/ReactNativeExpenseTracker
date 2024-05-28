export default function getFormattedDate(date) {
    return (`${date.getMonth() + 1}-${date.getDate() + 1}-${date.getFullYear()}`)
}

export function getDateMinusDays(date,days) {
    return new Date(date.getFullYear(), date.getMonth() + 1, date.getDate() - days);
}