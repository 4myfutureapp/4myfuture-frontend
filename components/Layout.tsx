/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import AuthNav from './common/AuthNav';
import MobileNav from './common/MobileNav';
import { useNear } from '../hooks/useNear';
import useUser from '../hooks/useUser';
import { initContract } from './near/near';
interface LayoutProps {
  children: React.ReactNode | Array<React.ReactNode>;
}

function Layout({ children }: LayoutProps) {
  // const [nearContext, setNearContext] = useNear();
  // const [user, setUser] = useUser();

  // const setNEARContext = async () => {
  //   const near = await initContract();
  //   await setNearContext(near);
  //   try {
  //     const userId = await near.walletConnection.getAccountId();
  //     if (typeof userId == 'string') {
  //       try {
  //         setUser(userId);
  //         return;
  //       } catch (e) {
  //         return;
  //       }
  //     }
  //   } catch (e) {
  //     setUser(null);
  //   }
  // };

  // React.useEffect(() => {
  //   if (!nearContext && !user) {
  //     setNEARContext();
  //     return;
  //   }
  //   return;
  // }, [nearContext]);

  return (
    <div className="w-full bg-white relative flex flex-col">
      <img className="bg-fixed w-full fixed" src="web-bg.png" alt="bg" />
      <div className=" w-full sticky top-0 z-50">
        {/* <Navbar /> */}
        <AuthNav user="ANA" nears={3} />
      </div>
      <div className="w-full relative z-10 flex flex-col overflow-x-hidden">{children}</div>
      {/* Mobile navs goes on the footer of the page, so no footer will be shown on this screen size. */}
      <div className="w-full relative">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
