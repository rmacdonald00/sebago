import fs from 'fs';

const imageFileExtensions = ['png', 'webp', 'jpeg'];
const galleryImagesPath = './static/gallery';
const outFilePath = './src/lib/data/GalleryImages.json';

const GenerateGalleryJson = () => {
    const dirContents = fs.readdirSync(galleryImagesPath);

    const imageFiles = dirContents.filter(filename => imageFileExtensions.find(extension => filename.endsWith(`.${extension}`)));

    const images = [];
    for (var imagePath of imageFiles) {
        const imageName = imagePath.split('.')[0];
        images.push({
            title: imageName,
            altText: imageName,
            pathToImage: `./gallery/${imagePath}`
        });
    }

    fs.writeFileSync(outFilePath, JSON.stringify(images, null, 2));
    return outFilePath;
};

const filepath = GenerateGalleryJson();
console.log(`JSON file created: ${filepath}`);