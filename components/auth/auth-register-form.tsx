import Button from "@/components/global/button";
import InputLabel from "@/components/auth/input-label";

const AuthRegisterForm = () => {
  return (
    <form className="space-y-4">
      <InputLabel />

      <Button destructive className="w-full">
        Continuar
      </Button>
    </form>
  );
};

export default AuthRegisterForm;
