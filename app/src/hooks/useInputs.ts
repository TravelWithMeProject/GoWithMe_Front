import React, { useState, useCallback, ChangeEventHandler } from 'react';


type ReturnType<T> = [
  T,
  ((e: any) => void),
  React.Dispatch<React.SetStateAction<T>>,
  (() => void)
];

const useInput = <T>(initialValue: T): ReturnType<T>  => {
  const [formValues, setFormValues] = useState<T>(initialValue);

  const onChange = useCallback((e: any) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  }, [formValues]);

  const onReset = useCallback(() => {
    setFormValues(initialValue);
  }, []);

  return [formValues, onChange, setFormValues, onReset];
} 

export default useInput;