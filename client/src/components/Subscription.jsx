// import React, { useState } from "react";

// function CompareTable({ onClose }) {
//   const tableData = [
//     { feature: "Storage", plans: ["20 GB", "50 GB", "Custom Storage"] },
//     { feature: "Advanced Encryption", plans: [true, true, true] },
//     { feature: "Basic Document Sharing", plans: [true, true, true] },
//     { feature: "Basic Inheritance", plans: [true, true, true] },
//     { feature: "Google Drive Integration", plans: [true, true, true] },
//     { feature: "Standard Support", plans: [true, true, true] },
//     { feature: "Top Compliance Level Encryption", plans: [false, true, true] },
//     { feature: "Advanced Sharing Controls", plans: [false, true, true] },
//     { feature: "Advanced Inheritance Options", plans: [false, true, true] },
//     { feature: "Full Suite of Integrations", plans: [false, true, true] },
//     { feature: "Automatic Photo Upload", plans: [false, true, true] },
//     { feature: "Priority Support", plans: [false, false, true] },
//     { feature: "Voice Memo", plans: [false, false, true] },
//     { feature: "Notepad", plans: [false, false, true] },
//     { feature: "Dropbox Integration", plans: [false, false, true] },
//     { feature: "Customizable Solutions", plans: [false, false, true] },
//   ];

//   const planNames = ["Foundation (Standard)", "Legacy (Premium)", "Heritage (Enterprise)"];

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white rounded-lg shadow-lg max-w-5xl w-full p-4 overflow-hidden">
//         <button
//           className="text-red-500 text-sm underline mb-4"
//           onClick={onClose}
//         >
//           Close
//         </button>
//         <div className="overflow-x-auto max-h-96">
//           <table className="table-auto w-full border-collapse border border-gray-200 text-sm">
//             <thead>
//               <tr>
//                 <th className="border border-gray-200 p-1 bg-gray-100 text-left">Features</th>
//                 {planNames.map((plan, index) => (
//                   <th key={index} className="border border-gray-200 p-1 bg-gray-100 text-center">
//                     {plan}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {tableData.map((row, rowIndex) => (
//                 <tr key={rowIndex}>
//                   <td className="border border-gray-200 p-1">{row.feature}</td>
//                   {row.plans.map((plan, planIndex) => (
//                     <td
//                       key={planIndex}
//                       className="border border-gray-200 p-1 text-center"
//                     >
//                       {plan === true ? (
//                         <span className="text-green-500 font-bold">✔</span>
//                       ) : plan === false ? (
//                         <span className="text-red-500 font-bold">✘</span>
//                       ) : (
//                         plan
//                       )}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Subscription() {
//   const [showTable, setShowTable] = useState(false);

//   return (
//     <div className="bg-gray-100 py-10">
//       <h1 className="text-3xl font-bold text-center mb-6">Cumulus Subscription</h1>
//       <p className="text-center text-gray-600 mb-8">
//         Upgrade to Cumulus Premium for exclusive features, advanced tools, and
//         priority support!
//       </p>
//       <div className="flex justify-center mb-6">
//         <button className="px-4 py-2 bg-blue-500 text-white rounded-full">
//           Plans & Pricing
//         </button>
//       </div>
//       <div className="flex justify-center items-center gap-2 mb-6">
//         <span>Monthly Payment</span>
//         <label className="relative inline-flex items-center cursor-pointer">
//           <input type="checkbox" value="" className="sr-only peer" />
//           <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
//         </label>
//         <span className="text-sm text-blue-500 font-semibold">
//           Yearly payment{" "}
//           <span className="bg-blue-100 text-blue-500 px-2 py-1 rounded-full">
//             25% off
//           </span>
//         </span>
//       </div>
//       <div className="flex justify-center items-center gap-6 px-6 max-w-5xl mx-auto">
//         {/* Example Subscription Cards */}
//         <div className="bg-white shadow-md rounded-lg p-4 w-60 text-center">
//           <h3 className="font-bold text-xl">Foundation</h3>
//           <p className="text-gray-600">$9.99/month</p>
//           <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full">
//             Select Plan
//           </button>
//           <p className="text-gray-600">$9.99/month</p>
//           <p className="text-gray-600">$9.99/month</p>
//           <p className="text-gray-600">$9.99/month</p>
//         </div>
//         <div className="bg-white shadow-md rounded-lg p-4 w-60 text-center">
//           <h3 className="font-bold text-xl">Legacy</h3>
//           <p className="text-gray-600">$19.99/month</p>
//           <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full">
//             Select Plan
//           </button>
//         </div>
//         <div className="bg-white shadow-md rounded-lg p-4 w-60 text-center">
//           <h3 className="font-bold text-xl">Heritage</h3>
//           <p className="text-gray-600">Contact Us</p>
//           <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full">
//             Contact Sales
//           </button>
//         </div>
//       </div>
//       <p
//         className="text-blue-500 cursor-pointer underline mt-6 text-center"
//         onClick={() => setShowTable(true)}
//       >
//         Compare All Subscription Prices
//       </p>
//       {showTable && <CompareTable onClose={() => setShowTable(false)} />}
//     </div>
//   );
// }

// export default Subscription;


import React, { useState, useEffect } from "react";
import { Check } from "lucide-react";
import axios from "axios";

