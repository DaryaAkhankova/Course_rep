const fse = require('fs-extra');

//fse.ensureDirSync('./FirstFolder/');
//fse.ensureFileSync('./FirstFolder/test.txt');
//fse.ensureDirSync('./SecondFolder/');
//fse.moveSync('./FirstFolder/test.txt', './SecondFolder/test.txt');
fse.ensureDirSync('./ThirdFolder/');
fse.copySync('./SecondFolder/test.txt', './ThirdFolder/test.txt');

