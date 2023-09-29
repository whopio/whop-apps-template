import { validateToken, WhopAPI, hasAccess } from "@whop-apps/sdk";
import { headers } from "next/headers";
import OpenButton from "@/components/OpenButton";

export default async function UserPage({
  params,
}: {
  params: { productId: string };
}) {
  try {
    const { userId } = await validateToken({ headers });

    const access = await hasAccess({ to: params.productId, headers }); // Checking if the user has access to the product

    if (!access) {
      return <p>You do not have access to this product</p>;
    }

    const user = await WhopAPI.me({ headers }).GET("/me", {});

    return (
      <div className="pt-5 space-y-2">
        <p>User ID: {userId}</p>
        <p>Username: {user.data?.username}</p>
        <p>Email: {user.data?.email}</p>
        <p>Product ID: {params.productId}</p>
        <OpenButton />
      </div>
    );
  } catch (error) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <p>
          If you are the developer, make sure you are developing in the iFrame.
          For more details, head {""}
          <a
            className="underline text-blue-500"
            href="https://apps.whop.com/apps/environment"
            target="_blank"
          >
            here
          </a>
        </p>
      </div>
    );
  }
}
