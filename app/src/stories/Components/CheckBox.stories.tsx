import { Story } from '@storybook/react/types-6-0';
import { StoryWrapper } from '@components/Common';
import CheckBox from '@components/CheckBox';

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
};

const Template: Story = ({ children }) => {
  return (
    <StoryWrapper>
      <CheckBox>{children}</CheckBox>
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: '여행용 여권 발급하기',
};

export const Example = Template.bind({});
Example.args = {
  children: '여행용 여권 발급하기',
};
