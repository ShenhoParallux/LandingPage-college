import * as React from "react";
import { useState } from "react";

interface iFormData {
  name: string;
  tel: string;
  email: string;
}

type iStatus = "success" | "error" | "sending" | null;

export const UseSubmitForm = () => {
  const [formData, setFormData] = useState<iFormData>({
    name: "",
    tel: "",
    email: "",
  });
  const [status, setStatus] = useState<iStatus>(null);

  const resetFormData = () => setFormData({ name: "", email: "", tel: "" });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    const data: iFormData = {
      name: formData.name,
      tel: formData.tel,
      email: formData.email,
    };
    try {
      const response = await fetch(import.meta.env.VITE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(`Успешно отправлено: ${result}`);
      setStatus("success");
      resetFormData();
    } catch (err) {
      console.log(`Ошибка: ${err}`);
      setStatus("error");
    }
  };

  return { handleSubmit, formData, setFormData, status };
};
