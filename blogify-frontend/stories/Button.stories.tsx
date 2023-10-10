import { Meta, StoryObj } from "@storybook/react";
import Button from "../components/Button";

export default {
  title: "Button",
  component: Button,
} as Meta;

interface ButtonProps {
  label: string;
  bgColor: string;
}

export const Primary: StoryObj = (args: ButtonProps) => <Button {...args} />;
Primary.args = {
  label: "Button",
  bgColor: "red",
};
