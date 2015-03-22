# node-tcp-passthrough
A TCP passthrough written in Node.JS.

Installation (Debian/Ubuntu)
----------------------------
**Step 1:** Download packages and repo.

    sudo apt-get update
    sudo apt-get install nodejs
    git clone https://github.com/montyanderson/node-tcp-passthrough.git
    cd node-tcp-passthrough

**Step 2:** Edit config.js in your text editor of choice.

    $ cat config.js
    exports.ip = "localhost"; // It will pass-through to this IP
    exports.port = 80; // It will pass-through to this port
    exports.listen = 5000; // It will listen to incoming connections on this port
    
**Step 3:** Run and enjoy!

    $ ./run.sh
    #-- Node.JS TCP Pass-through --#
    #------------------------------#
    Connecting to localhost:80.
    Listening on port 5000
