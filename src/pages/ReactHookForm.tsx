import React from "react";
import { useForm } from "react-hook-form";
import { RhfInput } from "../components/RhfInput";

type NewPostInput = {
  lastName: string;
  firstName: string;
};

export const ReactHookForm = () => {
  const { control, handleSubmit } = useForm<NewPostInput>({
    mode: "onSubmit",
  });
  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <RhfInput
        name="lastName"
        control={control}
        // これより下記はControllerの初期設定
        defaultValue={"aa"}
        rules={{
          required: true,
          minLength: { value: 5, message: "min error" },
        }}
      />
      <RhfInput
        name="firstName"
        control={control}
        defaultValue={"sd"}
        rules={{ required: true }}
      />

      <button type="submit">保存</button>
    </form>
  );
};
