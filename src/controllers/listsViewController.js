const List = require("../models/List");

// Obtener todas las listas
exports.getAllLists = async (req, res) => {
  try {
    const lists = await List.findAll();
    res.status(200).json(lists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener una lista por ID
exports.getListById = async (req, res) => {
  try {
    const { id } = req.params;
    const list = await List.findByPk(id);

    if (!list) {
      return res.status(404).json({ message: "Lista no encontrada" });
    }

    res.status(200).json(list);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener listas por board_id
exports.getListsByBoard = async (req, res) => {
  try {
    const { board_id } = req.params;
    const lists = await List.findAll({ where: { board_id } });

    if (lists.length === 0) {
      return res.status(404).json({ message: "No hay listas para este tablero" });
    }

    res.status(200).json(lists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
