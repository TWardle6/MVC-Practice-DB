// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../db/index.js";

export async function getEspada() {
  // Query the database and return all espada

  // Define the SQL query to fetch all authors from the 'espada' table
  const queryText = "SELECT * FROM espada";

  // Use the pool object to send the query to the database
  const result = await pool.query(queryText);

  // The rows property of the result object contains the retrieved records
  return result.rows;
}

export async function getEspadaById(id) {
  // Query the database and return the espada with a matching id or null

  // Define the SQL query to fetch the espada with the specified id from the 'espada' table
  const queryText = "SELECT * FROM espada WHERE id = $1";

  // Use the pool object to send the query to the database
  // passing the id as a parameter to prevent SQL injection
  const result = await pool.query(queryText, [id]);

  // The rows property of the result object contains the retrieved records
  return result.rows[0] || null;
}

export async function createEspada(espada) {
  // Query the database to create an espada and return the newly created espada

  // Define the SQL query for inserting a new espada into the 'espada' table
  const queryText = `
      INSERT INTO espada (name, espada_number)
      VALUES ($1, $2)
      RETURNING *;
    `;

  // Use the pool object to send the query to the database
  const result = await pool.query(queryText, [
    espada.name,
    espada.espada_number,
  ]);

  // The rows property of the result object contains the inserted record
  return result.rows[0];
}

export async function updateEspadaById(id, updates) {
  // Define the SQL query for updating the specified espada in the 'espada' table
  const queryText = `
      UPDATE espada
      SET name = COALESCE($1, name), espada_number = COALESCE($2, espada_name)
      WHERE id = $3
      RETURNING *;
    `;

  // Use the pool object to send the query to the database
  const result = await pool.query(queryText, [
    updates.name,
    updates.espada_number,
    id,
  ]);

  // The rows property of the result object contains the updated record
  return result.rows[0] || null;
}

export async function deleteEspadaById(id) {
  // Query the database to delete an espada and return the deleted espada or null

  // Define the SQL query for deleting the specified espada from the 'espada' table
  const queryText = `
      DELETE FROM espada
      WHERE id = $1
      RETURNING *;
    `;

  // Use the pool object to send the query to the database
  const result = await pool.query(queryText, [id]);

  // The rows property of the result object contains the deleted record
  return result.rows[0] || null;
}
