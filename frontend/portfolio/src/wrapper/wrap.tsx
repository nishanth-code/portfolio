import React from 'react'
import NavigationDots  from '../components/navigation.tsx'
import SocialMedia from'../components/socialmedia.tsx'

// interface WrapProps {
//   Component: React.FC;
//   idName: string;
//   classNames?: string;
// }
const Wrap= (Component:any, idName:any, classNames:any) => {
  const HOC: React.FC = () => (
    <div id={ idName } className={`app__container ${classNames}`}>
      <SocialMedia />
      <div className='app__wrapper app__flex'>
        <Component />
      </div>
      <NavigationDots active={idName} />
    </div>
  );

  return HOC;
};


export default Wrap