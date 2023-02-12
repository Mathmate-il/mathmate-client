import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import RoundedImage from '../components/RoundedImage/RoundedImage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/RoundedImage',
  component: RoundedImage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof RoundedImage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RoundedImage> = (args) => (
  <RoundedImage {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  src: '../assets/mockProfilePic.jpg',
  alt: '',
  width: '20',
  height: '20',
};
