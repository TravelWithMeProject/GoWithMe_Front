import React from 'react';

interface Props {
  title: string;
  content: string;
}
const StoryBookExample = ({ title, content }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default StoryBookExample;
