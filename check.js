const { exec } = require("child_process")
const path = require("path")

const number_of_test = 31
const inputDir = path.join(__dirname, "tests", "input")
const outputDir = path.join(__dirname, "tests", "output")

const func = idx => {
  let inFileStr = "input"
  let outFileStr = "output"

  if (idx > 9) {
    inFileStr += idx.toString() + ".txt"
    outFileStr += idx.toString() + ".txt"
  } else {
    inFileStr += "0" + idx + ".txt"
    outFileStr += "0" + idx + ".txt"
  }

  const inputFileDir = path.join(inputDir, inFileStr)
  const outputFileDir = path.join(outputDir, outFileStr)
  const exeCmd = `diff ${outputFileDir} <(./a.out < ${inputFileDir})`

  return exec(exeCmd)
}

async function haha() {
  for (let i = 0; i < number_of_test; i++) {
    console.log(i)
    try {
      await func(i)
    } catch (error) {
      throw error
    }
  }
}

haha()
