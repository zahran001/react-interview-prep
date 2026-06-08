import data from "./data";
import { useEffect, useState } from "react";

export default function Accordion({ enableMultiSelect }) {
  const [activeId, setActiveId] = useState(null);
  // need to handle click event to toggle the active index

  // the array should hold only the ids of the panels that are currently open
  const [openIds, setOpenIds] = useState(Array(0));

  function handleSingleSelection(id) {
    setActiveId(activeId === id ? null : id);
  }

  function handleMultiSelection(id) {
    if (openIds.includes(id)) {
      // it's open → build a new array WITHOUT this id
      setOpenIds(openIds.filter((openId) => openId !== id));
    } else {
      // it's closed → build a new array WITH this id added
      setOpenIds([...openIds, id]);
    }
  }

  // reset via a useEffect
  // useEffect with a dependency - run it whenever enableMultiSelect changes
  useEffect(() => {
    // mode just changed -> clear both
    setActiveId(null);
    setOpenIds([]);
  }, [enableMultiSelect]); // runs whenever this prop changes

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h2
            onClick={() =>
              enableMultiSelect
                ? handleMultiSelection(item.id)
                : handleSingleSelection(item.id)
            }
          >
            {item.question}
          </h2>
          {(
            enableMultiSelect ? openIds.includes(item.id) : activeId === item.id
          ) ? (
            <p>{item.answer}</p>
          ) : null}
        </div>
      ))}
    </div>
  );
}
