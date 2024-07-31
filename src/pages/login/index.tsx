import useAuthHandlers from "../../hooks/auth.hook";
const LoginPage = () => {
  const { handleLogin } = useAuthHandlers();
  console.log("login page");
  return (
    <>
      <h1>Welcome to login page</h1>
      <div onClick={handleLogin}>Sign in with Outlook</div>
    </>
  );
};

export default LoginPage;
