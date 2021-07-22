const assert = require("assert")
const fs = require("fs")
const path = require("path")

const minN = 1
const maxN = 3 * 1e5

const minT = 1
const maxT = 2 * 1e2

const numberOfTest = 1
const initialValue = 51

const randInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const randomArr = (minVal, maxVal, size) => {
  return Array(size)
    .fill(0)
    .map(() => randInt(minVal, maxVal))
}

const writeFileCustom = async pathStr => {
  console.log(`Writing to ${pathStr}`)
  // const t = randInt(minT, maxT)
  // const t = 2 * 1e4
  // assert.ok(minT <= t && t <= maxT)
  // fs.appendFileSync(pathStr, t.toString() + "\n")

  // for (let i = 1; i <= t; i++) {
  // const n = randInt(minN, maxN)
  // assert.ok(minN <= n && n <= maxN)
  const n = 1e5
  const m = 1e5
  fs.appendFileSync(pathStr, n.toString() + " ")
  fs.appendFileSync(pathStr, m.toString() + "\n")
  const arrStr = randomArr(0, n, n).join(" ")
  fs.appendFileSync(pathStr, arrStr + "\n")
  // }
}

for (let i = initialValue; i < initialValue + numberOfTest; i++) {
  let fileStr = "input"
  fileStr += i > 9 ? i : `0${i}`
  const filePath = path.join(__dirname, "input", fileStr + ".txt")
  writeFileCustom(filePath)
}
