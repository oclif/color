import color from '../src'

const output = color.red('foo')
console.log(`red ${output}`)
console.log(`strip ${color.stripColor(output)}`)