function CompareTable({ onClose }) {
  const tableData = [
    { feature: "Storage", plans: ["20 GB", "50 GB", "Custom Storage"] },
    { feature: "Advanced Encryption", plans: [true, true, true] },
    { feature: "Basic Document Sharing", plans: [true, true, true] },
    { feature: "Basic Inheritance", plans: [true, true, true] },
    { feature: "Google Drive Integration", plans: [true, true, true] },
    { feature: "Standard Support", plans: [true, true, true] },
    { feature: "Top Compliance Level Encryption", plans: [false, true, true] },
    { feature: "Advanced Sharing Controls", plans: [false, true, true] },
    { feature: "Advanced Inheritance Options", plans: [false, true, true] },
    { feature: "Full Suite of Integrations", plans: [false, true, true] },
    { feature: "Automatic Photo Upload", plans: [false, true, true] },
    { feature: "Priority Support", plans: [false, false, true] },
    { feature: "Voice Memo", plans: [false, false, true] },
    { feature: "Notepad", plans: [false, false, true] },
    { feature: "Dropbox Integration", plans: [false, false, true] },
    { feature: "Customizable Solutions", plans: [false, false, true] },
  ];

  const planNames = [
    "Foundation (Standard)",
    "Legacy (Premium)",
    "Heritage (Enterprise)",
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-2">
    <div className="bg-white rounded-lg shadow-lg max-w-5xl w-full p-4">
    <div className="relative mb-7">
  <button
    className="text-red-500 text-sm underline mb-4 absolute top-0 right-0"
    onClick={onClose}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 7.586l4.293-4.293a1 1 0 111.414 1.414L11.414 9l4.293 4.293a1 1 0 11-1.414 1.414L10 10.414l-4.293 4.293a1 1 0 11-1.414-1.414L8.586 9 4.293 4.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </button>
</div>
<div className="overflow-y-auto max-h-[70vh]">
  <table className="table-auto w-full border-collapse border border-gray-200 text-sm sm:text-xs md:text-sm lg:text-base z-50">
    <thead>
      <tr>
        <th className="border rounded-tl-xl border-r-1 border-white p-4 sm:p-2 text-center bg-black text-white">
          Features
        </th>
        {planNames.map((plan, index) => (
          <th
            key={index}
            className={`border border-r-1 border-white p-4 sm:p-2 text-center bg-black text-white ${
              index === planNames.length - 1 ? 'rounded-tr-xl' : ''
            }`}
          >
            {plan}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {tableData.map((row, rowIndex) => (
        <tr key={rowIndex}>
          <td className="border font-semibold border-gray-300 p-4 sm:p-2">{row.feature}</td>
          {row.plans.map((plan, planIndex) => (
            <td
              key={planIndex}
              className="border font-semibold border-gray-300 p-2 sm:p-1 text-center"
              style={{
                backgroundColor:
                  planIndex === 0
                    ? '#f4f4f9' // 1st column (lightest white)
                    : planIndex === 1
                    ? '#e0fbfc' // 2nd column (lightest red)
                    : planIndex === 2
                    ? '#f4f4f9' // 3rd column (lightest green)
                    : '#f8d7da', // 4th column (lightest red)
              }}
            >
              {plan === true ? (
                <span className="text-green-500 font-bold">✔</span>
              ) : plan === false ? (
                <span></span>
              ) : (
                plan
              )}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
</div>

</div>

  </div>
  
  );
}

function SubscriptionCard({ type, data, isActive, onHover }) {
  return (
    <div
      className={`bg-white shadow-lg rounded-lg p-4 border-2 ${
        isActive ? "border-blue-500" : "border-transparent"
      } hover:border-blue-500 transition-all`}
      onMouseEnter={() => onHover(type)}
      onMouseLeave={() => onHover(null)}
    >
      <h2 className="text-xl font-semibold mb-4">
        {data.subscription_name}
        {data.recommended && (
          <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full ml-2">
            Recommended
          </span>
        )}
      </h2>
      <p className="text-2xl font-bold mb-4">
        {data.price}
        {data.period && <span className="text-sm"> {data.period}</span>}
      </p>
      <button className="w-full bg-blue-500 text-white py-2 rounded-lg mb-4">
        {data.buttonLabel}
      </button>
      <ul className="space-y-2">
        {data.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="text-green-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Subscription() {
  const [hoveredPlan, setHoveredPlan] = useState(null);
  const [plans, setPlans] = useState([]);
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    axios
      .get("https://cumulus.onrender.com/api/subscriptions/get-subscriptions")
      .then((response) => {
        const formattedPlans = response.data.map((plan) => ({
          subscription_name: plan.subscription_name,
          price: plan.cost.monthly || "Custom Pricing",
          period: plan.cost.monthly ? "/month" : null,
          features: [
            plan.features.storage,
            plan.features.encryption,
            plan.features.document_sharing,
            plan.features.inheritance_features,
            ...plan.features.integrations,
            ...plan.features.extra_features,
          ],
          buttonLabel: plan.cost.custom_pricing ? "Contact Us" : "Try Now",
          recommended: plan.subscription_name === "Legacy (Premium)",
        }));
        setPlans(formattedPlans);
      })
      .catch((error) => console.error("Error fetching subscription data:", error));
  }, []);

  return (
    <div className="bg-gray-100 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">
        Cumulus Subscription
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Upgrade to Cumulus Premium for exclusive features, advanced tools, and
        priority support!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <SubscriptionCard
            key={index}
            type={plan.subscription_name}
            data={plan}
            isActive={hoveredPlan === plan.subscription_name}
            onHover={setHoveredPlan}
          />
        ))}
      </div>
      <p
        className="text-blue-500 cursor-pointer underline mt-6 text-center"
        onClick={() => setShowTable(true)}
      >
        Compare All Subscription Prices
      </p>
      {showTable && <CompareTable onClose={() => setShowTable(false)} />}
    </div>
  );
}

export default Subscription;
