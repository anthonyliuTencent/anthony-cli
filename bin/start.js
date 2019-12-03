const program = require("commander");
const { getCurrentVesion } = require("../src/utils");
program.version(getCurrentVesion()).parse(process.argv);
