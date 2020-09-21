import { commands } from "../commands";

import { extractSanitizer } from "./extractSanitizer";

export const argsSanitizer = (args: string[]) => {

    const sanitizers = {
        extract: extractSanitizer
    };

    try {

        const command: commands = commands[args[0]];
        console.log('command: ', command);

        if (!command) {

            throw new Error('Inputed command not exist');
        }

        console.log('sanitizers[command]: ', sanitizers[command]);
        return sanitizers[command];
    } catch (err) {

        console.log('Error: ', err);
        return null;
    }
};