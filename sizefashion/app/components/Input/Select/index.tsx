import { ISelectInputOptions } from '@interfaces/ISelectInputOptions';
import React from 'react';

interface ISelectInputProps {
  label?: string;
  placeholder?: string;
  options: ISelectInputOptions[];
  value: string;
  onChange: (selectedValue: string) => void;
}

const SelectInput: React.FC<ISelectInputProps> = ({
  label,
  options,
  placeholder,
  value,
  onChange,
}) => {

  return (
    <div>
      {label && <label htmlFor="sortSelect" className='text-blue-100 mr-0.5 text-sm'>{label}</label>}
      <select
        id="sortSelect"
        value={value}
        onChange={({ currentTarget }) => onChange(currentTarget.value)}
        className="text-blue-100 bg-gray-700 border-0 px-2 py-1 m-2"
        placeholder={placeholder}
      >
        {options.map((option, key) => <option key={key} value={option.value} style={{ borderRadius: 0 }}>{option.label}</option>)}
      </select>
    </div>
  );
};

export default SelectInput;
