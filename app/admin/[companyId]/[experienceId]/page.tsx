import { validateToken } from "@whop-apps/sdk";
import { headers } from "next/headers";
import Link from "next/link";

export default async function AdminPage({
  params,
}: {
  params: { companyId: string; experienceId: string };
}) {
  try {
    await validateToken({ headers }); // This will ensure only authenticated users can access this page
  } catch (error) {
    return (
      <div className="h-screen flex flex-col items-center justify-center space-y-4">
        <p>
          If you are the developer, make sure to develop within the Whop iFrame
          so the cookies are set correctly.
        </p>
        <span>
          For more information, check out{" "}
          <Link
            href="https://dev.whop.com/apps/create-an-app"
            className="text-blue-500 underline hover:text-blue-700"
          >
            this guide
          </Link>{" "}
        </span>
      </div>
    );
  }

  const companyId = params.companyId;
  const experienceId = params.experienceId;

  return (
    <div>
      Company ID: {companyId}
      Experience ID: {experienceId}
    </div>
  );
}
