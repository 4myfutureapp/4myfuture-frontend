import React from 'react';

function MobileRoadMap() {
  // const [stageZero, setStageZero] = React.useState(false);
  // const [stageOne, setStageOne] = React.useState(false);
  // const [stageTwo, setStageTwo] = React.useState(false);
  // const [stageThree, setStageThree] = React.useState(false);
  // const [stageFour, setStageFour] = React.useState(false);
  return (
    <div className="flex flex-row bg-blue-700 h-screen w-full items-center justify-center">
      {/* <div className="flex flex-row items-center justify-end">
          <div className="flex flex-col w-24 h-32 justify-center items-center">
              <p className={`text-white text-md font-regular`}>Stage 1</p>
              { stageOne ? (<ul className={`${stageOne ? 'text-white' : 'text-blue-700'} list-disc font-extralight text-sm`}>
                <li>Frontend & UI/UX</li>
                <li>First NFTs</li>
                <li>V2 Contract for Frontend</li>
                <li>Whitelist Android Token</li>
              </ul>): (null)}
            </div>
            <button 
              type="button" 
              className={`${stageOne ? 'bg-yellow-300': null } w-10 h-10 rounded-full border-4 hover:bg-yellow-300 border-white`}
              onClick={()=> {setStageOne(!stageOne)}} 
            />
            <div className="h-1  w-8 bg-white" />
      </div> */}
      <div className="flex flex-row">
        <div className="h-1 w-4 bg-white" />
        <button />
      </div>
      <div className="w-1 h-3/4 bg-white" />
    </div>
  );
}

export default MobileRoadMap;