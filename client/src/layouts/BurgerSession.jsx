import React from 'react'
// import { allSections } from '../burgersession';
// import { burgers, Combos, drinks, chickens, chips, salad } from '../product';
// import { useState } from 'react';


// const BurgerSession = () => {
//     const [selected, setSelected] = useState(1);

    

   
    
//   return (
//     <>
//     <main className='py-7 hidden' >
//         <section className='container mx-auto '>
//     <div className="  p-7  md:rounded-full  flex justify-between space-x-6">
//       {allSections.map((allSection) => (
//         <div
//           key={allSection._id}
//           className={`flex flex-col overflow-hidden items-center cursor-pointer transition duration-300 ${
//             selected === allSection._id ? "opacity-100" : "opacity-40"
//           }`}
//           onClick={() => setSelected(allSection._id)}
          
//         >
//           <img
//             src={allSection.image}
//             alt={allSection.title}
//             className="hidden  md:block w-20 h-20 object-contain "
//           />
//           <span
//             className={`hidden  md:block mt-2 md:text-sm  ${
//               selected === allSection._id ? "text-white font-bold" : "text-gray-400"
//             }`}
//           >
//             {allSection.title}
//           </span>
         


//           </div>
//       ))}
//     </div>
//     </section>
//    </main>
//     </>
//   );
// }
  


// export default BurgerSession