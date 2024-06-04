import Input from "@/components/global/input";

interface IInputLabel {
  type: string;
  value: string;
  onChange: (value: string) => void;
  onBlur: (value: string) => void;
}

const InputLabel: React.FC<IInputLabel> = ({
  type,
  value,
  onChange,
  onBlur,
}) => {
  return (
    <div className="space-y-2">
      <label htmlFor="" className="text-sm">
        E-mail
      </label>
      <Input
        type={type}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        placeholder="email@exemplo.com"
      />
    </div>
  );
};

export default InputLabel;
