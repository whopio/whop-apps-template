import { validateToken } from "@whop-apps/sdk";
import { headers } from "next/headers";

export default async function AdminPage({
  params,
}: {
  params: { membershipId: string; experienceId: string };
}) {
  await validateToken({ headers }); // This will ensure only authenticated users can access this page

  const membershipId = params.membershipId;
  const experienceId = params.experienceId;

  return (
    <div>
      Membership ID: {membershipId}
      Experience ID: {experienceId}
    </div>
  );
}
