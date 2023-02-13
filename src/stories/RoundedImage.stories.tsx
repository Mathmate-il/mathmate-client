import { ComponentStory, ComponentMeta } from '@storybook/react';
import RoundedImage from '../components/RoundedImage/RoundedImage';
import mockProfilePic from '../assets/mockProfilePic.jpg';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/RoundedImage',
  component: RoundedImage,
} as ComponentMeta<typeof RoundedImage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RoundedImage> = (args) => (
  <RoundedImage {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  src: mockProfilePic,
  alt: 'mock image',
  width: 350,
  height: 350,
};
