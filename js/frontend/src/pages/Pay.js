// import React, { useState } from "react";
// import { useForm } from "react-hook-form";

// const Pay = () => {
//   return (
//     <form >
      
//       <input  placeholder="First name" />
//       <select >
//         <option value="">Select...</option>
//         <option value="A">Option A</option>
//         <option value="B">Option B</option>
//       </select>
//       <textarea  placeholder="About you" />
      
//       <input type="submit" />
//     </form>
//   );
// };

// export default Pay;

// import React from "react";
// import './Pay.css';

// const Pay = () => {
//   return (
//     <div class="container">
//       <div class="card-container">
//         <div class="front">
//           <div class="image">
//             <img src="./chip.png" alt="" />
//             <img src="./visa.png" alt="" />
//           </div>
//           <div class="card-number-box">################</div>
//           <div class="flexbox">
//             <div class="box">
//               <span>card holder</span>
//               <div class="card-holder-name">full name</div>
//             </div>
//             <div class="box">
//               <span>expiers</span>
//               <div class="expiration">
//                 <span class="exp-month">mm</span>
//                 <span class="exp-year">yy</span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="back">
//           <div class="stripe">
//             <div class="box">
//               <span>cvv</span>
//               <div class="cvv-box"></div>
//               <img src="./visa.png" alt="" />
//             </div>
//           </div>
//         </div>
//       </div>

//       <form action="">
//         <div class="inputBox">
//           <span>card number</span>
//           <input type="text" maxlength="16" class="card-number-input" />
//         </div>
//         <div class="inputBox">
//           <span>card holder</span>
//           <input type="text" class="card-holder-input" />
//         </div>
//         <div class="flexbox">
//           <div class="inputBox">
//             <span>Expiration mm</span>
//             <select name="" id="" class="month-input">
//               <option value="month" selected disabled>
//                 month
//               </option>
//               <option value="01">01</option>
//               <option value="02">02</option>
//               <option value="03">03</option>
//               <option value="04">04</option>
//               <option value="05">05</option>
//               <option value="06">06</option>
//               <option value="07">07</option>
//               <option value="08">08</option>
//               <option value="09">09</option>
//               <option value="10">10</option>
//               <option value="11">11</option>
//               <option value="12">12</option>
//             </select>
//           </div>

//           <div class="inputBox">
//             <span>Expiration yy</span>
//             <select name="" id="" class="year-input">
//               <option value="year" selected disabled>
//                 year
//               </option>
//               <option value="2024">2024</option>
//               <option value="2025">2025</option>
//               <option value="2026">2026</option>
//               <option value="2027">2027</option>
//               <option value="2028">2028</option>
//               <option value="2029">2029</option>
//               <option value="2030">2030</option>
//               <option value="2031">2031</option>
//               <option value="2032">2032</option>
//               <option value="2033">2033</option>
//             </select>
//           </div>
//           <div class="inputBox">
//             <span>CVV</span>
//             <input type="text" maxlength="3" class="cvv-input" />
//           </div>
//         </div>

//         <input type="submit" value="submit" class="submit-btn" />
//       </form>
//     </div>

//   );
// };

// export default Pay;
