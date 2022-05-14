const express = require("express");
const router = express.Router();
const uploadFile = require("../../configMulter");

const mysqlConnection = require("../database");

router.get("/", (req, res) => {
  res.send("<h1>Página principal</h1>");
});

// router.get("/marca", async (req, res) => {
//   const [rows] = await mysqlConnection.query(`SELECT * FROM marca;`);
//   try {
//     return res.status(200).json(rows);
//   } catch {
//     console.log(err);
//     return res.status(500);
//   }
// });

// router.get("/vehiculo", async (req, res) => {
//   const [rows] = await mysqlConnection.query(`SELECT * FROM vehiculo;`);
//   try {
//     return res.status(200).json(rows);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ error: "Internal server error" });
//   }
// });

// router.get("/linea", async (req, res) => {
//   const [rows] = await mysqlConnection.query(`SELECT * FROM linea;`);
//   try {
//     return res.status(200).json(rows);
//   } catch {
//     console.log(err);
//     return res.status(500);
//   }
// });

// router.get("/minmax", async (req, res) => {
//   const [rows] = await mysqlConnection.query(
//     `SELECT MIN(modelo), MAX(modelo) FROM vehiculo;`
//   );
//   try {
//     return res.status(200).json(rows[0]);
//   } catch {
//     console.log(err);
//     return res.status(500);
//   }
// });

// router.get("/sum", async (req, res) => {
//   const [rows] = await mysqlConnection.query(
//     `SELECT SUM(modelo) FROM vehiculo;`
//   );
//   try {
//     return res.status(200).json(rows[0]);
//   } catch {
//     console.log(err);
//     return res.status(500);
//   }
// });

// router.get("/prom", async (req, res) => {
//   const [rows] = await mysqlConnection.query(
//     `SELECT AVG(modelo) FROM vehiculo;`
//   );
//   try {
//     return res.status(200).json(rows);
//   } catch {
//     console.log(err);
//     return res.status(500);
//   }
// });

// router.get("/activos", async (req, res) => {
//   const [rows] = mysqlConnection.query(`SELECT COUNT(estado) FROM linea;`);
//   try {
//     return res.status(200).json(rows);
//   } catch {
//     console.log(err);
//     return res.status(500);
//   }
// });

// router.get("/filter_seguro/:fecha1,:fecha2", async (req, res) => {
//   const { fecha1, fecha2 } = req.params;
//   const [rows] = await mysqlConnection.query(
//     `SELECT * FROM vehiculo WHERE fch_vence_seg >= "${fecha1}" AND fch_vence_seg <= "${fecha2}";`
//   );
//   try {
//     return res.status(200).json(rows);
//   } catch {
//     console.log(err);
//     return res.status(500);
//   }
// });

// router.get("/filter_modelo/:fecha1,:fecha2", async (req, res) => {
//   const { fecha1, fecha2 } = req.params;
//   const [rows] = await mysqlConnection.query(
//     `SELECT * FROM vehiculo WHERE modelo >= "${fecha1}" AND modelo <= "${fecha2}";`
//   );
//   try {
//     return res.status(200).json(rows);
//   } catch {
//     console.log(err);
//     return res.status(500);
//   }
// });

// router.get("/consultcarr", async (req, res) => {
//   const [rows] = await mysqlConnection.query(`
//     SELECT vehiculo.num_placa, vehiculo.modelo, linea.descripcion, marca.descripcion
//       FROM ( ( linea INNER JOIN vehiculo ON vehiculo.linea = linea.id_linea)
//       INNER JOIN marca ON marca.nombre = linea.nombre_marca);`);
//   try {
//     return res.status(200).json(rows);
//   } catch {
//     console.log(err);
//     return res.status(500);
//   }
// });

// router.get("/marca/:nombre", async (req, res) => {
//   const { nombre } = req.params;
//   const [rows] = await mysqlConnection.query(
//     `SELECT * FROM marca WHERE nombre = "${nombre}";`
//   );
//   try {
//     if (!rows[0]) {
//       return res.status(204).send("Sin datos");
//     } else {
//       return res.status(200).json(rows[0]);
//     }
//   } catch {
//     console.log(err);
//     return res.status(500);
//   }
// });

// router.get("/linea/:id", async (req, res) => {
//   const { id } = req.params;
//   const [rows] = await mysqlConnection.query(
//     `SELECT * FROM linea WHERE id_linea = ${id};`
//   );
//   try {
//     if (!rows[0]) {
//       return res.status(204).send("Sin datos");
//     } else {
//       return res.status(200).json(rows[0]);
//     }
//   } catch {
//     console.log(err);
//     return res.status(500);
//   }
// });

