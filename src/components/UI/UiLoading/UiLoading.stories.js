import UiLoading from "./UiLoading";

export default {
  title: "Ui-Kit/UiLoading",
  component: UiLoading,
};

const props = {
  theme: "black",
  isShadow: false,
  classes: "",
};

const Template = (args) => <UiLoading {...args} />;

export const Light = Template.bind({});

Light.args = {
  ...props,
  theme: "light",
  isShadow: true,
};

export const Black = Template.bind({});

Black.args = {
  ...props,
  theme: "black",
};

export const Blue = Template.bind({});

Blue.args = {
  ...props,
  theme: "blue",
};
