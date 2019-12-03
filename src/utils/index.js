const path = require('path')
exports.getCurrentVesion = function(){
	const packageJson = require(path.resolve(__dirname, '../../') + '/package.json')
	return packageJson.version
}