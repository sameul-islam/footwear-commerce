import React, { useState } from "react";
import { TfiPlus, TfiMinus } from "react-icons/tfi";

const ProductDescription = ({ description }) => {
  if (!description) return null;

  const sections = [
    { title: "Key Features", items: description.features },
    { title: "Fit & Sizing", items: description.fitAndSizing },
    { title: "Materials", items: description.materials },
    { title: "Care Instructions", items: description.careInstructions },
  ];

  return (
    <div className="mt-10 space-y-8">
        {/* Short Description */}
      <p className="font-Outfit  leading-relaxed">
        {description.short}
      </p>

      {/* Long Description */}
      <p className="text-xs font-Poppins leading-relaxed text-gray-700">
        {description.long}
      </p>
    <div className="mt-12 border-t border-gray-200">
      {sections.map((section, idx) => (
        <AccordionSection key={idx} {...section} />
      ))}
    </div>

    </div>
  );
};

const AccordionSection = ({ title, items }) => {
  const [open, setOpen] = useState(false);

  if (!items || items.length === 0) return null;

  return (
    <div className="border-b border-gray-200 py-5">
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left"
      >
        <span className="text-xs font-semibold font-Poppins uppercase tracking-wide">
          {title}
        </span>
        {open ? <TfiMinus size={14} /> : <TfiPlus size={14} />}
      </button>

      {/* Content */}
      {open && (
        <ul className="mt-4 space-y-2 text-sm font-Outfit text-gray-700 list-disc list-inside">
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductDescription;
