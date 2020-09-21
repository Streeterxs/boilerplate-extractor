import fs from 'fs';

const namePathSanitizer = (path: (...paths: string[]) => string, args: string[]) => {

    try {

        const isExtractPathDefined = !!args[1];
        const blName = args[0];
        let extractPath;
        let fileNames: string[];

        if (isExtractPathDefined) {

            extractPath = path(args[1]);
            fileNames = fs.readdirSync(extractPath);
        } else {

            fileNames = fs.readdirSync('./');
        }

        console.log('fileNames: ', fileNames);

        if (fileNames.includes(blName)) {

            throw new Error('Boilerplate has same name as a local folder/file');
        }
        return {
            blName,
            extractPath: isExtractPathDefined ? extractPath : path()
        };
    } catch (err) {

        console.log('Error: ', err);
    }
};

export default namePathSanitizer;
