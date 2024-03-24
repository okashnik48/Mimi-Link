import React, { ReactNode } from "react";
import { Controller } from "react-hook-form";
import { Input } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";

export type Props = {
  control: any;
  name: string;
  placeholder: string;
  size: SizeType;
  prefix?: ReactNode;
  type: string;
};

export const CoreInput = ({
  size,
  placeholder = "Enter Response",
  ...rest
}: Props) => {
  return (
    <Controller
      name={rest.name}
      control={rest.control}
      
      render={({ field, fieldState }) => {
        return (
          <>
            <Input
              required
              size={size}
              placeholder={placeholder}
              status={fieldState.error ? "error" : ""}
              className={
                fieldState.invalid ? "custom-input error" : "custom-input"
              }
              {...field}
            />
            {fieldState.error && (
              <div style={{ color: "red", marginTop: "5px" }}>
                {fieldState.error.message}
              </div>
            )}
          </>
        );
      }}
    />
  );
};
