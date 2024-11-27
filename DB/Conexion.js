const admin=require("firebase-admin");
const keys=require("../keys.json");
admin.initializeApp({
    credential:admin.credential.cert(keys)
});
const db=admin.firestore();
const usuariosDB=db.collection("usuario");
const productoDB=db.collection("producto");
const ventaDB=db.collection("venta");

module.exports = {
    usuariosDB,
    productoDB,
    ventaDB
}

//console.log(usuariosDB);