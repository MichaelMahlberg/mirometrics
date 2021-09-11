var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();

require('dotenv').config()

if (! process.env.SFTP_USER ||
    ! process.env.SFTP_PRODUCTION_HOST ) {
    console.error( `
You need a .env file to use the deploy command
this should contain (at least) the following definitions 

SFTP_PRODUCTION_HOST=<domain name of your production host>
SFTP_USER=<your sftp user name>
SFTP_PASSWORD=<your sftp password> [optional]
SFTP_PORT=<your sftp port> [optional, defaults to 22]
`)
    process.exit(1)
}


var config = {
    user: process.env.SFTP_USER,
    // Password optional, prompted if none given
    password: process.env.SFTP_PASSWORD,
    host: process.env.SFTP_PRODUCTION_HOST,
    port: process.env.SFTP_PORT || 22,
    localRoot: __dirname ,
    remoteRoot: "/",
    // include: ["*", "**/*"],      // this would upload everything except dot files
    include: ["flowmetrics/*", "index.html"],
    // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
    exclude: ["dist/**/*.map", "node_modules/**", "node_modules/**/.*", ".git/**"],
    // delete ALL existing files at destination before uploading, if true
    deleteRemote: false,
    // Passive mode is forced (EPSV command is not sent)
    forcePasv: true,
    // use sftp or ftp
    sftp: true
};

ftpDeploy
    .deploy(config)
    .then(res => console.log("finished:", res))
    .catch(err => console.log(err));