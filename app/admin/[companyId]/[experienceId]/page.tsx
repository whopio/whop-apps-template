import { validateToken, whopJson } from "@whop-apps/sdk";
import { headers } from "next/headers";

export default async function AdminPage({
  params,
}: {
  params: { companyId: string; experienceId: string };
}) {
  try {
    await validateToken({ headers }); // This will ensure only authenticated users can access this page
  } catch (error) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <p>
          If you are the developer, make sure to develop within the Whop iFrame
          so the cookies are set correctly.
        </p>
      </div>
    );
  }

  const companyId = params.companyId;
  const experienceId = params.experienceId;

  const authenticatedUser = await whopJson("/me", { headers }); // Using the Whop SDK to fetch information about the authenticated user
  const { email, profile_pic_url, id, username } = authenticatedUser; // Destructuring the response

  // return (
  //   <div>
  //     <p>Company ID: {companyId}</p>
  //     <p>Experience ID: {experienceId}</p>
  //     <p>User: Email: {email}</p>
  //     <p>Username: {username}</p>
  //   </div>
  // );

  return <div>Developer mode works!</div>;
}
