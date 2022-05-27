/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface ImageSelectorProps {
  list: any[];
}

function ImageSelector({list}:ImageSelectorProps) {
  const [selected, setSelected] = React.useState(list[0].img)
  return (
    <div className="w-full flex flex-col ml-20 mt-10">
      <div className="w-9/12 h-96 overflow-clip flex justify-center items-center rounded-xl">
        <img alt="mainImg" src={selected} className="w-full h-full object-cover" />
      </div>
      <div className="w-9/12 overflow-x-scroll gap-x-5 mt-5 flex flex-row">
        {list.map((item)=>(
          <button className={`${selected==item.img ? "opacity-100": "opacity-50"} w-24 h-24 overflow-clip flex justify-center items-center rounded-xl`} key={item.key} onClick={()=> setSelected(item.img)}>
            <img alt="img-1" src={item.img} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ImageSelector;