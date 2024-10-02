import { Input } from "../ui/input";
import { Label } from "../ui/label";

type inputType = {
  id?: string;
  label?: string;
  placeholder?: string;
  name: string;
  isRequired?: boolean;
};

const InputCmp = (props: inputType) => {
  const { id, label, placeholder, name, isRequired } = props;
  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input
        name={name}
        required={isRequired}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputCmp;
