import { Delegate } from 'dom-delegate'

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

export default class PrPr {
  constructor(opts) {
    this.opts = opts
    const delegate = new Delegate(document.body)
    delegate.on('click', 'a', function (e) {
      e.preventDefault()
      console.log(this.getAttribute('href'))
    })
  }

}
