import fs from 'fs';

export const extractSanitizer = (path: (...paths: string[]) => string, args: string[]) => {

    try {

        console.log('args: ', args);
        const isExtractPathDefined = !!args[1];
        const blName = args[2];
        let extractPath = path(args[1]);
        let fileNames: string[];

        const isFile = fs.statSync(args[1]).isFile();
        console.log('isFile: ', isFile);
        if (isFile) {

            console.log('extractPath: ', extractPath);
            const arrayPaths = extractPath.split('/');
            const fileName = arrayPaths[arrayPaths.length - 1];

            arrayPaths.pop();
            console.log('arrayPaths.join: ', arrayPaths.join('/'))
            console.log('arrayPaths.toString: ', arrayPaths.toString());
            extractPath = arrayPaths.join('/');
            console.log('new extractPath: ', extractPath);
            fileNames = [fileName];
        } else {

            extractPath = path(args[1]);
            fileNames = fs.readdirSync(extractPath);
        }

        console.log('fileNames: ', fileNames);

        if (fileNames.includes(blName)) {

            throw new Error('Boilerplate has same name as a local folder/file');
        }
        return {
            blName,
            extractPath: isExtractPathDefined ? extractPath : path(),
            fileNames
        };
    } catch (err) {

        console.log('Error: ', err);
    }
};
