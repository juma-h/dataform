import React from "react";
import FolderStructure from "../UI/FileStructure/FileStructure";
import "./content.css";

export default function Content() {
  const items = [
    {
      name: "models",
      children: [
        {
          name: "1_simple_examples",
          buttons: [
            { name: "SQL", label: "dataset_1", color: "#94a66c" },
            { name: "SQL", label: "dataset_2_with_ref", color: "#94a66c" },
          ],
          children: [
            { name: "dataset_1", children: [] },
            { name: "dataset_2_with_ref", children: [] },
          ],
        },
        {
          name: "2_advanced_examples",
          buttons: [
            { name: "SQL", label: "dataset_3_increase", color: "#94a66c" },
            { name: "JS", label: "dataset_4_increase", color: "#fcd672" },
          ],
          children: [
            { name: "dataset_3_increase", children: [] },
            { name: "dataset_4_increase", children: [] },
          ],
        },
        {
          name: "3_operations_and_assignments",
          buttons: [
            { name: "ops", label: "grant_access", color: "#538a97" },
            { name: "assert", label: "simple_assertion", color: "#c89375" },
          ],
          children: [
            { name: "grant_access", children: [] },
            { name: "simple_assertion", children: [] },
          ],
        },
      ],
    },
    {
      name: "models_2",
      children: [],
    },
  ];
  return (
    <div className="content">
      <div className="side-panel">
        <FolderStructure items={items} />
      </div>
      <div className="main-content">
        {/* Content for the main section */}
      </div>
    </div>
  );
  
}
