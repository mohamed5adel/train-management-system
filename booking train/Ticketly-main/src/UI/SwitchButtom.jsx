import { useState } from 'react';
import PropTypes from 'prop-types';

const SwitchButtom = ({ onChange }) => {
    const [selected, setSelected] = useState('one-way'); // الحالة الافتراضية هي "رحلة ذهاب"

    const handleSelect = (value) => {
        setSelected(value);
        onChange(value); // استدعاء onChange من المكون الأب (GetTicket) لتحديث الحالة
    };

    return (
        <div className="flex space-x-4">
            {/* زر رحلة ذهاب */}
            <button
                onClick={() => handleSelect('one-way')}
                className={`px-6 py-2 rounded-full text-white font-semibold transition-colors ${
                    selected === 'one-way' ? 'bg-four' : 'bg-one'
                }`}
            >
one-way            </button>

            {/* زر رحلة ذهاب وعودة */}
            <button
                onClick={() => handleSelect('round-trip')}
                className={`px-6 py-2 rounded-full text-white font-semibold transition-colors ${
                    selected === 'round-trip' ? 'bg-four' : 'bg-one'
                }`}
            >
round-trip            </button>
        </div>
    );
};

// تعريف PropTypes للتأكد من أن onChange هو دالة
SwitchButtom.propTypes = {
    onChange: PropTypes.func.isRequired, 
};

export default SwitchButtom;
