const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');
 
(async () => {
    const files = await imagemin(['public/img-in/*.{jpg,png,jpeg,gif}'], {
        destination: 'public/img',
        plugins: [
            imageminJpegtran(),
            imageminGifsicle(),
            imageminPngquant({
                quality: [0.6, 0.8]
            })
        ]
    });
 
    console.log('Images optimized!');
    //=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
})();