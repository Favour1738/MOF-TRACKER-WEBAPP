import React, { useEffect, useState } from "react";
import "./Form.css";

function AddAsset({ onAdd, assetToEdit }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [assignedTo, setAssignedTo] = useState("");

  useEffect(() => {
    if (assetToEdit) {
      setName(assetToEdit.name);
      setType(assetToEdit.type);
      setAssignedTo(assetToEdit.assignedTo || "");
    }
  }, [assetToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAsset = {
      id: assetToEdit?.id || Math.floor(Math.random() * 10000),
      name,
      type,
      assignedTo
    };
    onAdd(newAsset);
    setName("");
    setType("");
    setAssignedTo("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>{assetToEdit ? "Edit Asset" : "Add New Asset"}</h3>
      <input
        type="text"
        placeholder="Asset Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Asset Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Assigned To"
        value={assignedTo}
        onChange={(e) => setAssignedTo(e.target.value)}
      />
      <button type="submit">{assetToEdit ? "Update Asset" : "Add Asset"}</button>
    </form>
  );
}

export default AddAsset;
