import Button from "@/components/ui";
import { getCurrentAdminSession } from "@/lib/auth-session";
import { Plus } from "lucide-react";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await getCurrentAdminSession();

  if (!session) redirect("/");

  return (
    <div className="">
      <div className="bg-surface-elevated p-5 w-md max-w-md rounded-lg">
        <Button size="sm" variant="outline">
          <Plus />
          Create Project
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
