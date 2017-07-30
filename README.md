# Atlassian Document Format Builder (JavaScript)

A library that simplifies building documents that follow the Atlassian Document Format structure.

## Installation

Install the package using

    npm i -S @atlassian/adf-builder

or

    yarn add @atlassian/adf-builder

## Usage

This package offers two ways of building documents:

* A fluent document builder interface with support for all node types
* A tag to be used with ES6 template literals for singe-paragraph documents

### Fluent Interface

```javascript
import { Document } from '@atlassian/adf-builder';

const doc = new Document();
doc.paragraph()
  .text('See the ')
  .link('documention', 'https://example.com')
  .text(' ')
  .emoji('smile');
```

### Tagged Template Literals

```javascript
import { document, emoji, link } from '@atlassian/adf-builder';

const doc = document`See the ${link('documentation', 'https://example.com')} ${emoji('smile')}`;
```

### Serialization

A document can be serialized in different ways:

```javascript
const doc = new Document();
doc.toJSON();        // Returns the Atlassian Document Format structure
doc.toString();      // Returns a compact JSON string
JSON.stringify(doc); // Equivalent to 'doc.toString()', but can be used for pretty printing
```

### Code completion

If you use the library with TypeScript or with an IDE that interprets the `index.d.ts` file declared
in `package.json` for JavaScript projects, you will get automatic code completion.

### Examples

TBD

## Contributing

TBD
