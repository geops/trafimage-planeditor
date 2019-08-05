const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.resolvableExtensions = () => ['.json']

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

const locales = require('./src/data/locales')

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  
  return new Promise(resolve => {
    deletePage(page)
    
    Object.keys(locales).map(key => {
      const locale = locales[key].locale
      const localizedPath = locales[key].default
          ? page.path
          : locales[key].path + page.path
      
      return createPage({
        ...page,
        path: localizedPath,
        context: {
          locale: locale
        }
      })
    })
    
    resolve()
  })
}