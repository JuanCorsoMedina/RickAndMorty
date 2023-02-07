import React from "react";
import { useCounter } from "../hooks/useCounter";

export const NavPage = () => {
  const { increment, counter } = useCounter(1);
  return (
    <header>
      <p>Page: {counter}</p>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => {
          increment();
        }}
      >
        Next Page
      </button>
    </header>
  );
};
