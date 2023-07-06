import { motion, AnimatePresence} from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';

import { 
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';
import { useState } from 'react';

const Home = () => {

  //use valitio to handle snapshot states
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>

          <motion.header {...slideAnimation("down")}>
            <img 
              src='./threejs.png'
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>

          <motion.div className='home-content' {...headContentAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className='head-text'>
                3D <br className='x1:block hidden'/> Shirt Designer
              </h1>
            </motion.div>

            <motion.div {...headContentAnimation} className='flex flex-col gap-5'>

              <p className="max-w-md font-normal text-gray-600 text-base">
                A project from Sushil G (both designed and coded).  Create your unique and exclusive shirt with this 3D customization tool. <strong>Unleash your imagination</strong>{" "} and define your own style.
              </p>

              <CustomButton 
                type="filled"
                title="Customize Shirt"
                handleClick={() => state.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />

            </motion.div>

          </motion.div>

        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home