const fs = require('fs');
const path = require('path');
const basename = path.basename(module.filename);

let models = {};

fs.readdirSync(__dirname)
    .filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
    .forEach(file => {
        const model = path.join(__dirname, file);
        models[file.replace('.js', '')] = require(model);
    });

module.exports = models;
