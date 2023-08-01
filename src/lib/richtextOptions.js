import {BLOCKS,INLINES} from '@contentful/rich-text-types'

export const RICHTEXT_OPTIONS = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node,children) => {
        return <p className='indent-16 text-center  mb-3 text-gray-500 dark:text-gray-400'>{children}</p>
      },
      [INLINES.HYPERLINK]: (node, children) => {
        return <a className='font-medium text-blue-600 underline dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700 hover:no-underline'
                  href={node.data.uri}>{children}</a>
      },
      [BLOCKS.UL_LIST]: (node, children) => {
        return <ul>{children}</ul>
      },
      [BLOCKS.LIST_ITEM]: (node, children) => {
        return <li>{children}</li>
      },
    },
  }