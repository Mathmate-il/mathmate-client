import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TabsControl, TabItem } from '../components/TabsControls/TabsControl';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/TabsControl',
  component: TabsControl,
} as ComponentMeta<typeof TabsControl>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TabsControl> = () => (
  <TabsControl>
    <TabItem label="label 1">
      <div style={{ color: 'black' }}>content 1</div>
    </TabItem>
    <TabItem label="label 2">
      <div style={{ color: 'black' }}>content 2</div>
    </TabItem>
  </TabsControl>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
