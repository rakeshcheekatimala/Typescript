"use strict";
exports.__esModule = true;
/*
  call the fetch url that prints the one todo
*/
var axios_1 = require("axios");
var URL = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"]
    .get(URL)
    .then(function (response) {
    console.log(response);
})["catch"](function (e) {
    console.log(e);
});
