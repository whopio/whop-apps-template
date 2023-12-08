import { PageProps } from "@/lib/types";
import { WhopAPI, authorizedUserOn, hasAccess } from "@whop-apps/sdk";
import { headers } from "next/headers";

export default async function Page({
  params: { companyId },
}: PageProps<"companyId">) {
  // Ensure user is an admin of the company
  if (
    !(await hasAccess({
      to: authorizedUserOn(companyId),
      headers,
    }))
  ) {
    return (
      <div>
        You are not authorized to view this page. You must be an admin of the
        company. (Make sure you are developing in the whop.com iframe if
        testing)
      </div>
    );
  }

  // Fetch information about experience
  const company = await WhopAPI.app().GET("/app/companies/{id}", {
    params: { path: { id: companyId } },
    next: { revalidate: 3600 }, // Customize next revalidation logic
  });

  if (company.isErr) {
    return <div>{company.error.message}</div>;
  }

  // Render the page that allows admins to manage settings / configuration for
  // the company. This is the main page for your app on the company's dashboard.
  // Eg: It is not scoped down to a single experience.
  return (
    <div>
      <h1>Manage settings on: {company.data.title}</h1>
      <p>Company: {company.data.id}</p>
    </div>
  );
}
