import PropTypes from "prop-types";

const Desc = ({ des }) => {
  return (
    <>
      <p className="font-bold text-black ">{des}</p>
    </>
  );
};

Desc.propTypes = {
  des: PropTypes.string,
};

export default Desc;
