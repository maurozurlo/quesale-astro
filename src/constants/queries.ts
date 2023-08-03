import qs from 'qs';
import { serverUrl } from './api';

const USER_URL = serverUrl.concat("/api/users?");
const EVENT_URL = serverUrl.concat("/api/events?");

export const USER_PATHS = USER_URL.concat(qs.stringify({ fields: ["username"] }));
export const EVENT_PATHS = EVENT_URL.concat(qs.stringify({ fields: ["slug"] }));

export const EVENT_QUERY = (slug: string) => EVENT_URL.concat(qs.stringify(
    {
        filters: {
            slug: {
                $eq: slug,
            },
        },
        populate: {
            poster: {
                fields: ["formats"],
            },
            categories: {
                fields: ["name"],
            },
            organizer: {
                fields: ["username"],
            },
            participants: {
                fields: ["username"],
            },
        },
    },
    {
        encodeValuesOnly: true,
    }
));

export const USER_QUERY = (username: string) => USER_URL.concat(qs.stringify(
    {
        filters: {
            username: {
                $eq: username,
            },
        },
        populate: {
            gender: {
                fields: ["name"],
            },
            categories: {
                fields: ["name"],
            },
            avatar: {
                fields: ["formats"],
            },
            links: {
                fields: ["name", "url"],
            },
        },
    },
    {
        encodeValuesOnly: true,
    }
));