const {PORT = 5000} = process.env; 

const app = require ("./app");
const { migrate } = require("./db/connection");
const knex = require("./db/connection");

knex.migrate.latest.then((migrations)=>{
    console.log("migrationns", migrations);
    app.listen(PORT, listener);
})
.catch((error)=>{
    console.error(error);
    knex.destroy();
});

function listener(){
    console.log (`Listening on Port ${PORT}`); 
}

app.listen(PORT, listener);