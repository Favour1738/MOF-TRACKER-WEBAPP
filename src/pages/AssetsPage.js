import React, { useState } from "react";
import useAssets from "../hooks/useAssets";
import { NavLink } from "react-router-dom";
import "./AssetsPage.css";

function AssetsPage() {
  const { assets, addAsset, deleteAsset } = useAssets();
  const [newAsset, setNewAsset] = useState({
    name: "",
    type: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAsset({ ...newAsset, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newAsset.name && newAsset.type && newAsset.description) {
      addAsset(newAsset);
      setNewAsset({ name: "", type: "", description: "" });
    }
  };

  return (
    <div className="page assets-page">
      <h2>Asset Management</h2>

      <form className="asset-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Asset Name"
          value={newAsset.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="type"
          placeholder="Asset Type"
          value={newAsset.type}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Asset Description"
          value={newAsset.description}
          onChange={handleChange}
          required
          rows={3}
        />
        <button type="submit" className="btn-primary">
          Add Asset
        </button>
      </form>

      {assets.length === 0 ? (
        <p className="empty-msg">No assets added yet.</p>
      ) : (
        <ul className="asset-list">
          {assets.map((asset, index) => (
            <li key={index} className="asset-card">
              <h3>{asset.name}</h3>
              <p>
                <strong>Type:</strong> {asset.type}
              </p>
              <p>{asset.description}</p>
              <NavLink to={`/assets/${index}`} className="details-link">
                View Details →
              </NavLink>
              <button
  className="btn-delete"
  onClick={() => {
    if (window.confirm("Are you sure you want to delete this asset?")) {
      deleteAsset(index);
    }
  }}
>
  Delete
</button>

            </li>
            
          ))}
        </ul>
      )}
    </div>
  );
}

export default AssetsPage;
