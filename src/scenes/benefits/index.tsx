import { AcademicCapIcon, HomeModernIcon, UserGroupIcon } from '@heroicons/react/24/solid'
import { SelectedPage, type BenefitType } from '../../shared/types'
import {motion} from "framer-motion"
import Htext from '../../shared/Htext'
import Benefit from './Benefit';
import ActionButton from '../../shared/ActionButton';
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

const benefits: Array<BenefitTypefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
];

const container = {
  hidden: {},
  visible:{
    transition: {staggerChildren:0.2}
  }
}

type Props = {
  setSelectedPage:(value:SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
    id='benefits'
    className='mx-auto min-h-full w-5/6 py-20 md:py-48'
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div className='md:my-5 md:w-3/5'
          initial="hidden"
          whileInView="visible"
          viewport={{once:true,amount:0.5}}
          transition={{delay:0.2,duration:1}}
          variants={{
            hidden:{opacity:0,x:-50},
            visible:{opacity:1 ,x:0}
          }}
        >
         <Htext>MORE THAN JUST A GYM.</Htext>
         <p className='my-5 text-sm '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio maiores voluptatem nam, impedit placeat minima delectus 
          facere corrupti et corporis est esse aliquid! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, incidunt.
         </p>
         
        </motion.div>
        {/* benefits */} 
        <motion.div className='md:flex items-center justify-between gap-8 mt-5' 
        initial="hidden"
        whileInView="visible"
        viewport={{once:true,amount:0.5}}
        variants={container}
        >
          {benefits.map((benefit:BenefitType) => (
            <Benefit  
            key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            setSelectedPage={setSelectedPage}
            />
          )) }
        </motion.div>
        {/* grapics and description */}
        <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
          {/* grapics */}
          <img className='mx-auto'  src={BenefitsPageGraphic} alt="beefits-grapic" />

          {/* description */}
          <div>
            {/* title */}
            <div className='relative'>
              <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves'>
               <motion.div
                 initial="hidden"
                whileInView="visible"
                viewport={{once:true,amount:0.5}}
                transition={{delay:0.2,duration:1}}
                variants={{
                  hidden:{opacity:0,x:50},
                  visible:{opacity:1 ,x:0}
          }}
               >
                <Htext>
                  MILLION OF HAPPY MEMBER GETTING{" "}
                  <span className='text-primary-500'>FIT</span>
                </Htext>
               </motion.div>
              </div>
            </div>
            {/* desciription */}
            <motion.div
               initial="hidden"
          whileInView="visible"
          viewport={{once:true,amount:0.5}}
          transition={{delay:0.2,duration:1}}
          variants={{
            hidden:{opacity:0,x:50},
            visible:{opacity:1 ,x:0}
          }}
            >
              <p className='my-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse similique consequuntur veritatis, dicta, ab ducimus iste minima id error cupiditate nemo reprehenderit maiores iusto! Qui aliquam aperiam quo maiores perferendis culpa accusamus sint reiciendis aliquid laboriosam. Aliquam ut quam cumque asperiores unde ratione perferendis dignissimos incidunt deserunt, expedita accusantium laborum ipsa fugiat. Deserunt doloribus sequi officia laborum expedita itaque voluptatum. </p>
              <p className='mb-5 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio iure rem, officia suscipit facere provident. Quo maiores tenetur consectetur natus ad, sed corrupti illum officiis. Ut aperiam dignissimos magnam eum ipsam, laboriosam nihil numquam quas minus, exercitationem, modi cupiditate necessitatibus!</p>
            </motion.div>
            {/* button */}
            <div className='relative mt-16 '>
              <div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'>
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits