import React from "react";
import FolderStructure from "../UI/FileStructure/FileStructure";
import "./content.css";
import SQLTerminal from "../UI/Terminal/Terminal.js";
import CustomTable from "../TableUi/TableUI";
import Aside from "../UI/Aside/Aside";
import FileTree from "../UI/FileTree/FileTree.js";
import Additional from "../UI/Top/Additional";

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
        },
        {
          name: "2_advanced_examples",
          buttons: [
            { name: "SQL", label: "dataset_3_increase", color: "#94a66c" },
            { name: "JS", label: "dataset_4_increase", color: "#fcd672" },
          ],
        },
        {
          name: "3_operations_and_assignments",
          buttons: [
            { name: "ops", label: "grant_access", color: "#538a97" },
            { name: "assert", label: "simple_assertion", color: "#c89375" },
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
      <div className="container-content">
        <div className="upper-row">
          <SQLTerminal />
          <div>
            <Aside />
          </div>
        </div>
        <div className="lower-row">
          <Additional />
          <div className="file-table-container">
            <div className="file-part" >
              <FileTree />
            </div>
            <div className="table-part">
              <CustomTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
