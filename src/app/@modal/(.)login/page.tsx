import LoginForm from "@/app/components/Form/LoginForm";
import Modal from "@/app/components/Modals/Modal";
import React from "react";

type Props = {};

function Login({}: Props) {
  return (
    <Modal>
      <LoginForm />
    </Modal>
  );
}

export default Login;
