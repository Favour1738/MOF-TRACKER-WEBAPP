import React from "react";
import { useParams } from "react-router-dom";
import useAssets from "../hooks/useAssets";

function AssetDetails() {
  const { id } = useParams();
  const { assets } = useAssets();

  const asset = assets[parseInt(id)];

  if (!asset) return <p>Asset not found.</p>;

  return (
    <div className="page">
      <h2>Asset Details</h2>
      <p><strong>Name:</strong> {asset.name}</p>
      <p><strong>Type:</strong> {asset.type}</p>
      <p><strong>Description:</strong> {asset.description}</p>
    </div>
  );
}

export default AssetDetails;
