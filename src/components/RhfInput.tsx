import React from "react";
import { FSInput } from "./FSInput";
import {
  useController,
  UseControllerProps,
  FieldValues,
} from "react-hook-form";

// Tという抽象的なジェンリクスを定義して、nameにはどんな値が来ても大丈夫なようにする
// さらにextendsでFieldValiuesを継承することでrhfの最低限のプロパティを引き継いでいる
export const RhfInput = <T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
}: UseControllerProps<T>) => {
  const {
    field: { ref, ...rest },
    fieldState: { invalid, isTouched, isDirty, error },
  } = useController<T>({ name, control, defaultValue, rules });

  return (
    <>
      <FSInput {...rest} />
      <p>{isTouched && "Touched"}</p>
      <p>{isDirty && "Dirty"}</p>
      <p>{invalid ? "invalid" : "valid"}</p>
      <p>{error ? error.message : "not error"}</p>
    </>
  );
};
