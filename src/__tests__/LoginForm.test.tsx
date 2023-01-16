import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";

import LoginForm, { Props } from "../LoginForm";

describe("<LoginForm />", () => {
  test("should display a blank login form, with remember me checked by default", async () => {
    const { findByTestId } = renderLoginForm();

    const loginForm = await findByTestId("login-form");
  
    expect(loginForm).toHaveFormValues({
      username: "",
      password: "",
      remember: true
    });
  });
});

function renderLoginForm(props: Partial<Props> = {}) {
  const defaultProps: Props = {
    onPasswordChange() {
      return;
    },
    onRememberChange() {
      return;
    },
    onUsernameChange() {
      return;
    },
    onSubmit() {
      return;
    },
    shouldRemember: true
  };
  return render(<LoginForm {...defaultProps} {...props} />);
}