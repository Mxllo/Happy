const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');
Database.then(async db => {
     console.log(await db.all('SELECT * FROM orphanages'));
     console.log(await db.run("DELETE FROM orphanages"));
})