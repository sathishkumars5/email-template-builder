/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateFullHtml } from "./Htmlconvert";
import Modal from "./Modal";
import { useNotification } from "../../context/NotificationContext";
import useEditorContext from "../../hooks/useEditorContext";
import { handleShowPreview } from "../common/routeFunction";
import "./NavBar.css";
import {
  faMagnifyingGlass,
  faArrowUpFromBracket,
  faArrowLeft,
  faMobileScreenButton,
  faDisplay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { handleHomepage } from "../common/routeFunction";

const HeaderToolbar = () => {
  const navigate = useNavigate();
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [modalType, setModalType] = useState("html");
  const [modalTitle, setModalTitle] = useState("");
  const [htmlCode, setHtmlCode] = useState("");
  const [selectedView, setSelectedView] = useState("desktop");

  const { showSuccess, showError, showWarning } = useNotification();
  const {
    template,
    undo,
    redo,
    setSelected,
    templateName,
    setTemplateName,
    setWidthState,
  } = useEditorContext();

  const openPreviewModal = () => {
    const freshHtmlCode = generateFullHtml(template);
    setHtmlCode(freshHtmlCode);
    setModalType("preview");
    setModalTitle("HTML Preview");
    setPopupOpen(true);
  };

  const handleExport = () => {
    try {
      const freshHtmlCode = generateFullHtml(template);

      if (!freshHtmlCode || freshHtmlCode.trim() === "") {
        showWarning(
          "No content to export. Please add some blocks to your template first."
        );
        return;
      }

      setHtmlCode(freshHtmlCode);
      setModalType("html");
      setModalTitle("HTML Code Editor");
      setPopupOpen(true);
      showSuccess("HTML code generated successfully!");
    } catch (error) {
      console.error("Export error:", error);
      showError("Failed to generate HTML code. Please try again.");
    }
  };

  const testNotifications = () => {
    showSuccess("This is a success notification!");
    setTimeout(() => showWarning("This is a warning notification!"), 1000);
    setTimeout(() => showError("This is an error notification!"), 2000);
  };

  return (
    <div
      id="headerToolbarDiv"
      style={{ padding: "5px 30px", background: "#eee", textAlign: "center" }}
    >
      <div id="logoDiv">
        <div>
          <img src="/assets/sliceMailer.png" alt="logo" className="img-logo" />
        </div>
      </div>

      <div className="namebar">
        <button
          className="back-to-editor-btn"
          onClick={() => {
            handleHomepage(navigate);
            setSelected({ section: null, id: null });
          }}
        >
          {" "}
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        {/* <input type="text" value={templateName}  onChange={(e)=>setTemplateName(e.target.value)} placeholder='Enter Template name' className='input-style' /> */}
        <h3 className="input-style">{templateName}</h3>
      </div>
      <div id="undoRedoDiv">
        <button
          className="btnStyle undonBtn"
          onClick={() => {
            undo();
            setSelected({ section: null, id: null });
          }}
        >
          <img
            src="/assets/undo.png"
            alt="undo"
            className="undoImgage"
            // style={{ height: "20px", width: "20px", objectFit: "contain" }}
          />
          Undo
        </button>
        <button
          className="btnStyle redoBtn"
          onClick={() => {
            redo();
            setSelected({ section: null, id: null });
          }}
        >
          <img
            src="/assets/redo.png"
            alt="redo"
            className="redoImgage"
            // style={{ height: "20px", width: "20px" }}
          />
          Redo
        </button>
        {/* <button className='btnStyle' onClick={openPreviewModal}>PREVIEW MODAL</button> */}
        {/* <button className='btnStyle' onClick={testNotifications}>TEST NOTIFICATIONS</button>  */}
      </div>

      <div id="exportPreviewDiv">
        <button
          className={`respnsivebtn ${
            selectedView === "desktop" ? "active-view" : ""
          }`}
          onClick={() => {
            setWidthState({ mobile: false, desktop: true });
            setSelectedView("desktop");
          }}
        >
          <FontAwesomeIcon icon={faDisplay} className="view-toggle-button" />
        </button>

        <button
          className={`respnsivebtn ${
            selectedView === "mobile" ? "active-view" : ""
          }`}
          onClick={() => {
            setWidthState({ mobile: true, desktop: false });
            setSelectedView("mobile");
          }}
        >
          <FontAwesomeIcon
            icon={faMobileScreenButton}
            className="view-toggle-button"
          />
        </button>

        <button
          className="btnStyle"
          onClick={() => {
            handleShowPreview(navigate);
            setSelected({ section: null, id: null });
          }}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} /> Preview
        </button>

        <button
          className="mainBtnStyle btnStyle"
          onClick={() => {
            handleExport();
            setSelected({ section: null, id: null });
          }}
        >
          <FontAwesomeIcon icon={faArrowUpFromBracket} /> Export
        </button>
      </div>

      <Modal
        isOpen={isPopupOpen}
        onClose={() => setPopupOpen(false)}
        content={htmlCode}
        title={modalTitle}
        type={modalType}
        onSave={(content) => {
          try {
            console.log("Saved content:", content);
            showSuccess("Content saved successfully!");
          } catch (error) {
            console.error("Save error:", error);
            showError("Failed to save content. Please try again.");
          }
        }}
      />
    </div>
  );
};

export default HeaderToolbar;
