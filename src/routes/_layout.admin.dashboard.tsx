import { useUser } from "@/actions/action";
import pb from "@/lib/pocketbase";
import { Button } from "@radix-ui/themes";
import {
  createFileRoute,
  Link,
  Outlet,
  redirect,
  useLocation,
  useNavigate,
} from "@tanstack/react-router";
import { Bell, File, Inbox, User } from "lucide-react";

export const Route = createFileRoute("/_layout/admin/dashboard")({
  beforeLoad: async () => {
    const auth = pb.authStore.token;
    if (!auth) {
      throw redirect({ to: "/admin" });
    }
  },
  component: () => (
    <main className="min-h-screen ">
      <AdminSideBar />
      <div className="md:p-6">
        <Outlet />
      </div>
    </main>
  ),
});

function AdminSideBar() {
  const { data, isPending } = useUser();
  const navigate = useNavigate();
  const loc = useLocation();

  return (
    <div className="flex mt-10 justify-between items-center gap-2 px-4">
      <div className="flex gap-4">
        <Link to="/admin/dashboard">
          <Button variant={loc.href === "/admin/dashboard" ? "soft" : "solid"}>
            <Inbox size={16} />
            Inbox
          </Button>
        </Link>
        <Link to="/admin/dashboard/anouncements">
          <Button
            variant={
              loc.href === "/admin/dashboard/anouncements" ? "soft" : "solid"
            }
          >
            <Bell size={16} />
            Anouncement
          </Button>
        </Link>
        <Link to="/admin/dashboard/applications">
          <Button
            variant={
              loc.href === "/admin/dashboard/applications" ? "soft" : "solid"
            }
          >
            <File size={16} />
            Applications
          </Button>
        </Link>
      </div>

      <div className="flex gap-4">
        <Button loading={isPending} variant="outline" className="justify-start">
          <User />
          {data?.email}
        </Button>
        <Button
          color="red"
          onClick={async () => {
            pb.authStore.clear();
            navigate({ to: "/admin", replace: true });
          }}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}
