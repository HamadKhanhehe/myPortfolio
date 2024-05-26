
import { Tilt } from 'react-tilt';
import './TiltCard.css'
import LineGradient from './LineGradient';


const defaultOptions = {
  reverse:        false,  // Keeping the tilt direction as normal
  max:            25,     // Slightly less tilt for a smoother effect
  perspective:    1000,   // A bit more perspective for depth
  scale:          0.95,    // Slight scaling for a subtle effect
  speed:          1000,   // Faster transition for smoothness
  transition:     true,   // Enable transitions on enter/exit
  axis:           null,   // Both axes enabled for a full 3D effect
  reset:          true,   // Reset the tilt effect on exit for consistency
  easing:         "cubic-bezier(.03,.98,.52,.99)", // Smooth and elastic easing
};

function Projects() {
  return (
    
    <section id='projects' className='relative top-80'>
      <div className='text-4xl text-center'>
      <h1>My Projects</h1> 
      <hr className='h-[5px] w-[350px] bg-blue mx-auto mt-[15px] border-0 outline-none' /> 
      <p className='text-2xl text-red mt-[10px]'>here you can see some of my projects</p>
      </div>

      <div class="flex min-h-screen items-center justify-center">
  <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">


    {/* 1st  */}
    <Tilt className="Tilt"  options={defaultOptions} >
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-1 group-hover:scale-125" src="/assets/proj1.png" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 pt-20 group-hover:pt-0 ">
        <h1 class="group-hover:opacity-0 font-dmserif text-3xl font-bold text-white  ">Ecommerce App</h1> <br />
        <p class="  mb-3 text-lg italic text-white transition-opacity duration-300 relative ">a web app with a cool slider and cart functionality made with redux toolkit</p>
        <p class="  mb-3 text-lg font-bold italic transition-opacity duration-300 group-hover:opacity-100 group-hover:text-red">#REACTJS #REDUXTOOLKIT #REACTROUTERDOM</p>
        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
       <a href='https://github.com/HamadKhanhehe/Ecommerce-app-redux-tlkt'
         target="_blank"
         rel="noreferrer"
       >
        <i style={{color:'#DC4492', fontSize:'20px'}} class="fa-brands fa-github"></i>
        </a>
        </button>
      </div>
    </div>
    </Tilt>

    {/* 2nd card */}
    <Tilt className="Tilt"  options={defaultOptions} >
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-1 group-hover:scale-125" src="/assets/proj2.png" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group-hover:bottom-[70px]">
        <h1 class="group-hover:opacity-0 font-dmserif text-3xl font-bold text-white mt-20 relative bottom-2">App with Authentication</h1>
        <p class="  mb-3 text-lg italic text-white transition-opacity duration-300 relative top-5">app with authentication, cart functionality made with backend and frontend</p> <br />
        <p class="  mb-3 text-lg font-bold italic transition-opacity duration-300 group-hover:opacity-100 group-hover:text-red">#REACTJS #MONGODB #NODEJS #EXPRESSJS</p>

        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
       <a href='https://github.com/HamadKhanhehe/mern1st/tree/master'
         target="_blank"
         rel="noreferrer"
       >
        <i style={{color:'#DC4492', fontSize:'20px'}} class="fa-brands fa-github"></i>
        </a>
        </button>
      </div>
    </div>
    </Tilt>

    {/* 3rd card */}
    <Tilt className="Tilt"  options={defaultOptions} >
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-1 group-hover:scale-125" src="/assets/proj3.png" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0  ">
        <h1 class="group-hover:opacity-0 font-dmserif text-3xl font-bold text-white relative top-10">Budget & Expense App</h1> <br /> <br />
        <p class="  mb-3 text-lg italic text-white transition-opacity duration-300 group-hover:opacity-100">app to manage budget or expense made with some js logic</p>
        <p class="  mb-3 text-lg font-bold italic transition-opacity duration-300 group-hover:opacity-100 group-hover:text-red">#HTML #CSS #JAVASCRIPT</p>
        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
       <a href='https://github.com/HamadKhanhehe/BudgetExpenseApp.io'
         target="_blank"
         rel="noreferrer"
       >
        <i style={{color:'#DC4492', fontSize:'20px'}} class="fa-brands fa-github"></i>
        </a>
        </button>
      </div>
    </div>
    </Tilt>

  </div>  
</div>
    </section>
  );
}

export default Projects;
























