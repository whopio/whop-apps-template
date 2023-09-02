import { validateToken } from "@whop-apps/sdk";
import { headers } from "next/headers";

export default async function AdminPage({
  params,
}: {
  params: { companyId: string; experienceId: string };
}) {
  await validateToken({ headers }); // This will ensure only authenticated users can access this page

  const companyId = params.companyId;
  const experienceId = params.experienceId;

  return (
    <div>
      Company ID: {companyId}
      Experience ID: {experienceId}
    </div>
  );
}
