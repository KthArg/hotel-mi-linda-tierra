const puppeteer = require('puppeteer')
const path = require('path')
const fs = require('fs')

const OUT_DIR = path.join(__dirname, '..', 'screenshots')
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true })

const WIDTHS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet',  width: 768,  height: 1024 },
  { name: 'mobile',  width: 390,  height: 844  },
]

async function scrollAndReveal(page) {
  // Scroll through the page to trigger IntersectionObserver, then scroll back to top
  const height = await page.evaluate(() => document.body.scrollHeight)
  const step = 400
  for (let y = 0; y <= height; y += step) {
    await page.evaluate(y => window.scrollTo(0, y), y)
    await new Promise(r => setTimeout(r, 60))
  }
  await page.evaluate(() => window.scrollTo(0, 0))
  await new Promise(r => setTimeout(r, 400))
}

async function shoot(page, label, url, viewport) {
  await page.setViewport({ width: viewport.width, height: viewport.height, deviceScaleFactor: 1 })
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 })
  await new Promise(r => setTimeout(r, 1200))
  // Trigger scroll-based animations before capturing full page
  if (url.startsWith('http')) await scrollAndReveal(page)
  await new Promise(r => setTimeout(r, 600))
  const file = path.join(OUT_DIR, `${label}-${viewport.name}.png`)
  await page.screenshot({ path: file, fullPage: true })
  console.log(`  Saved: ${file}`)
}

async function run() {
  const browser = await puppeteer.launch({ headless: 'new' })
  const page = await browser.newPage()

  const htmlPath = path.resolve(
    __dirname, '..', '..', 'Hotel Mi Linda Tierra', 'Mi Linda Tierra.html'
  )
  const originalUrl = `file:///${htmlPath.replace(/\\/g, '/')}`
  const nextUrl = 'http://localhost:3000'

  console.log('\n--- Original HTML ---')
  for (const vp of WIDTHS) {
    await shoot(page, 'original', originalUrl, vp)
  }

  console.log('\n--- Next.js ---')
  for (const vp of WIDTHS) {
    try {
      await shoot(page, 'nextjs', nextUrl, vp)
    } catch (e) {
      console.error(`  Could not reach ${nextUrl} for ${vp.name}: ${e.message}`)
      console.error('  Make sure "npm run dev" is running in another terminal.')
    }
  }

  await browser.close()
  console.log('\nDone. Screenshots saved to:', OUT_DIR)
}

run().catch(err => {
  console.error(err)
  process.exit(1)
})
