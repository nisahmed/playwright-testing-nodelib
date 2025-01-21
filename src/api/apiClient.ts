/**
 * ApiClient class to handle API requests.
 */
export class ApiClient {
    private baseUrl: string;

    /**
     * Constructor to initialize the base URL.
     * @param baseUrl - The base URL for the API.
     */
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    /**
     * Method to make a GET request.
     * @param endpoint - The API endpoint.
     * @param headers - Optional headers for the request.
     * @returns The response from the API.
     */
    async get(endpoint: string, headers: Record<string, string> = {}): Promise<Response> {
        const response = await fetch(`${this.baseUrl}${endpoint}`, {
            method: 'GET',
            headers: headers,
        });
        return response;
    }

    /**
     * Method to make a POST request.
     * @param endpoint - The API endpoint.
     * @param body - The body of the request.
     * @param headers - Optional headers for the request.
     * @returns The response from the API.
     */
    async post(endpoint: string, body: any, headers: Record<string, string> = {}): Promise<Response> {
        const response = await fetch(`${this.baseUrl}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
            body: JSON.stringify(body),
        });
        return response;
    }

    /**
     * Method to make a PUT request.
     * @param endpoint - The API endpoint.
     * @param body - The body of the request.
     * @param headers - Optional headers for the request.
     * @returns The response from the API.
     */
    async put(endpoint: string, body: any, headers: Record<string, string> = {}): Promise<Response> {
        const response = await fetch(`${this.baseUrl}${endpoint}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
            body: JSON.stringify(body),
        });
        return response;
    }

    /**
     * Method to make a DELETE request.
     * @param endpoint - The API endpoint.
     * @param headers - Optional headers for the request.
     * @returns The response from the API.
     */
    async delete(endpoint: string, headers: Record<string, string> = {}): Promise<Response> {
        const response = await fetch(`${this.baseUrl}${endpoint}`, {
            method: 'DELETE',
            headers: headers,
        });
        return response;
    }
}