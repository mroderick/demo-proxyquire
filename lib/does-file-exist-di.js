'use strict';

function doesFileExist(existsSync, path){
    return existsSync(path);
}

module.exports = doesFileExist;
