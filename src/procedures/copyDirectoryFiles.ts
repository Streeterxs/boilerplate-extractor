import fs from 'fs';

const copyDirectoryFiles = (extractPath: string, copyPath: string, fileNames: string[]) => {

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

export default copyDirectoryFiles;
