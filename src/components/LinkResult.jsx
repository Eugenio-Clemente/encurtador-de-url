import axios from "axios";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import PropTypes from "prop-types";

const LinkResult = ({ inputValue }) => {
  const [encurtadorLink, setEncurtadorLink] = useState("");
  const [copiado, setCopiado] = useState(false);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios(
          `https://api.shrtco.de/v2/shorten?url=${inputValue}`
        );
        setEncurtadorLink(res.data.result.full_short_link);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopiado(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [copiado]);

  if (loading) {
    return <p className="noData">Loading...</p>;
  }

  if (error) {
    return <p className="noData">Algo deu errado! </p>;
  }

  return (
    <>
      {encurtadorLink && (
        <div className="resultado">
          <p>{encurtadorLink}</p>

          <CopyToClipboard
            text={encurtadorLink}
            onCopy={() => setCopiado(true)}
          >
            <button className={copiado ? "copiado" : ""}>
              copiar para área de transferência
            </button>
          </CopyToClipboard>
        </div>
      )}
    </>
  );
};

LinkResult.propTypes = {
  inputValue: PropTypes.string,
};

export { LinkResult };
