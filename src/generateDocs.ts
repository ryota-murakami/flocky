import fileSize from 'filesize'
import fs from 'fs'
import pako from 'pako'
import path from 'path'
import terser from 'terser'
import { parseModules } from './parseModules'

const START_TOKEN = '<!-- START GENERATED FROM FILES -->'
const END_TOKEN = '<!-- END GENERATED FROM FILES -->'

// Parse the module documentations
let modules = parseModules().sort((a, b) => a.name.localeCompare(b.name))

// Generate the subtext for each module (source link, benchmark link, module size)
modules = modules.map((module) => {
  let subText: string[] = []

  // Link to the source
  subText.push(`[Source](./src/${module.name}/index.ts)`)

  // Link to the benchmark
  const benchmarkPath = path.join(__dirname, `./${module.name}/BENCHMARK.md`)
  const hasBenchmark = fs.existsSync(benchmarkPath)
  if (hasBenchmark) {
    subText.push(`[Benchmark](./src/${module.name}/BENCHMARK.md)`)
  }

  // Calculate the module
  const sizes = calculateModuleSizes(module.name)
  subText.push(`Minify: ${sizes.minSize}`)
  subText.push(`Minify & GZIP: ${sizes.minZipSize}`)

  // Append to the docs for this module
  module.docs += `\n<sup>${subText.join(' • ')}<sup>\n`
  return module
})

// Replace the documentation for the individual modules in the readme
let README = fs.readFileSync('./README.md', 'utf-8')
README = README.replace(
  new RegExp(`${START_TOKEN}.*${END_TOKEN}`, 's'),
  [START_TOKEN, modules.map((x) => x.docs).join('\n'), END_TOKEN].join('\n')
)

fs.writeFileSync('./README.md', README, 'utf-8')

// ----------------------------------------------------------------------------

function calculateModuleSizes(name: string) {
  const content = fs.readFileSync(
    path.join(__dirname, `../build/${name}.js`),
    'utf-8'
  )

  const contentMin = terser.minify(content).code || ''
  const contentMinZip = pako.deflate(contentMin)

  return {
    size: fileSize(content.length),
    minSize: fileSize(contentMin.length),
    minZipSize: fileSize(contentMinZip.length)
  }
}
