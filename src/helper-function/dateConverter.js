export const dateConverter = (input) => {

    const day = new Date(input);

    const year = day.getFullYear();

    const month = day.getMonth() + 1;

    const date = day.getDate();

    const result = `${year}/${month}/${date}`

    return result;
}