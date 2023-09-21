This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting started

This template includes everything you need to get started building an app on Whop. It comes pre-installed with the [**Apps SDK**](https://apps.whop.com/sdk) which has all the tool you need to get building.

To use this template, you will need to make sure the `.env.local` file is populated with the correct values, the SDK needs these to work. You can find more information about where to get all of these values [**here**](https://apps.whop.com/apps/environment#environment-variables)

This is meant to be ran inside of Whop, to learn more about how to setup your app and test it locally, check out [**this guide**](https://apps.whop.com/apps/testing)

---

## Pages

In the project, you will see 2 pages have been created, `admin` and `user`

The `admin` and `user` routes are what the people using the app will see. `admin` will be for the people using your app on the Whop Dashboard, and the `user` is the consumer using it from whop.com.

To learn more about the functions used in the pages, head to the [**Page Setup Guid**e](https://apps.whop.com/apps/page-setup)

---

## Webhook Handler

In the `/webhook` route, there is a webhook handler using the Whop SDK. This is used to receive and handle any webhooks that get sent from Whop, such as when a membership goes valid, or a payment goes through.

To learn more about how the webhook functions work, head to the [**Webhooks Guide**](https://apps.whop.com/sdk/webhooks)

---

## iframe.ts

You will see in the `lib` folder, there is a file called `iframe.ts`. This sets up a background listener that is required for communication over **Post Message**. This allows you to call the function anywhere in the project and open external URLs.

You can see an example of how to use this in the `OpenButton.tsx` file, where we are opening `google.com` once the button is clicked.
