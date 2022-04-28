const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('db.sqlite', (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log('Successfully connected to SQLite database.');
    db.run(
      `CREATE TABLE names (
      id integer PRIMARY KEY AUTOINCREMENT,
      name text
    )`,
      (err) => {
        if (err) {
          // Table already exists
          console.log(
            'Names table already initialized, checking next table...'
          );
        } else {
          // Table initialized, now adding rows
          console.log('Names table created, adding rows...');
          const nameStatement = db.prepare(
            `INSERT INTO names (name) VALUES ('Ken Averbookh')`
          );
          nameStatement.run();
        }
      }
    );

    db.run(
      `CREATE TABLE avatar (
      id integer PRIMARY KEY AUTOINCREMENT,
      fileType text,
      originalName text,
      path text
    )`,
      (err) => {
        if (err) {
          // Table already exists
          console.log('Avatar table already initialized.');
          console.log('Database ready.');
        } else {
          // Table initialized, now adding rows
          console.log('Avatar table created, adding rows...');
          const avatarStatement = db.prepare(
            `INSERT INTO avatar (path) VALUES ('./avatars/pen_flinger.jpg')`
          );
          avatarStatement.run();
          console.log('Database ready.');
        }
      }
    );
  }
});

module.exports = db;
