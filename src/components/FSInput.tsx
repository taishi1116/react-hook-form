import React from "react";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FSInput = ({ value, onChange }: Props) => {
  return <input value={value} onChange={onChange} />;
};
