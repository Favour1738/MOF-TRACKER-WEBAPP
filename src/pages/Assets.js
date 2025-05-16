import React, { useState, useEffect } from "react";
import AddAsset from "./AddAsset";

function Assets() {
  const [assets, setAssets] = useState(() => {
    const saved = localStorage.getItem("assets");
    return saved ? JSON.parse(saved) : [];
  });

  const [editAsset, setEditAsset] = useState(null);

  useEffect(() => {
    localStorage.setItem("assets", JSON.stringify(assets));
  }, [assets]);

  const handleAddAsset = (asset) => {
    if (editAsset) {
      setAssets(assets.map((a) => (a.id === editAsset.id ? asset : a)));
      setEditAsset(null);
    } else {
      setAssets([...assets, asset]);
    }
  };

  const handleEdit = (asset) => {
    setEditAsset(asset);
  };

  const handleDelete = (id) => {
    setAssets(assets.filter((a) => a.id !== id));
  };

  return (
    <div>
      <h2>Assets</h2>
      <AddAsset onAdd={handleAddAsset} assetToEdit={editAsset} />
      {assets.map((asset) => (
        <div key={asset.id} className="card">
          <h4>{asset.name}</h4>
          <p>Type: {asset.type}</p>
          <p>Assigned To: {asset.assignedTo || "Unassigned"}</p>
          <button onClick={() => handleEdit(asset)}>Edit</button>
          <button onClick={() => handleDelete(asset.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Assets;