// router.get("/vehiculo/:placa", async (req, res) => {
//   const { placa } = req.params;
//   const [rows] = await mysqlConnection.query(
//     `SELECT * FROM vehiculo WHERE num_placa = "${placa}";`
//   );
//   try {
//     if (!rows[0]) {
//       return res.status(204).send("Sin datos");
//     } else {
//       return res.status(200).json(rows[0]);
//     }
//   } catch {
//     console.log(err);
//     return res.status(500);
//   }
// });

// router.delete("/marca/:nombre", async (req, res) => {
//   const { nombre } = req.params;
//   await mysqlConnection.query(`DELETE FROM marca WHERE nombre = "${nombre}";`);
//   try {
//     console.log("Se han borrado");
//     return res.status(200).send("Borrado");
//   } catch {
//     console.log(err);
//     return res.status(500);
//   }
// });

// router.delete("/linea/:id", async (req, res) => {
//   const { id } = req.params;
//   await mysqlConnection.query(`DELETE FROM linea WHERE id_linea = ${id};`);
//   try {
//     console.log("Se han borrado");
//     return res.status(200).send("Borrado");
//   } catch {
//     console.log(err);
//     return res.status(500);
//   }
// });

// router.delete("/vehiculo/:placa", async (req, res) => {
//   const { placa } = req.params;
//   await mysqlConnection.query(
//     `DELETE FROM vehiculo WHERE num_placa = "${placa}";`
//   );
//   try {
//     console.log("Se han borrado");
//     return res.status(200).send("Borrado");
//   } catch {
//     console.log(err);
//     return res.status(500);
//   }
// });

// router.post("/linea", async (req, res) => {
//   const { descripcion, estado, id_marca } = req.body;

//   if (!descripcion || !estado || !id_marca) {
//     return res.status(409).send({ error: "Conflict" });
//   } else {
//     await mysqlConnection.query(
//       `INSERT INTO linea (descripcion, estado, id_marca)VALUES ("${descripcion}","${estado}",${id_marca});`
//     );
//     try {
//       return res.status(200).send("Se envió correctamente");
//     } catch (error) {
//       console.log(error);
//       return res.status(500).send({ error: "Error" });
//     }
//   }
// });

// router.post("/marca", async (req, res) => {
//   const { nombre, descripcion, estado } = req.body;
//   if (!nombre || !descripcion || !estado) {
//     res.status(409).send({ error: "Conflict" });
//   } else {
//     await mysqlConnection.query(
//       `INSERT INTO marca (nombre, descripcion, estado)VALUES ("${nombre}","${descripcion}","${estado}");`
//     );
//     try {
//       return res.status(200).send("Se envió correctamente");
//     } catch (error) {
//       console.log(error);
//       return res.status(500).send({ error: "Error" });
//     }
//   }
// });

// router.post("/vehiculo", async (req, res) => {
//   const { num_placa, modelo, fch_vence_seg, fch_vence_tecno, linea, url_img } =
//     req.body;
//   if (
//     !num_placa ||
//     !modelo ||
//     !fch_vence_seg ||
//     !fch_vence_tecno ||
//     !linea ||
//     !url_img
//   ) {
//     res.status(409).send({ error: "Conflict" });
//   } else {
//     await mysqlConnection.query(
//       `INSERT INTO vehiculo VALUES ("${num_placa}","${modelo}","${fch_vence_seg}", "${fch_vence_tecno}", ${linea}, "${url_img}");`
//     );
//     try {
//       return res.status(200).send("Se envió correctamente");
//     } catch (error) {
//       return res.status(500).send({ error: "Error" });
//     }
//   }
// });

// router.put("/vehiculo/:placa", async (req, res) => {
//   const { placa } = req.params;
//   const { modelo, fch_vence_seg, fch_vence_tecno, linea, url_img } = req.body;
//   mysqlConnection.query(
//     `UPDATE vehiculo SET modelo = "${modelo}", fch_vence_seg = "${fch_vence_seg}", fch_vence_tecno = "${fch_vence_tecno}", linea = ${linea}, url_img = "${url_img}" WHERE num_placa = "${placa}";`
//   );
//   try {
//     return res.status(200).send("Se envió correctamente");
//   } catch {
//     return res.status(204).send("Sin datos");
//   }
// });

// router.post("/vehi", async (req, res) => {
//   uploadFile(req, res, (err) => {
//     if (err) {
//       console.log(err);
//       err.message = "Error al subir archivo";
//       res.send(err);
//     }
//     if (req.file) console.log(req.file);
//     else if (req.files) console.log(req.files);
//     res.send("Archivo subido").status(200);
//   });
// });

module.exports = router;