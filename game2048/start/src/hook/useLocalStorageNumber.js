import React, { useState, useEffect } from 'react';

export default function useLocalStorageNumber(key, initialValue) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    //localStorage는 문자열만 저장
    const valueStr = window.localStorage.getItem(key);
    if (valueStr) {
      //값이 있을 때만 number로 변경하여 저장.
      setValue(Number(valueStr));
    }
  }, [key]);

  useEffect(() => {
    //localStorage는 문자열만 저장
    const prev = window.localStorage.getItem(key);
    const next = String(value);

    if (prev !== next) {
      window.localStorage.setItem(key, next);
    }
  }, [key, value]);

  return [value, setValue];
}
