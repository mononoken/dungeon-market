import { useState, useEffect } from "react";

function getSavedValue<T>(key: string, initialValue: T | (() => T)) {
  const savedValue = JSON.parse(localStorage.getItem(key) ?? "null");
  if (savedValue) return savedValue;

  return initialValue instanceof Function ? initialValue() : initialValue;
}

function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
