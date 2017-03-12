#!/usr/bin/env node

/**
 * Created by zhenglianfu on 2017/3/12.
 */
var path = require('path');
var fs = require('fs');
var sourceDir = path.resolve(__dirname, '../src');
var cmdArgs = process.argv.slice(2);
if (cmdArgs.length == 0) {
    console.log('用法：fuzl-cli 文件夹名');
} else {
    var targetDir = path.resolve(cmdArgs[0]);
    if (isEmptyDir(targetDir)) {
        copy(sourceDir, targetDir);
    } else {
        console.log(path.resolve(targetDir) + ' 不是空文件夹');
    }
}
function isEmptyDir(dirPath){
    if (fs.existsSync(dirPath)) {
        var stat = fs.statSync(dirPath);
        if (stat.isFile()) {
            console.log(dirPath + '不是文件夹');
            throw new TypeError(dirPath + '不是文件夹');
            return false;
        } else {
            return fs.readdirSync(dirPath).length == 0;
        }
    }
    return true;
}
function copy(src, target){

}