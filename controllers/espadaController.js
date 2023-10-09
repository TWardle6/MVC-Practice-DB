import * as espadaModel from "../models/espadaModel.js";

export async function getEspada(req, res) {
  const espada = await espadaModel.getEspada();
  res.status(200).json({ status: "success", data: espada });
}

export async function getEspadaById(req, res) {
  const id = req.params.id;
  const espada = await espadaModel.getEspadaById(id);
  // Assume 404 status if the espada is not found
  if (!espada) {
    return res
      .status(404)
      .json({ status: "fail", data: { msg: "Espada not found" } });
  }
  res.status(200).json({ status: "success", data: espada });
}

export async function createEspada(req, res) {
  const data = req.body;
  const espada = await espadaModel.createEspada(data);
  res.status(201).json({ status: "success", data: espada });
}

export async function updateEspadaById(req, res) {
  const id = req.params.id;
  const data = req.body;
  const espada = await espadaModel.updateEspadaById(id, data);
  // Assume 404 status if the espada is not found
  if (!espada) {
    return res
      .status(404)
      .json({ status: "fail", data: { msg: "Espada not found" } });
  }
  res.status(200).json({ status: "success", data: espada });
}

export async function deleteEspadaById(req, res) {
  const id = req.params.id;
  const espada = await espadaModel.deleteEspadaById(id);
  // Assume 404 status if the espada is not found
  if (!espada) {
    return res
      .status(404)
      .json({ status: "fail", data: { msg: "Espada not found" } });
  }
  res.status(200).json({ status: "success", data: espada });
}
