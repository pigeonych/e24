import { Flex, message } from "antd";
import { Form } from "./Form";

export const HomeForm = () => {
  return (
    <Flex
      className={"w-full justify-center flex-col desktop:flex-row"}
      align={"center"}
      gap={30}
    >
      <Flex vertical className={"py-10 desktop:max-w-lg w-full px-10"} gap={20}>
        <h1 className="text-4xl font-bold text-primary">
          E24 is waiting for You!
        </h1>
        <p className="text-lg">
          It's simple! If you: <br />— Know English and Russian languages <br />
          — Communicative <br />— Stress-resistant <br />— Problem-solving{" "}
          <br />
        </p>
        <Flex vertical gap={1}>
          <span>Send your CV to our mail:</span>
          <a
            href="mailto:sales@e24logs.com"
            onClick={() => {
              void navigator.clipboard.writeText("sales@e24logs.com");
              void message.success("Email copied to clipboard");
            }}
            className="underline"
          >
            sales@e24logs.com{" "}
          </a>
        </Flex>
        <p className={"text-xl text-primary"}>
          We are always glad for new cool employees!
        </p>
      </Flex>
      <Flex className={"w-full tablet:w-1/2 big:w-1/3"} justify={"center"}>
        <Form />
      </Flex>
    </Flex>
  );
};
