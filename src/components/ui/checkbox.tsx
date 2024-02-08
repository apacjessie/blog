import { useActiveTag } from "@/hooks/useActiveTag";
import { useState } from "react";

interface CheckboxProps extends React.ComponentPropsWithoutRef<"input"> {
  id: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, ...props }) => {
  const { activeTag, setActiveTag } = useActiveTag();
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChanges = () => {
    const tagExist = activeTag.find((tag) => tag === (props.value as string));
    if (tagExist) {
      setActiveTag(activeTag.filter((tag) => tag !== (props.value as string)));
      setIsChecked((prev) => (prev = false));
    } else {
      setActiveTag([...activeTag, props.value as string]);
      setIsChecked((prev) => (prev = true));
    }
  };

  return (
    <label
      htmlFor={id}
      className={`border-2 px-2 cursor-pointer relative rounded-sm
      ${isChecked ? "bg-blue-500 border-blue-500" : "dark:border-white border-black"}`}
    >
      <input
        id={id}
        type="checkbox"
        className="opacity-0 pointer-events-none absolute"
        checked={isChecked}
        onChange={handleChanges}
        {...props}
      />
      <span
        className={`${isChecked && "dark:text-black text-white"} select-none`}
      >
        {props.value}
      </span>
    </label>
  );
};

export default Checkbox;
