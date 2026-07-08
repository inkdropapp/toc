import type { Environment, IInkdropPlugin } from '@inkdropapp/types'
import remarkToc from 'remark-toc'

class TocPlugin implements IInkdropPlugin {
  activate(app: Environment) {
    app.markdownRenderer.remarkPlugins.push(remarkToc)
  }

  deactivate(app: Environment) {
    if (app.markdownRenderer) {
      app.markdownRenderer.remarkPlugins = app.markdownRenderer.remarkPlugins.filter(
        plugin => plugin !== remarkToc
      )
    }
  }
}

export default new TocPlugin()
