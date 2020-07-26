import React from "react";
import ExperiencesBlock from "./experiencesBlock/ExperiencesBlock";
import { List } from "antd";

const RightSide = () => {
  const experiencesBlocks = [
    {
      title: "Education",
      experiences: [
        {
          date: "01/2020 - now",
          title: "Company name",
          description: "skdsjkdjskdjskjdksjdskjdskjdskjdskjdks"
        },
        {
          date: "01/2020 - now",
          title: "Company name",
          description: "skdsjkdjskdjskjdksjdskjdskjdskjdskjdks"
        }
      ]
    }
  ];

  return (
    <div>
      <List
        size="small"
        dataSource={experiencesBlocks}
        split={false}
        renderItem={item => (
          <List.Item>
            <ExperiencesBlock
              title={item.title}
              experiences={item.experiences}
            />
          </List.Item>
        )}
      />
    </div>
  );
};
export default RightSide;
