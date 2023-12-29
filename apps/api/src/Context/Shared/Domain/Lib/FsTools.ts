import fs from 'fs';
import path from 'path';

export const cdnDir: string = path.join(
    process.cwd(),
    (process.env.CDN_DIR as string) || 'cdn/'
);

export const createBasedirIntoCdnDirIfNotExists = (directory: string): void => {
    if (!fs.existsSync(cdnDir + directory)) {
        fs.mkdirSync(cdnDir + directory);
        fs.mkdirSync(cdnDir + directory + '/examples');
        console.log(cdnDir + directory + '/examples');
    }
};

export const videoPoster = (videoUrl?: string | undefined) =>
    videoUrl !== undefined && videoUrl + '/poster';
