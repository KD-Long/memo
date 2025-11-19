import React from 'react'

const Dev = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="prose prose-lg max-w-none">
        <h1>Dev:</h1>

        <a href='https://github.com/KD-Long/memo'>github.com/KD-Long/memo</a>
        <p>
          <strong>Memo</strong> is a text memorisation tool built with React. The application helps users memorise text by progressively hiding words, encouraging active recall.
        </p>


        <h3>Tech Stack</h3>
        <ul>
          <li><strong><a href='https://github.com/facebook/react'>React 19</a></strong> - UI framework</li>
          <li><strong><a href='https://github.com/vitejs/vite'>Vite</a></strong> - Build tool and dev server</li>
          <li><strong><a href='https://github.com/tailwindlabs/tailwindcss'>Tailwind CSS v4</a></strong> - Utility-first CSS framework</li>
          <li><strong><a href='https://github.com/saadeghi/daisyui'>DaisyUI</a></strong> - Component library built on Tailwind</li>
          <li><strong><a href='https://github.com/remarkjs/react-markdown'>react-markdown</a></strong> - Markdown rendering</li>
          <li><strong><a href='https://github.com/remarkjs/remark'>remark</a></strong> - Markdown processor (AST manipulation)</li>
          <li><strong><a href='https://github.com/syntax-tree/unist-util-visit'>unist-util-visit</a></strong> - AST tree traversal utility</li>
        </ul>

        <h2>User Flow</h2>

        <pre className="bg-base-200 p-4 rounded-lg overflow-x-auto text-sm font-mono whitespace-pre"><code>{
          `
          ┌─────────────────────────────┐     ┌─────────────────────────────┐     ┌─────────────────────────────┐
          │  1. User Inputs markdown    │     │  2. Raw Data Saved          │     │  3. Hidden Set represents   │
          │     in textarea             │  →  │     Words extracted         │  →  │     indices of words that   │
          │                             │     │     from markdown           │     │     that should be hidden   │
          │                             │     │     [word1, word2, ...]     │     │                             │
          │                             │     │                             │     │                             │
          └─────────────────────────────┘     └─────────────────────────────┘     └─────────────────────────────┘
                                                                                              ↓
          ┌─────────────────────────────┐     ┌─────────────────────────────┐     ┌─────────────────────────────┐
          │  6. Hidden words replaced   │     │  5. On "Next" press         │     │  4. Markdown Rendered       │
          │     with ▰ characters       │  ←  │     random index added      │  ←  │     Plugin processes        │
          │     maintaining spacing     │     │     to hidden set           │     │     AST and replaces        │
          │                             │     │                             │     │     hidden words            │
          └─────────────────────────────┘     └─────────────────────────────┘     └─────────────────────────────┘
                        ↓
          ┌─────────────────────────────┐
          │  7. Reset or Edit           │
          │     Reset clears hidden set │
          │     Edit returns to input   │
          └─────────────────────────────┘
          `}
        </code></pre>
        <h2>Markdown Processing Architecture</h2>

        <h3>Overview</h3>
        <p>
          The application uses an <strong><a href='https://github.com/syntax-tree/unist?tab=readme-ov-file#syntax-tree'>AST (Abstract Syntax Tree)</a></strong> approach to process markdown,
          ensuring that word hiding preserves all markdown formatting (bold, italic, headers, links, etc.).
        </p>

        <h3>How It Works</h3>

        <h4>1. Word Extraction</h4>
        <p>
          When markdown text is entered, the <code>extractWords</code> function:
        </p>
        <ol>
          <li>Parses markdown into an AST using <code>remark().parse()</code></li>
          <li>Walks through all <code>text</code> nodes using <code>visit()</code></li>
          <li>Extracts words using regex <code>/\b\w+\b/</code> (word boundaries)</li>
          <li>Returns an array of words in document order</li>
        </ol>

        <h4>2. Word Hiding Plugin</h4>
        <p>
          The <code>createHideWordsPlugin</code> function creates a <a href='https://github.com/remarkjs/remark'>remark plugin</a> that:
        </p>
        <ol>
          <li>Receives a Set of hidden word indices</li>
          <li>Walks the AST tree visiting all text nodes</li>
          <li>Splits each text node into words and non-word parts</li>
          <li>Replaces hidden words with Unicode black squares (<code>\u25B0</code>)</li>
          <li>Preserves all markdown structure (formatting stays intact)</li>
        </ol>

        <h4>3. Rendering</h4>
        <p>
          <code>ReactMarkdown</code> renders the processed AST:
        </p>
        <ul>
          <li>Markdown formatting is preserved (bold, headers, lists, etc.)</li>
          <li>Hidden words appear as black squares (▰) maintaining spacing</li>
          <li>Uses Tailwind Typography plugin for beautiful prose styling</li>
        </ul>

        <h3>Key Design Decisions</h3>

        <h4>Why AST Instead of String Replacement?</h4>
        <p>
          String replacement would break markdown syntax. For example:
        </p>
        <pre className="bg-base-200 p-4 rounded-lg overflow-x-auto"><code>{`**bold** → if "bold" is hidden → **▰▰▰▰** (breaks formatting!)`}</code></pre>
        <p>
          AST manipulation only modifies text nodes, preserving all markdown structure.
        </p>


      </div>
    </div>
  )
}

export default Dev

