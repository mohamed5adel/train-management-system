const SchedulePicker= ({ title, value, onChange }) => {
  return (
      <div>
          <label>{title}</label>
          <input 
              type="date" 
              value={value} 
              onChange={(e) => onChange(e.target.value)} 
              className="w-[80%] md:w-[20%] border focus:border-amber-400 rounded-full"
          />
      </div>
  );
};

SchedulePicker.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SchedulePicker;
