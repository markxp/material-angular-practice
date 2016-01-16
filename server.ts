/// <reference path="./typings/node/node.d.ts" />
'use strict';

let express = require("express");
let PORT = process.env.PORT || 3000;
let app = express();

app.use(express.static(__dirname + '/public'));
app.listen(PORT, function () { console.log(`node server is ruuning : ${PORT}`);
    
});

