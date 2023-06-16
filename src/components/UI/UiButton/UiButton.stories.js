import UiButton from "./UiButton";

export default {
  title: "Ui-Kit/UiButton",
  component: UiButton,
};

const props = {
  text: "Hello",
  onClick: console.log("Butoon is Click"),
  disabled: false,
  theme: "light",
  classes: '',
};

const Template = (args) => <UiButton {...args} />;

export const Light = Template.bind({});

Light.args = {
  ...props,
  theme: "light",
};

export const Dark = Template.bind({});

Dark.args = {
  ...props,
  theme: "dark",
};

export const Disabled = Template.bind({});

Disabled.args = {
  ...props,
  disabled: true,
};
