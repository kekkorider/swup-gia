import Component from 'gia/Component'

export default class Counter extends Component {
  constructor(element) {
    super(element)

    this.value = 0

    this.ref = {
      value: null,
      'button-increment': null,
      'button-decrement': null
    }
  }

  mount() {
    console.log('Counter mounted')
    this.updateValue()
    this.ref['button-increment'].addEventListener('click', this.increment.bind(this))
    this.ref['button-decrement'].addEventListener('click', this.decrement.bind(this))
  }

  unmount() {
    console.log('Counter unmounted')
    this.ref['button-increment'].removeEventListener('click', this.increment.bind(this))
    this.ref['button-decrement'].removeEventListener('click', this.decrement.bind(this))
  }

  updateValue() {
    this.ref.value.innerText = this.value
  }

  increment() {
    this.value++
    this.updateValue()
  }

  decrement() {
    this.value--
    this.updateValue()
  }
}
