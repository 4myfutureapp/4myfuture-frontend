/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface ImageSelectorProps {
  list: any[];
}

function ImageSelector({list}:ImageSelectorProps) {
  const [selected, setSelected] = React.useState(list[0].img)
  return (
    <div className="w-full flex md:flex-col flex-row md:ml-20 ml-8 md:mt-10 mt-5 gap-x-5">
      <div className="md:w-9/12 w-8/12 md:h-96 h-72 overflow-clip flex justify-center items-center rounded-xl">
        <img alt="mainImg" src={selected} className="w-full h-full object-cover" />
      </div>
      <div className="md:w-9/12 overflow-x-scroll gap-x-5 gap-y-2 md:mt-5 flex md:flex-row flex-col">
        {list.map((item)=>(
          <button className={`${selected==item.img ? "opacity-100": "opacity-50"} md:w-24 w-16 md:h-24 h-16 overflow-clip flex justify-center items-center rounded-xl`} key={item.key} onClick={()=> setSelected(item.img)}>
            <img alt="img-1" src={item.img} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ImageSelector;