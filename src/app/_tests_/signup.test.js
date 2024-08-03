// __tests__/SignUp.test.tsx

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SignUp from "../path/to/your/SignUp"; // Adjust the import path

// Mock the signUpUser function and the useRouter hook
jest.mock("../utils/auth", () => ({
  signUpUser: jest.fn(() => Promise.resolve({ ok: true })),
}));

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

describe("SignUp Form", () => {
  test("should render the signup form with all fields", () => {
    render(<SignUp />);
    // Check for form fields
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/repeat password/i)).toBeInTheDocument();
    expect(
      screen.getByRole("checkbox", { name: /agree to terms/i })
    ).toBeInTheDocument();

    // Check for submit button
    expect(
      screen.getByRole("button", { name: /sign up/i })
    ).toBeInTheDocument();
  });

  test("should handle form submission successfully", async () => {
    const { signUpUser } = require("../utils/auth");
    const { useRouter } = require("next/navigation");
    const router = useRouter();

    render(<SignUp />);

    // Fill out the form
    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: "testuser" },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "testuser@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "password123" },
    });
    fireEvent.change(screen.getByLabelText(/repeat password/i), {
      target: { value: "password123" },
    });
    fireEvent.click(screen.getByRole("checkbox", { name: /agree to terms/i }));

    // Submit the form
    fireEvent.click(screen.getByRole("button", { name: /sign up/i }));

    // Wait for the asynchronous function to resolve
    await screen.findByText("Loading...");

    // Check if signUpUser was called with the correct arguments
    expect(signUpUser).toHaveBeenCalledWith({
      username: "testuser",
      email: "testuser@example.com",
      password: "password123",
      repeatedPassword: "password123",
      agreeTerms: true,
    });

    // Check if the router push method was called
    expect(router.push).toHaveBeenCalledWith("/");
  });
});
