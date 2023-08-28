import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";

export const RICHTEXT_OPTIONS = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return (
        <p className="mx-auto mb-3 max-w-3xl text-center indent-16 text-black dark:text-gray-400">
          {children}
        </p>
      );
    },
    [INLINES.HYPERLINK]: (node, children) => {
      return (
        <a
          className="font-medium text-blue-600 underline hover:text-blue-700 hover:no-underline dark:text-blue-500 dark:hover:text-blue-600"
          href={node.data.uri}
        >
          {children}
        </a>
      );
    },
    [BLOCKS.UL_LIST]: (node, children) => {
      return <ul>{children}</ul>;
    },
    [BLOCKS.LIST_ITEM]: (node, children) => {
      return <li>{children}</li>;
    },
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      // render the EMBEDDED_ASSET as you need
      return (
        <Image
          className="m-auto"
          src={`https:${node.data.target.fields.file.url}`}
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width}
          alt={node.data.target.fields.description}
        />
      );
    },
  },
};
