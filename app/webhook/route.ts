import { makeWebhookHandler } from "@whop-apps/sdk";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

const handleWebhook = makeWebhookHandler();

export async function POST(req: NextRequest) {
  return handleWebhook(req, {
    membershipWentValid({ action, data }) {
      // Handle event here
      // This will automatically return success to the Whop server, so you don't need to return anything here

      console.log(action); // This will output "membership.went_valid"
      const userId = data.user_id;
      const membershipId = data.id;
    },

    membershipWentInvalid({ action, data }) {},

    paymentFailed({ action, data }) {},

    paymentSucceeded({ action, data }) {},

    appMembershipWentValid({ action, data }) {},

    appMembershipWentInvalid({ action, data }) {},

    appPaymentSucceeded({ action, data }) {},

    appPaymentFailed({ action, data }) {},
  });
}
