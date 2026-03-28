import React from 'react'

const Featured = () => {
  return (
    <div>
        <div className="text-4xl sm:text-4xl lg:text-6xl mt-25 sm:mt-40 lg:mt-60 font-extrabold mb-14 text-center">As featured in...</div>
        <div className="max-w-6xl mx-auto gap-6 p-6 h-22">
            <div className="flex justify-center gap-4 text-center">
                <div className="bg-white text-black p-6 rounded-full h-18 w-90 shadow">
                Card 1
                </div>
                <div className="bg-white text-black p-6 rounded-full h-18 w-90 shadow">
                Card 2
                </div>
                <div className="bg-white text-black p-6 rounded-full h-18 w-90 shadow">
                Card 3
                </div>
            </div>
        </div>
        <div className="max-w-3xl mx-auto gap-6 p-6">
            <div className="flex gap-4 pb-30 text-center">
                <div className="bg-white text-black p-6 rounded-full h-18 w-90 shadow">
                Card 4
                </div>
                <div className="bg-white text-black p-6 rounded-full h-18 w-90 shadow">
                Card 5
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured




// import React from 'react'

// const Featured = () => {
//   return (
//     <div>
//       <div className="text-4xl lg:text-6xl mt-60 font-extrabold mb-14 text-center">
//         As featured in...
//       </div>

//       <div className="max-w-6xl mx-auto p-6">
//         <div className="text-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
//           <div className="bg-white text-black p-6 rounded-full h-18 w-90 shadow">
//             Card 1
//           </div>
//           <div className="bg-white text-black p-6 rounded-full h-18 w-90 shadow">
//             Card 2
//           </div>
//           <div className="bg-white text-black p-6 rounded-full h-18 w-90 shadow">
//             Card 3
//           </div>
//           <div className="bg-white text-black p-6 rounded-full h-18 w-90 shadow">
//             Card 4
//           </div>
//           <div className="bg-white text-black p-6 rounded-full h-18 w-90 shadow">
//             Card 5
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Featured
