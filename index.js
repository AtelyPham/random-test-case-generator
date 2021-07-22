const json = require("./data.json")
const fs = require("fs")
const path = require("path")

const inputs = Object.keys(json)
  .filter(key => key.includes("input"))
  .filter(key => !json[key].includes("..."))

console.log(inputs)

const inputNumbers = inputs.map(input => input.split("#")[1])

console.log(inputNumbers)

inputNumbers.forEach((number, idx) => {
  const input = json[`input#${number}`]
  const ouput = json[`output#${number}`]

  fs.writeFile(`./input/input0${idx}.txt`, input, () => {})
  fs.writeFile(`./output/output0${idx}.txt`, ouput, () => {})
})
