import React from "react";
import Fade from "react-reveal";
import messages from './messages.json'

export default function RoadMap({lang}) {
  const [stageZero, setStageZero] = React.useState(false);
  const [stageOne, setStageOne] = React.useState(false);
  const [stageTwo, setStageTwo] = React.useState(false);
  const [stageThree, setStageThree] = React.useState(false);
  const [stageFour, setStageFour] = React.useState(false);

  const textReturn = (lang, value) =>{
    var results = [];
    if(lang == 'en'){
    results.push(messages.en[0][value]);
    }else {  
    results.push(messages.es[0][value]);
    }
    return results    
  }

  return (
    <div className="w-full h-screen bg-blue-700 flex relative">
      <Fade left cascade>
        <div className="flex flex-col absolute w-full h-full">
          <p className="text-white md:text-2xl text-md font-extralight md:ml-24 ml-16 md:mt-40 mt-20">
          {textReturn(lang,'Our')}
          </p>
          <p className="text-white md:text-4xl text-xl font-regular md:ml-24 ml-16">
            RoadMap
          </p>
        </div>
      </Fade>
      <div className="w-full h-full flex md:flex-col flex-row relative items-center justify-center">
        <div className="flex md:flex-row flex-col w-full md:justify-evenly gap-y-40">
          <div className="flex md:flex-col flex-row items-center justify-end">
            <div className="flex flex-col md:mb-10 mb-0 md:w-60 w-24 h-32 md:justify-end justify-center md:items-center">
              <p className={`text-white md:text-xl text-md font-regular`}>
                Stage 1
              </p>
              {stageOne ? (
                <Fade bottom>
                  <ul
                    className={`text-white list-disc font-extralight md:text-base text-sm md:mt-0 mt-5 md:ml-7`}
                  >
                    <li> {textReturn(lang,'Stage11')}</li>
                    <li> {textReturn(lang,'Stage12')}</li>
                    <li> {textReturn(lang,'Stage13')}</li>
                    <li> {textReturn(lang,'Stage14')}</li>
                  </ul>
                </Fade>
              ) : null}
            </div>
            <button
              type="button"
              className={`${
                stageOne ? "bg-yellow-300" : null
              } w-10 h-10 rounded-full border-4 hover:bg-yellow-300 border-white`}
              onClick={() => {
                setStageOne(!stageOne);
              }}
            />
            <div className="md:h-16 h-1 md:w-1 w-8 bg-white" />
          </div>
          <div className="flex md:flex-col flex-row items-center justify-end">
            <div className="flex flex-col md:mb-10 mb-0 md:w-60 w-24 h-32 md:justify-end justify-center md:items-center items-start">
              <p className={`text-white md:text-xl text-md font-regular`}>
                Stage 3
              </p>
              {stageThree ? (
                <Fade bottom>
                  <ul
                    className={`${
                      stageThree ? "text-white" : "text-blue-700"
                    } list-disc font-extralight md:mt-0 mt-5`}
                  >
                    <li> {textReturn(lang,'Stage31')}</li>
                    <li> {textReturn(lang,'Stage32')}</li>
                    <li> {textReturn(lang,'Stage33')}</li>
                  </ul>
                </Fade>
              ) : null}
            </div>
            <button
              type="button"
              className={`${
                stageThree ? "bg-yellow-300" : null
              } w-10 h-10 rounded-full border-4 hover:bg-yellow-300 border-white`}
              onClick={() => {
                setStageThree(!stageThree);
              }}
            />
            <div className="md:h-16 h-1 md:w-1 w-8 bg-white" />
          </div>
        </div>
        <div className="md:h-1 h-3/4 md:w-10/12 w-1 bg-white rounded-md" />
        <div className="flex md:flex-row flex-col w-full md:justify-evenly gap-y-32">
          <div className="flex md:flex-col flex-row items-center">
            <div className="md:h-16 h-1 md:w-1 w-8 bg-white" />
            <button
              type="button"
              className={`${
                stageZero ? "bg-yellow-300" : null
              } w-10 h-10 rounded-full border-4 hover:bg-yellow-300 border-white`}
              onClick={() => {
                setStageZero(!stageZero);
              }}
            />
            <div className="flex flex-col md:mt-10 mt-0 md:w-60 w-24 h-32 md:justify-start justify-center md:items-center items-start ml-8 md:ml-0">
              <p className={`text-white md:text-xl text-md font-regular`}>
                Stage 0
              </p>
              {stageZero ? (
                <Fade bottom>
                  <ul
                    className={`${
                      stageZero ? "text-white" : "text-blue-700"
                    } list-disc font-extralight md:mt-0 mt-5`}
                  >
                    <li> {textReturn(lang,'Stage01')}</li>
                    <li> {textReturn(lang,'Stage02')}</li>
                    <li> {textReturn(lang,'Stage03')}</li>
                  </ul>
                </Fade>
              ) : null}
            </div>
          </div>
          <div className="flex md:flex-col flex-row items-center">
            <div className="md:h-16 h-1 md:w-1 w-8 bg-white" />
            <button
              type="button"
              className={`${
                stageTwo ? "bg-yellow-300" : null
              } w-10 h-10 rounded-full border-4 hover:bg-yellow-300 border-white`}
              onClick={() => {
                setStageTwo(!stageTwo);
              }}
            />
            <div className="flex flex-col md:mt-10 mt-0 md:w-60 w-24 h-32 md:justify-start justify-center md:items-center items-start ml-8 md:ml-0">
              <p
                className={`${
                  stageTwo ? "md:mt-0 mt-14" : null
                } text-white md:text-xl text-md font-regular`}
              >
                Stage 2
              </p>
              {stageTwo ? (
                <Fade bottom>
                  <ul className="text-white list-disc font-extralight">
                    <li> {textReturn(lang,'Stage21')}</li>
                    <li> {textReturn(lang,'Stage22')}</li>
                    <li> {textReturn(lang,'Stage23')}</li>
                  </ul>
                </Fade>
              ) : null}
            </div>
          </div>
          <div className="flex md:flex-col flex-row items-center">
            <div className="md:h-16 h-1 md:w-1 w-8 bg-white" />
            <button
              type="button"
              className={`${
                stageFour ? "bg-yellow-300" : null
              } w-10 h-10 rounded-full border-4 hover:bg-yellow-300 border-white`}
              onClick={() => {
                setStageFour(!stageFour);
              }}
            />
            <div className="flex flex-col md:mt-10 mt-0 md:w-60 w-24 h-32 md:justify-start justify-center md:items-center items-start ml-8 md:ml-0">
              <p className={`text-white md:text-xl text-md font-regular`}>
                Stage 4
              </p>
              {stageFour ? (
                <Fade bottom>
                  <ul className="text-white list-disc font-extralight">
                  <li> {textReturn(lang,'Stage41')}</li>
                  </ul>
                </Fade>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
