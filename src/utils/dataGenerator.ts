export function generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

export function generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateRandomObject(template: Record<string, any>): Record<string, any> {
    const result: Record<string, any> = {};
    for (const key in template) {
        if (typeof template[key] === 'string') {
            result[key] = generateRandomString(template[key].length);
        } else if (typeof template[key] === 'number') {
            result[key] = generateRandomNumber(1, 100);
        }
    }
    return result;
}