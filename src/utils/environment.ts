export const getEnvVariable = (key: string, defaultValue?: string): string => {
    return process.env[key] || defaultValue || '';
};

export const loadEnvConfig = (envFilePath: string): void => {
    const fs = require('fs');
    const dotenv = require('dotenv');

    if (fs.existsSync(envFilePath)) {
        dotenv.config({ path: envFilePath });
    } else {
        console.warn(`Environment file ${envFilePath} not found.`);
    }
};