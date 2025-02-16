import PropTypes from "prop-types";

const TheTitle = ({tit}) => {
    return (
        <>
          <h3 className="text-3xl font-mediumk mb-3 mt-1 text-three">{tit}</h3>
        </>
      );
    };
 
        TheTitle.propTypes = {
      tit: PropTypes.string,
    };
export default TheTitle
