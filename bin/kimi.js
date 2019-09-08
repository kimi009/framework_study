#!/usr/local/bin node

const result = {
  data: '我爱我家',
  res: {
    first: 'candy',
    second: 'selena',
    third: 'kimi'
  }
}

const json2Ts = require('json2ts')

const jsonContent = JSON.stringify(result)
const res = json2Ts.convert(jsonContent)
console.log(res)
