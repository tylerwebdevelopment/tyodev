import React, { InputHTMLAttributes } from "react";
import { IconType } from "react-icons";
// Icon Input Props
interface InputIconProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: IconType;
  side?: "left" | "right";
  invalid?: true | false;
}

const InputIcon: React.FC<InputIconProps> = ({
  icon: Icon,
  side = "left",
  invalid,
  ...props
}) => {
  const styles = {
    left: {
      icon: "top-2.5 left-1.5",
      input: "py-1.5 pl-8",
    },
    right: {
      icon: "top-2.5 right-1.5",
      input: "py-1.5 pr-8",
    },
  };

  const iconClass = styles[side].icon;
  const inputClass = styles[side].input;

  return (
    <div
      className={`input-icon relative focus-within:text-primary-600 text-text-muted ${invalid ? "focus-within:text-red-300" : ""}`}
    >
      {Icon && (
        <Icon
          className={`absolute transition-colors duration-300 size-5 ${iconClass}`}
        />
      )}
      <input
        {...props}
        autoComplete="off"
        className={`input-control min-w-full placeholder:text-text-muted/80 ${props.className} ${invalid ? 'input-control-invalid' : ''} control-icon ${Icon ? inputClass : ""}`}
      />
    </div>
  );
};

export default InputIcon;
