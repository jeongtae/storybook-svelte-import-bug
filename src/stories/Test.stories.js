import TestComponent from "./Test.svelte";

export default {
  title: "Test",
  component: TestComponent,
};

export const Test = ({ ...args }) => ({
  Component: TestComponent,
  props: args,
});
