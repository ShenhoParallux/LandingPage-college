import * as React from "react";
import { useState } from "react";
import type { iFormData, iStatus } from "@/features/use-submit-form/model";
import {
  isValidEmail,
  isValidName,
  isValidPhoneNumber,
} from "@/features/use-submit-form/lib";

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

    if (!isValidName(formData.name)) {
      setStatus("notValidName");
      return;
    } else if (!isValidPhoneNumber(formData.tel)) {
      setStatus("notValidNumber");
      return;
    } else if (!isValidEmail(formData.email)) {
      setStatus("notValidEmail");
      return;
    }

    try {
      const response = await fetch(import.meta.env.VITE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        setStatus("error");
      } else {
        setStatus("success");
        resetFormData();
      }
    } catch (err) {
      console.log(err);
      setStatus("error");
    }
  };

  return { handleSubmit, formData, setFormData, status };
};
