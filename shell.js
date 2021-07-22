const { exec } = require("child_process")
const path = require("path")

const number_of_test = 17
const inputDir = path.join(__dirname, "tests/problem-2", "input")
const outputDir = path.join(__dirname, "tests/problem-2", "output")

for (let i = 0; i < number_of_test; i++) {
  let inFileStr = "input"
  let outFileStr = "output"

  if (i > 9) {
    inFileStr += i.toString() + ".txt"
    outFileStr += i.toString() + ".txt"
  } else {
    inFileStr += "0" + i + ".txt"
    outFileStr += "0" + i + ".txt"
  }

  const inputFileDir = path.join(inputDir, inFileStr)
  const outputFileDir = path.join(outputDir, outFileStr)
  const exeCmd = `./a.out < ${inputFileDir} > ${outputFileDir}`
  console.log(exeCmd)

  exec(exeCmd, (error, stdout, stderr) => {
    if (error) {
      console.log(stderr)
      throw error
    }
    console.log(stdout)
  })
}
