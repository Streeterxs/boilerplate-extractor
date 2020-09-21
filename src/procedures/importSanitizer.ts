import fs from 'fs';

import { boilerplates } from '../boilerplates';

export const importSanitizer = (path: (...paths: string[]) => string, args: string[]) => {

    try {

        const isImportPathDefined = !!args[2];
        const blName = args[1];
        const importPath = path(args[2]);
        const fileNames = fs.readdirSync(boilerplates(blName));

        console.log('fileNames: ', fileNames);

        if (fileNames.includes(blName)) {

            throw new Error('Boilerplate has same name as a local folder/file');
        }
        return {
            blName,
            inputedPath: importPath,
            fileNames
        };
    } catch (err) {

        console.log('Error: ', err);
    }
};
