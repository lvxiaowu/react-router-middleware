import { useEffect } from "react";
export default function Admin() {
  useEffect(() => {
    console.log("页面加载完成");
  }, []);
  return <div>admin - 登录后，包含有admin角色权限，可访问</div>;
}
