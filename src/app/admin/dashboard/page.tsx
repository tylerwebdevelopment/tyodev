import { getCurrentAdminSession } from "@/lib/auth-session";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await getCurrentAdminSession();

  if(!session) redirect('/');

  return <div>Dashboard</div>;
};

export default Dashboard;
