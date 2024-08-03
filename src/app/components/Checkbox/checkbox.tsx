"use client";
import React from "react";

function Checkbox() {
  return (
    <div className="flex items-center gap-4">
      <input required type="checkbox" name="agreeTerms" />
      <label className="text-sm" htmlFor="agreeTerms">
        I agree to the terms and conditions
      </label>
    </div>
  );
}

export default Checkbox;
