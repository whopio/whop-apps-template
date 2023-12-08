import { PageProps } from "@/lib/types";
import { validateCheckoutSession, validateToken } from "@whop-apps/sdk";
import { headers } from "next/headers";

export default async function Page({
  params: { checkoutSessionId: unvalidatedCheckoutSessionId },
}: PageProps<"checkoutSessionId">) {
  // Validate the checkout session id
  const { checkoutSessionId } = await validateCheckoutSession({
    headers,
    checkoutSessionId: unvalidatedCheckoutSessionId,
  });

  // Get the current user id:
  // token could be null, if the user is not logged in yet
  const token = await validateToken({ headers, dontThrow: true });

  // Render a page that allows you to collect information for this checkout session
  // You can save this data to the validated `checkoutSessionId` and use it later

  // For example, you can correlate the checkout session with the checkout session
  // id returned in a webhook, sent on successfull checkout
  return (
    <div>
      <h1>Pre checkout view</h1>
      <h3>User Id: {token?.userId ?? "Not logged in"}</h3>
      <p>Checkout session id: {checkoutSessionId}</p>
    </div>
  );
}
