(() => {
var exports = {};
exports.id = 357;
exports.ids = [357];
exports.modules = {

/***/ 874:
/***/ ((module) => {

"use strict";
module.exports = require("knex");

/***/ }),

/***/ 317:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// Connect to the Database
const knex = __webpack_require__(874)({
    // We are using PostgreSQL
    client: "postgres",
    // Use the `DATABASE_URL` environment variable we provide to connect to the Database
    // It is included in your Replit environment automatically (no need to set it up)
    connection: process.env.DATABASE_URL,
    // Optionally, you can use connection pools to increase query performance
    pool: {
        min: 0,
        max: 80
    }
});
(async ()=>{
    // Create a demo table called "users"
    await knex.schema.createTable("users", (table)=>{
        table.increments("id");
        table.specificType("fulltext", "tsvector"); // full text index for your reference
        table.index("fulltext", null, "gin");
        table.string("username");
        table.string("email");
        table.string("jobtitle");
        table.string("messages");
        table.string("yourreference");
        table.integer("lettercount");
        table.string("letterURI");
    });
    // Add a demo user to the table with 0 lettercount
    await knex("users").insert({
        username: "alice",
        jobtitle: "Civil engineer",
        lettercount: 0
    });
    // Increment the lettercount by 1
    await knex("users").where("username", "alice").update({
        points: knex.raw("lettercount + 1")
    });
    // Get the user
    const user = await knex("users").where("username", "alice").first();
    // Print the user
    console.log(user);
    // Delete the user
    await knex("users").where("username", "alice").delete();
})();


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(317));
module.exports = __webpack_exports__;

})();