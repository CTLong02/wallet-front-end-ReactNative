import { sha256 } from 'js-sha256';
export const toSha256 = (string) => {
    return sha256(string);
};
