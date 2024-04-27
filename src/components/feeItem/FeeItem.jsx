import React from "react";
import { Accordion } from "flowbite-react";

const FeeItem = ({ entranceFeeType, cost, description }) => {
  return (
    <div className="flex flex-row justify-center items-center">
      <Accordion collapseAll className="w-full">
        <Accordion.Panel>
          <Accordion.Title>
            <p className="font-bold text-black">{entranceFeeType}</p>
            <p className="font-bold text-black">${cost}</p>
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              {description}
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default FeeItem;
