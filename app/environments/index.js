const env = process.env.NODE_ENV;
const environment = {
    dev: 'development',
    prod: 'production'
}

const listEnvironment = {
    [environment.dev]: {
        API_SERVER: 'DEV'
    },
    [environment.prod]: {
        API_SERVER: 'PROD'
    }
}

export const config = listEnvironment[env];

