import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { StoryWrapper } from '@components/Common';
import TravelPlanHeader from '@components/TravelPlanHeader';

export default {
  title: 'Components/TravelPlanHeader',
  component: TravelPlanHeader,
};

const Template: Story = ({
  title,
  destination,
  travelDate,
  onClickUpdate,
  onClickClone,
  onClickDelete,
}) => {
  return (
    <StoryWrapper>
      <TravelPlanHeader
        title={title}
        destination={destination}
        travelDate={travelDate}
        onClickUpdate={onClickUpdate}
        onClickClone={onClickClone}
        onClickDelete={onClickDelete}
      />
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: '두근두근 순기의 여행 일기',
  destination: '제주',
  travelDate: {
    startDate: '2022-01-21',
    endDate: '2022-01-23',
  },
  onClickUpdate: (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.target);
  },
  onClickClone: (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.target);
  },
  onClickDelete: (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.target);
  },
};
