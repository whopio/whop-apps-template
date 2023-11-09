import Image from "next/image";
import Link from "next/link";

const tasks = [
  {
    title: "Create your app on Whop",
    description:
      "To get started, create your App on Whop to get the credentials",
    href: "https://dev.whop.com/apps/overview",
  },
  {
    title: "Add your environment variables",
    description:
      "Add your environment variables to the project. This is required for the Whop SDK to function.",
    href: "https://dev.whop.com/apps/create-an-app#step-6-setup-your-environment-variables",
  },
  {
    title: "Learn about page variables",
    description:
      "Page variables allow you to access information about who the company is, and who the user using it is",
    href: "https://dev.whop.com/apps/views",
  },
  {
    title: "Learn how to authenticate users",
    description:
      "Learn how to authenticate users using the Whop SDK. This ensures only authenticated users can access your app.",
    href: "https://dev.whop.com/sdk/has-access",
  },
  {
    title: "Learn how to use our API",
    description:
      "Learn how to use our API to fetch information about the company, user, products, and more.",
    href: "https://dev.whop.com/sdk/api",
  },
  {
    title: "Sell your app on Whop",
    description:
      "Once you are done building your app, you can sell it on Whop to anyone in the world.",
    href: "https://dev.whop.com/apps/deploying",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">
            app/seller/.../page.tsx or app/user/.../page.tsx
          </code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://whop.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/WhopLogo.png"
              alt="Whop Logo"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      <div className="my-12 w-full lg:max-w-4xl flex flex-col items-center space-y-6">
        <h2 className="mb-3 text-3xl font-bold text-center">
          Getting Started:
        </h2>

        <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="relative p-4 border rounded-lg shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300"
            >
              <Link target="_blank" href={task.href}>
                <div className="flex">
                  <span className="mr-4 text-2xl font-bold ">{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 ">
                      {task.title}
                    </h3>
                    <p className=" opacity-80">{task.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
