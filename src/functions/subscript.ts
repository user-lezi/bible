/* ₀₁₂₃₄₅₆₇₉ */
let data: { [key: string]: string } = {
  "0": "₀",
  "1": "₁",
  "2": "₂",
  "3": "₃",
  "4": "₄",
  "5": "₅",
  "6": "₆",
  "7": "₇",
  "8": "₈",
  "9": "₉",
}

export default function (text: string): string {
  let result = ""
  for (let char of text) {
    result += data[char]
  }
  return result
}
