import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/">登录后，可访问</Link>
      <br></br>
      <Link to="/show">登录后，包含有group1角色权限，可访问</Link>

      <br></br>
      <Link to="/admin">登录后，包含有admin角色权限，可访问</Link>
      <br></br>
      <button
        onClick={() => {
          let role = ["group1"];
          localStorage.setItem("role", JSON.stringify(role));
        }}
      >
        设置角色权限 - [group1]
      </button>
      <button
        onClick={() => {
          let role = ["admin"];
          localStorage.setItem("role", JSON.stringify(role));
        }}
      >
        设置角色权限 - [admin]
      </button>
      <button
        onClick={() => {
          localStorage.clear();
        }}
      >
        清空本地缓存
      </button>
      {/* 新增了Outlet，作用相当于{this.props.children} */}
      <Outlet />
    </div>
  );
}

export default App;
