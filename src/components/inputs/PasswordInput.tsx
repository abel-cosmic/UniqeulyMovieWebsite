import React, { useState } from "react";
import { Input } from "../ui/input";
import { Controller, useFormContext } from "react-hook-form";
import {Eye, EyeOff} from "lucide-react";



const PasswordInput: React.FC<InputProps> = ({
  name,
  placeholder,
  className,
  disabled
}) => {
  const { control, setValue, setError } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(name, value);

    try {
      setError(name, null as any);
    } catch (error: any) {
      setError(name, { message: error.issues[0]?.message });
    }
  };

  return (
    <div className="relative">
      <Controller
        name={name} // Use the correct name prop
        control={control}
        defaultValue=""
        render={({}) => (
          <Input
            required
            placeholder={placeholder}
            type={showPassword ? "text" : "password"}
            className={`text-black pr-24 focus-visible:ring-[0.4px] focus-visible:ring-primary focus-visible:ring-offset-0 ${className}`}
            onChange={handleInputChange}
            disabled={disabled}
          />
        )}
      />
      <div className="absolute transform -translate-y-1/2 cursor-pointer top-1/2 right-3">
        {showPassword ? (
          <EyeOff
            onClick={togglePasswordVisibility}
            className="w-5 h-5 text-primary"
          />
        ) : (
          <Eye
            onClick={togglePasswordVisibility}
            className="w-5 h-5 text-primary"
          />
        )}
      </div>
    </div>
  );
};

export default PasswordInput;
