import { Document } from './document';
import { InlineNode, TopLevelNode } from './nodes/index';

export function document(strings: TemplateStringsArray, ...args: any[]): Document {

  const doc = new Document();
  const paragraph = doc.paragraph();

  for (let i = 0; i < args.length; i++) {
    paragraph.text(strings[i]);
    if (args[i] instanceof TopLevelNode) {
      throw new Error('Top level nodes cannot be used in tagged templates');
    }
    if (args[i] instanceof InlineNode) {
      paragraph.add(args[i]);
    } else {
      const stringified = String(args[i]);
      if (stringified.length > 0) {
        paragraph.text(stringified);
      }
    }
  }

  if (strings[args.length].length > 0) {
    paragraph.text(strings[args.length]);
  }

  return doc;
}
