import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import AppointmentsClient from "./AppointmentsClient";

export default async function AppointmentsPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/auth/signin");
  return <AppointmentsClient session={session} />;
}


