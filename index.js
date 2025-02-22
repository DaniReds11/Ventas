const express = require("express");
const app = express();
const usuariosRutas = require("./routes/RutasUsuarios");
const productosRutas = require("./routes/rutasProducto");
const rutasVentas = require("./routes/RutasVentas");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", usuariosRutas);
app.use("/", productosRutas);
app.use("/", rutasVentas);

const port=process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Servidor en https://localhost:"+port);
});
