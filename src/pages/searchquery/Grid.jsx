import React from "react";
import { useSelector } from "react-redux";
import { gridMap } from "../../components/Products/utils/gridClasses";
import Card from "./Card";
import { selectViewMode } from "../../features/products/productsSlice";
import { motion, AnimatePresence } from "framer-motion";

const Grid = ({ products }) => {
  const viewMode = useSelector(selectViewMode);

  return (
      <AnimatePresence mode="wait">
      <motion.div
        key={products.map(p => p.id).join(",")}
        className={`grid ${gridMap[viewMode]} gap-1 p-1 md:gap-2 md:p-2`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default Grid;
