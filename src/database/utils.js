const fs = require('fs');

const saveToDatabase = (DB) =>{
    fs.writeFileSync('./src/database/db.json', JSON.stringify(DB, null, 2),
        { encoding:'utf-8' },
        (err) => {
            if (err) {
                console.error('Error writing to database file:', err);
            } else {
                console.log('Database updated successfully!');
            }
         });
}

module.exports = {
    saveToDatabase
}