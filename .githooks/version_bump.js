const fs = require('fs')
const versionFile = 'flowmetrics/version.js';

version = fs.readFileSync(versionFile, {encoding: 'utf-8'})
versionMinor = version.match(/\.([^.]*)'/)[1]
newVersionMinor = parseInt(versionMinor) + 1
version = version.replace( versionMinor+"'", newVersionMinor + "'")

fs.writeFileSync(versionFile, version)
