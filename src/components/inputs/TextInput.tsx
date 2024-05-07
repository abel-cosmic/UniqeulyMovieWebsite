import React, { useState, useEffect } from "react";
import { Input } from "../ui/input";
import { Controller, useFormContext } from "react-hook-form";
import { z } from "zod";



const TextInput: React.FC<TextInputProps> = ({
  name,
  placeholder,
  isRequired = false,
  defaultValue,
  className,
  disabled = false,
}) => {
  const { control, formState, setValue, setError, trigger } = useFormContext();
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [defVal, setDefVal] = useState(defaultValue);

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(name, value);
    setDefVal(e.target.value);
    if (hasSubmitted) {
      await trigger(name);
    }

    const schema = z.string().min(2, { message: "Field is too short" });

    const validationResult = schema.safeParse(value);

    if (isRequired && value.trim() === "") {
      setError(name, {
        type: "required",
        message: "This field is required",
      });
    } else if (!validationResult.success) {
      setError(name, {
        type: "validation",
        message: validationResult.error.issues[0]?.message,
      });
    } else {
      setError(name, null as never);
    }
  };

  useEffect(() => {
    if (formState.isSubmitted) {
      setHasSubmitted(true);
    }
  }, [formState.isSubmitted]);

  return (
    <div>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue ?? ""}
        render={({ field }) => (
          <Input
            {...field}
            placeholder={placeholder}
            type="text"
            // defaultValue={defaultValue ?? ""}
            disabled={disabled}
            // Conditionally add the required attribute
            {...(isRequired ? { required: true } : {})}
            value={defVal}
            className={`w-full text-black focus-visible:ring-[0.4px] focus-visible:ring-primary focus-visible:ring-offset-0 border-slate-300 ${className}`}
            onChange={handleInputChange}
          />
        )}
      />
      {formState.errors[name] && (
        <p className="mt-2 text-sm text-red-500">
          {(formState.errors[name] as { message?: string })?.message}
        </p>
      )}
    </div>
  );
};

export default TextInput;
