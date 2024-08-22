/* eslint-disable no-unused-vars */
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

const InputField = ({
  placeholder,
  label,
  handleChange,
  name,
  defaultValue,
  style,
  inputSize,
  select,
  children,
  labelStyles,
  value,
  ...props
}) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start',
      marginTop: 3,
      marginBottom: 3,
      ...style
    }}
  >
    <label
      htmlFor="input"
      style={{
        marginRight: 5,
        fontWeight: 'normal',
        color: 'black',
        ...labelStyles
      }}
    >
      {label}
    </label>
    {select ? (
      <TextField
        id="input"
        {...props}
        fullWidth
        select
        defaultValue={defaultValue}
        autoComplete="off"
        size="small"
        onChange={handleChange}
        value={value}
        name={name}
        style={{ minWidth: 50 }}
        placeholder={placeholder}
      >
        {children}
      </TextField>
    ) : (
      <TextField
        id="input"
        {...props}
        fullWidth
        defaultValue={defaultValue}
        autoComplete="off"
        size="small"
        onChange={handleChange}
        value={value}
        name={name}
        style={{ minWidth: 50 }}
        placeholder={placeholder}
      />
    )}
  </div>
);
InputField.propTypes = {
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  defaultValue: PropTypes.string,
  style: PropTypes.string,
  inputSize: PropTypes.string,
  select: PropTypes.string,
  children: PropTypes.string,
  labelStyles: PropTypes.string,
  value: PropTypes.string
};

export default InputField;
