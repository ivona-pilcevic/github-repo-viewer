import { useState } from "react";
import { DropdownProps } from "../../types/types";
import {
  DropdownButton,
  DropdownContainer,
  DropdownItem,
  DropdownMenu,
} from "./style";

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onOptionChange,
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>{label}</DropdownButton>
      <DropdownMenu isOpen={isOpen}>
        {options?.map((option, index) => (
          <DropdownItem
            key={index}
            onClick={() => onOptionChange(option.value)}
          >
            {option.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default Dropdown;
