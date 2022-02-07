export const asyncGetCallUsersApi = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        return  await response.json();

    } catch (error) {
        console.error(`error: `, error)
    }
}