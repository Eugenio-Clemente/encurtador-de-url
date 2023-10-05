import { useState } from "react";
import PropTypes from "prop-types";

const InputEncurtador = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  };

  return (
    <div className="inputContainer">
      <h1>
        URL <span>Encurtador</span>
      </h1>

      <div>
        <input
          type="text"
          placeholder="Informe o link para encurtá-lo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleClick}>Encurtar</button>
      </div>
    </div>
  );
};

InputEncurtador.propTypes = {
  setInputValue: PropTypes.func,
};

export { InputEncurtador };
