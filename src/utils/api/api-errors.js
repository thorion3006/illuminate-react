export function handleApiErrors (response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    
    const error = new Error(response.statusText);
    error.message = response;
    throw error;
}