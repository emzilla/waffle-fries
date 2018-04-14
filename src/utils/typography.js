// http://kyleamathews.github.io/typography.js/
import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.4,
  headerFontFamily: ['Playfair Display', 'Georgia', 'serif'],
  bodyFontFamily: ['Muli', 'Arial', 'Helvetica', 'sans-serif'],
  bodyWeight: '100',
  googleFonts: [
    {
      name: 'Playfair Display',
      styles: ['700']
    },
    {
      name: 'Muli',
      styles: ['100']
    }
  ]
})

export default typography