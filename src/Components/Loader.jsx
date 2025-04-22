import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-4 border-t-purple-600 animate-spin"></div>
        <div className="absolute top-0 h-24 w-24 rounded-full border-b-4 border-b-white/20 animate-spin-slow"></div>
      </div>
    </div>
  );
};

export default Loader;