import { pool } from "../index.js";

async function resetDatabase() {
  try {
    // Drop existing tables if they exist
    await pool.query(`
      DROP TABLE IF EXISTS espada CASCADE;
      DROP TABLE IF EXISTS resurreccion CASCADE;
    `);

    // Create the espada table
    await pool.query(`
      CREATE TABLE espada (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        espada_number INT
      );
    `);

    // Create the resurreccion table with a foreign key to the espada table
    await pool.query(`
      CREATE TABLE resurreccion (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        resurreccion VARCHAR(255) NOT NULL,
        resurreccion_video_path VARCHAR(255) NOT NULL,
        espada_id INT REFERENCES espada(id)
      );
    `);

    // Seed the espada table
    await pool.query(`
      INSERT INTO espada (name, espada_number)
      VALUES 
        ('Yammy Riyalgo', 0),
        ('Coyote Stark', 1),
        ('Baraggan Louisenbairn', 2),
        ('Tier Harribel', 3),
        ('Nelliel Tu Odelschwanck', 3),
        ('Ulquiorra Cifer', 4),
        ('Nnoitra Gilga', 5),
        ('Grimmjow Jaegerjaquez', 6),
        ('Zommari Rureaux', 7),
        ('Szayelaporro Granz', 8),
        ('Aaroniero Arruruerie', 9);
    `);

    // Seed the resurreccion table
    await pool.query(`
      INSERT INTO resurreccion (resurreccion, resurreccion_video_path, espada_id)
      VALUES 
        ('Get pissed off, Ira!', '', 1),
        ('Kick about, Los Lobos!', '', 2),
        ('Rot, Arrogante!', '', 3),
        ('Hunt, Tiburón!', '', 4),
        ('Praise, Gamuza!', '', 5),
        ('Imprison, Murciélago!', '', 6),
        ('Pray, Santa Teresa!', '', 7),
        ('Grind, Pantera!', '', 8),
        ('Subside, Brujería!', '', 9),
        ('Sip, Fornicarás!', '', 10),
        ('Devour, Glotonería!', '', 11);
    `);

    console.log("Database reset successful");
  } catch (error) {
    console.error("Database reset failed: ", error);
  } finally {
    // End the pool
    await pool.end();
  }
}

await resetDatabase();
