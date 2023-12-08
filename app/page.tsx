import {
  Badge,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  Link,
  Text,
  themeAccentColorsOrdered,
} from "frosted-ui";
import { ThemeSwitcherButton } from "./page.client";

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
    <div>
      <Container m="8">
        <Heading align="center">Getting started building your Whop App</Heading>
        <Grid
          my="8"
          gap="5"
          columns={{
            xs: "1",
            md: "2",
          }}
        >
          {tasks.map((task, index) => (
            <Card size="3" variant="classic" key={index}>
              <Flex direction="column" gap="4" height="100%">
                <Badge className="self-start">Step {index + 1}</Badge>
                <Flex direction="column" className="grow" gap="3">
                  <Heading>{task.title}</Heading>
                  <Text>{task.description}</Text>
                </Flex>
                <Link href={task.href} target="_blank">
                  <Button variant="classic" className="w-full">
                    View Docs
                  </Button>
                </Link>
              </Flex>
            </Card>
          ))}
        </Grid>

        <Flex direction="column" gap="2">
          <Heading size="3">
            Don&apos;t like this theme? Choose your own
          </Heading>
          <Flex gap="1" width="100%" className="overflow-auto">
            {themeAccentColorsOrdered.map((color) => (
              <ThemeSwitcherButton key={color} color={color} />
            ))}
          </Flex>
        </Flex>
      </Container>
    </div>
  );
}
