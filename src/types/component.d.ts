type InputProps = {
    name: string;
    placeholder: string;
    className?: string;
    disabled?: boolean | undefined;
  };
  type TextInputProps = {
    name: string;
    placeholder: string;
    isRequired?: boolean;
    defaultValue?: string;
    className?: string;
    disabled?: boolean;
  };
  type SearchInput = {
    search: string;
    className?: string;
  };