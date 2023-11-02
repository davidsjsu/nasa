
const fs = require('fs-extra'); // fs-extra provides recursive folder deletion

const cacheDir = './node_modules/.cache';

fs.remove(cacheDir, err => {
    if (err) {
        console.error('Error while deleting cache:', err);
    } else {
        console.log('Cache deleted successfully!');
    }
});
