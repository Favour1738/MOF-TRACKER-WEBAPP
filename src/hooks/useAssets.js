// import { useState, useEffect } from "react";

// function useAssets() {
//   const [assets, setAssets] = useState(() => {
//     const saved = localStorage.getItem("assets");
//     return saved ? JSON.parse(saved) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("assets", JSON.stringify(assets));
//   }, [assets]);

//   const addAsset = (asset) => {
//     setAssets((prev) => [...prev, asset]);
//   };

//   return { assets, addAsset };
// }

// export default useAssets;
import { useEffect, useState } from "react";

function useAssets() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    const storedAssets = JSON.parse(localStorage.getItem("assets")) || [];
    setAssets(storedAssets);
  }, []);

  useEffect(() => {
    localStorage.setItem("assets", JSON.stringify(assets));
  }, [assets]);

  const addAsset = (asset) => {
    setAssets((prev) => [...prev, asset]);
  };

  const deleteAsset = (index) => {
    const updatedAssets = assets.filter((_, i) => i !== index);
    setAssets(updatedAssets);
  };

  return { assets, addAsset, deleteAsset };
}

export default useAssets;
