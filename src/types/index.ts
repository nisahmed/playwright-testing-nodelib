export interface ApiResponse<T> {
    status: number;
    data: T;
    error?: string;
}

export interface DbResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
}

export interface PageObject {
    navigateTo(url: string): Promise<void>;
    getTitle(): Promise<string>;
}