import NavComponents from "./NavComponents";
import "./Block.css";

const BlockSelector = () => {
  return (
    <div className="sidebar left">
      <h3>Components</h3>
      <div id="components">
        <NavComponents />
      </div>
    </div>
  );
};

export default BlockSelector;
