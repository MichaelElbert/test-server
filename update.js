var exec = require('child_process').exec;
function handle(error, stdout, stderr) {
    exec("git pull", function (error, stdout, stderr) {
        console.log(stdout);
        exec("forever start server.js", function(a, b, c){
            console.log("Server updated and rebooted!")
        })
    })
}
exec("forever stop server.js", handle);
