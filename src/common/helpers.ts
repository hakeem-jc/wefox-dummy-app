export const format_date = (date_string:string) => {
    let date = new Date(date_string);
    return date.toLocaleDateString("en-GB");
}