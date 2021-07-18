import React, { useEffect, useRef } from "react";

export function FocusInputUseRef() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} />
    </div>
  );
}

export default FocusInputUseRef;
