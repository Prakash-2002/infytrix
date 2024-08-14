import React from 'react';

const DatePicker = ({ label, selectedDate, handleDateChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="date"
        value={selectedDate}
        onChange={e => handleDateChange(e.target.value)}
      />
    </div>
  );
};

export default DatePicker;
