# 💻 API built with MVC structure

This API was built using a Model-View-Controller (MVC) structure to organize the code. Please look through the 📁 `models`, 📁 `routes` and 📁 `controllers` folders to see how the code is separated based on responsibilities.

## 👩‍💻 Running locally

If you want to clone this repo and run it locally, be sure to create a `.env` file at the root directory to store your database URL and port 🔑. This keeps sensitive information out of the code. The `.env` file should look like:

DB_CONNECTION_STRING=
PORT=

Add your own 🐘SQL database URL and desired port number to the `.env` file. The app is configured to read from this file so it can connect to your database when running locally.
