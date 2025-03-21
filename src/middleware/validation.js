// middleware/validation.js
const validateProduct = (req, res, next) => {
    const { name, basePrice, category } = req.body;
    
    if (!name) {
      return res.status(400).json({
        success: false,
        error: 'Product name is required'
      });
    }
    
    if (!basePrice) {
      return res.status(400).json({
        success: false,
        error: 'Base price is required'
      });
    }
    
    if (!category) {
      return res.status(400).json({
        success: false,
        error: 'Category is required'
      });
    }
    
    next();
  };
  
  const validateVariant = (req, res, next) => {
    const { attributes, sku, price } = req.body;
    
    if (!attributes || Object.keys(attributes).length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Variant attributes are required'
      });
    }
    
    if (!sku) {
      return res.status(400).json({
        success: false,
        error: 'SKU is required'
      });
    }
    
    if (!price) {
      return res.status(400).json({
        success: false,
        error: 'Price is required'
      });
    }
    
    next();
  };
  
  const validateCategory = (req, res, next) => {
    const { name } = req.body;
    
    if (!name) {
      return res.status(400).json({
        success: false,
        error: 'Category name is required'
      });
    }
    
    next();
  };
  
  const validateInventoryTransaction = (req, res, next) => {
    const { productId, variantSku, type, quantity } = req.body;
    
    if (!productId) {
      return res.status(400).json({
        success: false,
        error: 'Product ID is required'
      });
    }
    
    if (!variantSku) {
      return res.status(400).json({
        success: false,
        error: 'Variant SKU is required'
      });
    }
    
    if (!type || !['STOCK_ADD', 'STOCK_REMOVE', 'ADJUSTMENT'].includes(type)) {
      return res.status(400).json({
        success: false,
        error: 'Valid transaction type is required'
      });
    }
    
    if (quantity === undefined || quantity === null) {
      return res.status(400).json({
        success: false,
        error: 'Quantity is required'
      });
    }
    
    next();
  };
  
  export default {
    validateProduct,
    validateVariant,
    validateCategory,
    validateInventoryTransaction
  };