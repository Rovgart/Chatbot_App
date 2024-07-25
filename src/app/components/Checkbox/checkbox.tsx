"use client";
import React, { FormEvent, useEffect, useState } from "react";

type Props = {};

function Checkbox({ isCheckedProp }: { isCheckedProp: boolean }) {
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
