export const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price).toFixed(2))
  return dollarsAmount
}

// export const generateAmountOption = (number) => {
//   const options = []
//   for (let i = 1; i <= number; i++) {
//     options.push(
//       <option key={i} value={i}>
//         {i}
//       </option>
//     )
//   }
//   return options
// }
