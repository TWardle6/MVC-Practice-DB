// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../db/index.js";

export async function getResurreccions() {
  // Query the database and return all resurreccions

  // Define the SQL query to fetch all resurreccions from the 'resurreccion' table
  const queryText = "SELECT * FROM resurreccion";

  // Use the pool object to send the query to the database
  const result = await pool.query(queryText);

  // The rows property of the result object contains the retrieved records
  return result.rows;
}

export async function getResurreccionById(id) {
  // Query the database and return the resurreccion with a matching id or null

  // Define the SQL query to fetch the resurreccion with the specified id from the 'resurreccion' table
  const queryText = "SELECT * FROM resurreccion WHERE id = $1";

  // Use the pool object to send the query to the database
  // passing the id as a parameter to prevent SQL injection
  const result = await pool.query(queryText, [id]);

  // The rows property of the result object contains the retrieved records
  // If a resurreccion with the specified id exists, it will be the first element in the rows array
  // If no resurreccion exists with the specified id, the rows array will be empty
  return result.rows[0] || null;
}

export async function createResurreccion(resurreccion) {
  // Query the database to create a resurreccion and return the newly created resurreccion

  // Define the SQL query for inserting a new resurreccion into the 'resurreccion' table
  const queryText = `
      INSERT INTO resurreccion (resurreccion, resurreccion_video_path, espada_id)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;

  // Use the pool object to send the query to the database
  // Parameterize the query to prevent SQL injection
  const result = await pool.query(queryText, [
    resurreccion.resurreccion,
    resurreccion.resurreccion_video_path,
    resurreccion.espada_id,
  ]);

  // The rows property of the result object contains the inserted record
  return result.rows[0];
}

export async function updateResurreccionById(id, updates) {
  // Query the database to update a resurreccion and return the newly updated resurreccion or null

  // Define the SQL query for updating the specified resurreccion in the 'resurreccion' table
  const queryText = `
      UPDATE resurreccion
      SET resurreccion = COALESCE($1, resurreccion), resurreccion = COALESCE($2, resurreccion_video_path), espada_id = COALESCE($3, espada_id)
      WHERE id = $4
      RETURNING *;
    `;

  // Use the pool object to send the query to the database
  // Parameterize the query to prevent SQL injection
  const result = await pool.query(queryText, [
    updates.resurreccion,
    updates.resurreccion_video_path,
    updates.espada_id,
    id,
  ]);

  // The rows property of the result object contains the updated record
  // If no resurreccion exists with the specified id, the rows array will be empty
  return result.rows[0] || null;
}

export async function deleteResurreccionById(id) {
  // Query the database to delete a resurreccion and return the deleted resurreccion or null

  // Define the SQL query for deleting the specified resurreccion from the 'resurreccion' table
  const queryText = `
      DELETE FROM resurreccion
      WHERE id = $1
      RETURNING *;
    `;

  // Use the pool object to send the query to the database
  // Parameterize the query to prevent SQL injection
  const result = await pool.query(queryText, [id]);

  // The rows property of the result object contains the deleted record
  // If no resurreccion exists with the specified id, the rows array will be empty
  return result.rows[0] || null;
}
