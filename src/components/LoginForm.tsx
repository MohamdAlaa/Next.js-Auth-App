import { login } from "@/actions";

const LoginForm = () => {
  return (
    <form action={login}>
      <input type="text" name="username" placeholder="Enter User Name" />
      <input
        type="password"
        name="password"
        placeholder="Enter User Password"
      />
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
