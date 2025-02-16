import PropTypes from 'prop-types';

const Schedule = ({ title, value, onChange }) => {
  return (
    <div className="mb-4">  {/* إضافة هامش أسفل الحقل */}
      <label 
        className="block text-lg font-semibold mb-2 text-gray-700"  
      >
        {title}
      </label>
      <input 
        type="date" 
        value={value} 
        onChange={(e) => onChange(e.target.value)} 
        className="w-full  border focus:border-amber-400 rounded-full p-2 text-lg"  
      />
    </div>
  );
};

Schedule.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Schedule;
