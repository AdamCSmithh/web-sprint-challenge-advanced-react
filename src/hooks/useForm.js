import React from "react";
import { useState } from "react"

export const useForm = () => {
  const [values, setValues] = useState()

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return [values, setValues, handleChanges]
}
