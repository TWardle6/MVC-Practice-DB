import * as resurreccionModel from "../models/resurreccionModel.js";

export async function getResurreccions(req, res) {
  const resurreccions = await resurreccionModel.getResurreccions();
  res.status(200).json({ status: "success", data: resurreccions });
}

export async function getResurreccionById(req, res) {
  const id = req.params.id;
  const resurreccion = await resurreccionModel.getResurreccionById(id);
  // Assume 404 status if the resurreccion is not found
  if (!resurreccion) {
    return res
      .status(404)
      .json({ status: "fail", data: { msg: "Resurreccion not found" } });
  }
  res.status(200).json({ status: "success", data: resurreccion });
}

export async function createResurreccion(req, res) {
  const data = req.body;
  const resurreccion = await resurreccionModel.createResurreccion(data);
  res.status(201).json({ status: "success", data: resurreccion });
}

export async function updateResurreccionById(req, res) {
  const id = req.params.id;
  const data = req.body;
  const resurreccion = await resurreccionModel.updateResurreccionById(id, data);
  // Assume 404 status if the resurreccion is not found
  if (!resurreccion) {
    return res
      .status(404)
      .json({ status: "fail", data: { msg: "Resurreccion not found" } });
  }

  res.status(200).json({ status: "success", data: resurreccion });
}

export async function deleteResurreccionById(req, res) {
  const id = req.params.id;
  const resurreccion = await resurreccionModel.deleteResurreccionById(id);
  // Assume 404 status if the resurreccion is not found
  if (!resurreccion) {
    return res
      .status(404)
      .json({ status: "fail", data: { msg: "Resurreccion not found" } });
  }
  res.status(200).json({ status: "success", data: resurreccion });
}
