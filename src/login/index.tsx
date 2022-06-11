import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div>
      Login
      <br></br>
      <button
        onClick={() => {
          localStorage.setItem("token", "123");
          navigate("/");
        }}
      >
        登录
      </button>
    </div>
  );
}
