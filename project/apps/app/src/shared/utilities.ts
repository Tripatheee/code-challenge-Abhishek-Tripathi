export const toTitleCase = (str: string) => {
    if (!str || !str.length) return "";
    return str.replace(/\b\w/g, l => l.toUpperCase());
}