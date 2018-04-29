# Atlassian Document Format Builder (JavaScript)

[![npm](https://img.shields.io/npm/v/adf-builder.svg)](https://www.npmjs.com/package/adf-builder)
[![npm](https://img.shields.io/bitbucket/pipelines/atlassian/adf-builder-javascript.svg)](https://bitbucket.org/atlassian/adf-builder-javascript/addon/pipelines/home#!/)

A library that simplifies building documents that follow the Atlassian Document Format structure.

## Installation

Install the package using

    npm i -S adf-builder

or

    yarn add adf-builder

## Usage

This package offers two ways of building documents:

* A fluent document builder interface with support for all node types
* A tag to be used with ES6 template literals for single-paragraph documents

### Fluent Interface

```javascript
import { Document } from 'adf-builder'; // For TypeScript or ES6
// const { Document } = require('adf-builder'); // For node/commonjs

const doc = new Document();
doc.paragraph()
  .text('See the ')
  .link('documention', 'https://example.com')
  .text(' ')
  .emoji(':smile:');
```

### Tagged Template Literals

```javascript
import { document, emoji, link } from 'adf-builder'; // For TypeScript or ES6
// const { document, emoji, link } = require('adf-builder'); // For node/commonjs

const doc = document`See the ${link('documentation', 'https://example.com')} ${emoji(':smile:')}`;
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

#### Simple paragraphs

In order to get an output like:

> Hello @joe, please *carefully* read [this contract](https://www.example.com/contract)

You would use:

```javascript
const { Document } = require('adf-builder');

const doc = new Document();
doc.paragraph()
  .text('Hello ')
  .mention(id, 'joe')
  .text(', please ')
  .em('carefully')
  .text(' read ')
  .link('this contract', 'https://www.example.com/contract');
```

#### Text

The `Paragraph` class has some convenience methods for text with a single mark like `strong`, `link`, etc.

If you need more than one mark, you can use the marks builder:

```javascript
const { Document, marks } = require('adf-builder');

const doc = new Document();
doc.paragraph()
  .text('Formatted', marks().color('#f0f0f0').strong());
```

#### Application Card

```javascript
doc.applicationCard('Title')
  .background('https://example.com/bg.png')
  .link('https://example.com/something')
  .description('Some description')
  .detail()
    .title('Status')
    .text('Open')
    .icon({url: 'https://example.com/open.png', title: 'Not resolved yet'});
```
#### Lists

For lists, there are some convenience methods that cover the simple cases. Consider a list like the following:

* Do this first
* Do this second

In order to create that list, you can use:

```javascript
doc.bulletList()
  .textItem('Do this first')
  .textItem('Do this second');
```

Similarly for lists of links:

```javascript
doc.orderedList()
  .linkItem('Do this first', 'https://example.com/1')
  .linkItem('Do this second', 'https://example.com/1');
```

For more complex use cases, use:

```javascript
const list = doc.bulletList();
list.item().paragraph().text('a'); // add more to the paragraph
list.item().paragraph().text('b'); // add more to the paragraph
```
