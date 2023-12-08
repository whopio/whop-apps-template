import { PageProps } from "@/lib/types";
import { WhopAPI, authorizedUserOn, hasAccess } from "@whop-apps/sdk";
import { headers } from "next/headers";

export default async function Page({
  params: { experienceId },
}: PageProps<"experienceId">) {
  // Fetch information about experience
  const experience = await WhopAPI.app().GET("/app/experiences/{id}", {
    params: { path: { id: experienceId } },
    next: { revalidate: 3600 }, // Customize next revalidation logic
  });

  if (experience.isErr) {
    return <div>{experience.error.message}</div>;
  }

  // Ensure user is an admin of the company
  if (
    !(await hasAccess({
      to: authorizedUserOn(experience.data.company_id),
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

  // Render the page that allows admins to configure the content served to users
  return (
    <div>
      <h1>Configure Experience: {experience.data.name}</h1>
      <h3>Company: {experience.data.company_id}</h3>
      <p>
        Attached to products:{" "}
        {experience.data.product_ids.join(", ") || "None yet."}
      </p>
    </div>
  );
}
