# whop-apps-template

This template includes everything you need to get started building an app on Whop. It comes pre-installed with the [**Apps SDK**](https://dev.whop.com/sdk) which has all the tool you need to get building. It also comes preinstalled with [**Frosted UI**](https://github.com/whopio/frosted-ui/), our UI kit.

It uses [Next.js](https://nextjs.org/) with the app router. This is the recommended approach to building apps on Whop, but you can use any framework you like.

## Getting started

To use this template, you will need to make sure the `.env.local` file is populated with the correct values, the SDK needs these to work. You can find more information about where to get all of these values [**here**](https://dev.whop.com/apps/create-an-app#step-6-setup-your-environment-variables).

You can then start a local development server using the Whop Proxy:

```bash
yarn whop-proxy
# or
npm run whop-proxy
# or
pnpm whop-proxy
```

This is meant to be run inside Whop. To learn more about how to setup your app and test it locally, check out [**this guide**](https://dev.whop.com/apps/create-an-app#step-8-start-a-local-development-server).

---

## Pages

In the project, you will see 4 pages have been created:

- `/seller/[companyId]`

This is the **seller view**. It will be accessible by sellers on the Whop Dashboard under "Installed Apps". It is a great place to put any admin settings or configuration for your app.

- `/seller-product/[experienceId]`

This is the **seller product view**. It will be accessible by sellers on the Whop Dashboard after adding the app as an experience to one of their products. This view is specific to that experience.

- `/customer/[experienceId]`

This is the **customer view**. It will be accessible by customers on whop.com after adding purchasing a product with the app as an experience. This view is specific to that experience.

- `/before-checkout/[checkoutSessionId]`

This the **checkout view**. It will be accessible by customers when checking out a product on whop.com that has this app added to it.


To learn more about the different views, check out this [**list of views**](https://dev.whop.com/apps/views).

---

## Webhook Handler

In the `/webhook` route, there is a webhook handler using the Whop SDK. This is used to receive and handle any webhooks that get sent from Whop, such as when a membership goes valid, or a payment goes through.

To learn more about how the webhook functions work, head to the [**Webhooks Guide**](https://dev.whop.com/sdk/webhooks).

---

## iframe.ts

You will see in the `lib` folder, there is a file called `iframe.ts`. This sets up a background listener that is required for communication over **Post Message**. This allows you to call the function anywhere in the project and open external URLs.

---

## Further Reading

- [**Whop Developer Docs**](https://dev.whop.com/introduction)
- [**Whop Apps API Reference**](https://dev.whop.com/api-reference/v5/apps/overview)
- [**Whop Apps SDK**](https://dev.whop.com/sdk)

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). Before starting your work, make sure you update to the latest version of NextJS.

