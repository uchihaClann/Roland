import React from "react";

const FloatingImage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <img
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt="Dynamic Shape and Shaking Effect"
        className="w-64 h-64 object-cover shadow-lg transform transition-all duration-300 hover:scale-105 animate-shape-change-shake"
      />
    </div>
  );
};

export default FloatingImage;
