import { DropdownProps } from "../../types/types";
import { StyledDropdown } from "./style";

const Dropdown: React.FC<DropdownProps> = ({ options, onOptionChange }) => {
  return (
    <StyledDropdown>
      {options.map((option) => (
        <p onClick={() => onOptionChange(option.value)}>{option.label}</p>
      ))}
    </StyledDropdown>
  );
};

export default Dropdown;
