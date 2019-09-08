// export interface Re {
//   first: string
//   second: string
//   third: string
// }

// export interface IMockData {
//   data: string
//   res: Re
// }

// class Test {
//   private data: string
//   constructor(mockData: IMockData) {
//     this.data = mockData.data
//   }
//   log() {
//     console.log(this.data)
//   }
// }

// let t = new Test({ data: 'kimi009', res: { first: 'c', second: 'd', third: 'e' } })
// t.log()

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './pages/app'

ReactDOM.render(<App/>,document.getElementById('app'))
