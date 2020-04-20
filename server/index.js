// Instanciando
const express = require("express");
const app = express();
const morgan = require("morgan");

const { mongoose } = require("./database");

// Configurando el servidor
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/users", require("./routes/user.routes"));
app.use("/api/roles", require("./routes/role.routes"));

// Inicializando el servidor
app.listen(app.get("port"), () => {
  console.log("Server in " + app.get("port"));
});
