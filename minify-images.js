import imagemin from 'imagemin';

const files = await imagemin(['./img/*.svg'], {
    destination: './public/img'
});

console.log('minifed images', files.map(file => file.destinationPath));
