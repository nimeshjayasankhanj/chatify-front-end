import { Box, TextField, Typography } from "@mui/material";
import { Control, Controller } from "react-hook-form";

interface InputBoxProps {
  placeholder: string;
  name: any;
  type?: string;
  control: Control<any>;
  error: string | undefined;
}

export const InputBox = ({
  placeholder,
  name,
  control,
  error,
  type = "text",
}: InputBoxProps) => {
  return (
    <Box marginTop="20px">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            error={error ? true : false}
            id={name}
            label={placeholder}
            size="small"
            fullWidth
            type={type}
            {...field}
          />
        )}
      />
      <Typography variant="subtitle2" color="red">
        {error}
      </Typography>
    </Box>
  );
};
