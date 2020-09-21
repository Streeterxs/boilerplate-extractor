import { commands } from "../commands";

import { extractSanitizer } from "./extractSanitizer";
import { importSanitizer } from "./importSanitizer";

export const argsSanitizer = (args: string[]) => {

    const sanitizers = {
        extract: extractSanitizer,
        import: importSanitizer
    };

    try {

        const command: commands = commands[args[0]];
        console.log('command: ', command);

        if (!command) {

            throw new Error('Inputed command not exist');
        }

        console.log('sanitizers[command]: ', sanitizers[command]);
        return {
            command,
            sanitizer: sanitizers[command]
        };
    } catch (err) {

        console.log('Error: ', err);
        return null;
    }
};