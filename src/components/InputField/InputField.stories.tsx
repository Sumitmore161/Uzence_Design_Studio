import type { Meta, StoryObj } from "@storybook/react-vite";
import { InputField } from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: "Name",
    placeholder: "Enter your name",
    helperText: "This is a helper text",
  },
};

export const Invalid: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    invalid: true,
    errorMessage: "Invalid email address",
  },
};

export const Disabled: Story = {
  args: {
    label: "Username",
    placeholder: "Disabled field",
    disabled: true,
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-3">
      <InputField label="Filled" placeholder="..." variant="filled" />
      <InputField label="Outlined" placeholder="..." variant="outlined" />
      <InputField label="Ghost" placeholder="..." variant="ghost" />
    </div>
  ),
};
