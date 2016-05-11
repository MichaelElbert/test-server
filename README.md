# test-server
This simple script (assuming forever is installed) updates and restarts a node.js server.
```
var exec = require('child_process').exec;
```
Include this and [update.js](https://github.com/MichaelElbert/test-server/blob/master/update.js) in your main server file, and somehow reference it (for awakens, we will be running `exec("node update.js")` when a god runs the update command).

The script will then run, stopping all forever processes, pulling from the git repository, and starting server.js again.
