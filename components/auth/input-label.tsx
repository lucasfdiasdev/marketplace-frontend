import Input from "@/components/global/input";

const InputLabel = () => {
  return (
    <div className="space-y-2">
      <label htmlFor="" className="text-sm">
        E-mail
      </label>
      <Input type="text" placeholder="email@exemplo.com" />
    </div>
  );
};

export default InputLabel;
