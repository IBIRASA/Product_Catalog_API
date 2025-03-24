import {
    getAllCategories as _getAllCategories,
    getCategoryById as _getCategoryById,
    createCategory as _createCategory,
    updateCategory as _updateCategory,
    deleteCategory as _deleteCategory,
  } from "../services/categoryService.js";
  
  const getAllCategories = async (req, res) => {
    try {
      const categories = await _getAllCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  const getCategoryById = async (req, res) => {
    try {
      const category = await _getCategoryById(req.params.id);
      if (category) {
        res.json(category);
      } else {
        res.status(404).json({ message: "Category not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  const createCategory = async (req, res) => {
    try {
      const newCategory = await _createCategory(req.body);
      res.status(201).json(newCategory);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  const updateCategory = async (req, res) => {
    try {
      const updatedCategory = await _updateCategory(req.params.id, req.body);
      if (updatedCategory) {
        res.json(updatedCategory);
      } else {
        res.status(404).json({ message: "Category not found" });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  const deleteCategory = async (req, res) => {
    try {
      const deletedCategory = await _deleteCategory(req.params.id);
      if (deletedCategory) {
        res.json({ message: "Category deleted" });
      } else {
        res.status(404).json({ message: "Category not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Named exports
  export {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
  };