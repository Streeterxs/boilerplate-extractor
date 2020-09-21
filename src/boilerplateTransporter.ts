import fs from 'fs';

import { commands } from './commands';

export const boilerplateTransporter = (command: commands, inputedPath: string, boilerplatePath: string, fileNames: string[]) => {

    const extract = (extractPath: string, copyPath: string, fileNames: string[]) => {

        try {

            if (!fs.existsSync(copyPath)){
                fs.mkdirSync(copyPath);
            }

            fileNames.forEach(name => {

                fs.copyFileSync(`${extractPath}/${name}`, `${copyPath}/${name}`);
            });

            console.log('Boilerplates successful extraction');
        } catch (err) {

            console.log('Error: ', err);
        }
    };

    return {
        extract: () => extract(inputedPath, boilerplatePath, fileNames),
        import: () => extract(boilerplatePath, inputedPath, fileNames)
    }
};


