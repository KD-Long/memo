import React, { useState, useMemo } from 'react'
import ReactMarkdown from 'react-markdown'
import { visit } from 'unist-util-visit'
import { remark } from 'remark'

// Extract words from markdown using AST (same approach as hiding plugin)
const extractWords = (text) => {
    const words = []

    try {
        const tree = remark().parse(text)

        visit(tree, 'text', (node) => {
            if (!node.value) return

            // Split text into words using same regex as plugin
            const parts = node.value.split(/(\b\w+\b)/)

            for (const part of parts) {
                if (/\b\w+\b/.test(part)) {
                    words.push(part)
                }
            }
        })
    } catch (error) {
        console.error('Error parsing markdown:', error)
        // Fallback to simple regex if parsing fails
        const plainText = text
            .replace(/#{1,6}\s+/g, '')
            .replace(/\*\*([^*]+)\*\*/g, '$1')
            .replace(/\*([^*]+)\*/g, '$1')
            .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
            .replace(/`([^`]+)`/g, '$1')
            .replace(/\n/g, ' ')
        return plainText.match(/\b\w+\b/g) || []
    }

    return words
}

// Create a remark plugin to hide words in text nodes
const createHideWordsPlugin = (hiddenWords) => {
    return () => {
        return (tree) => {
            let wordIndex = 0

            // visits every word in mark down
            visit(tree, 'text', (node) => {
                if (!node.value) return

                // Split text into words and non-word parts, preserving delimiters
                const parts = node.value.split(/(\b\w+\b)/)
                let newValue = ''

                for (const part of parts) {
                    if (/\b\w+\b/.test(part)) {
                        // It's a word - check if it should be hidden
                        if (hiddenWords.has(wordIndex)) {
                            //   newValue += '`'+'\u00A0'.repeat(part.length)+'`'
                            newValue += '\u25B0'.repeat(part.length) //unicode black box
                        } else {
                            // Keep the word
                            newValue += part
                        }
                        wordIndex++
                    } else {
                        // It's punctuation/spaces - keep as is
                        newValue += part
                    }
                }

                // Update the node's value
                node.value = newValue
            })
        }
    }
}


const Memo = () => {
    const [mode, setMode] = useState('preview') // 'edit' or 'preview'
    const [markdownText, setMarkdownText] = useState(`# Welcome to Memo

## The Best Way to Memorise Stuff

Simply input your markdown text and read through it aloud! Every time you complete the passage, hide words with the **Next** button. Once every word has been hidden and you can recite the script from memory, you have memorised it!

### How to Use

1. **Input your text** - Paste or type your markdown content in the editor
2. **Read aloud** - Read through the entire passage out loud
3. **Hide words** - Click "Next" to randomly hide words (adjust the amount if needed)
4. **Repeat** - Read again with hidden words, trying to remember what's missing
5. **Memorise** - Keep hiding words until you can recite the entire passage!

> **Tip:** Don't have markdown? No problem! Ask AI tools like ChatGPT to convert your text (Word documents, PDFs, or plain text) to markdown format. Just paste your content and ask "Convert this to markdown format."

Click "Edit" to modify this text or start with your own content.`)
    const [hiddenWordIndices, setHiddenWordIndices] = useState(new Set())
    const [deleteAmount, setDeleteAmount] = useState(1)

    // Extract words when markdownText changes
    const words = useMemo(() => extractWords(markdownText), [markdownText])




    const handleSave = () => {
        if (markdownText.trim()) {
            setMode('preview')
            setHiddenWordIndices(new Set()) // Reset hidden words when saving
        }
    }

    const handleEdit = () => {
        setMode('edit')
    }
    const handleReset = () => {
        setHiddenWordIndices(new Set())
    }

    const handleNext = () => {
        if (hiddenWordIndices.size < words.length) {
            const newHidden = new Set(hiddenWordIndices)
            // repeat for deleteAmount of times
            for (let d = 0; d < deleteAmount; d++) {
                // Check if we've hidden all words
                if (newHidden.size >= words.length) {
                    break // Stop if all words are hidden
                }
                
                // pick a random index from range 0 - length that does not already exist
                let available = []
                for (let i = 0; i < words.length; i++) {
                    if (!newHidden.has(i)) {
                        available.push(i)
                    }
                }
                
                // Safety check: make sure we have available words
                if (available.length === 0) {
                    break // Stop if no words available
                }
                
                // Pick a random one
                let randomIndex = Math.floor(Math.random() * available.length)
                newHidden.add(available[randomIndex])
            }

            setHiddenWordIndices(newHidden)
        }
    }

    // Create remark plugin for hiding words
    const hideWordsPlugin = useMemo(() => {
        return createHideWordsPlugin(hiddenWordIndices)
    }, [hiddenWordIndices])

    return (
        <div className="container mx-auto px-4 py-8">


            {/* Two Column Layout */}
            <div className="grid grid-cols-4 gap-4">
                {/* Left Column - 3/4 width */}
                <div className="col-span-3">
                    <div className="bg-base-200 p-6 rounded-lg min-h-[400px]">
                        {mode === 'edit' ? (
                            <div className="flex flex-col h-full">
                                <textarea
                                    className="textarea textarea-bordered w-full h-full min-h-[400px]"
                                    placeholder="Enter your markdown text here..."
                                    value={markdownText}
                                    onChange={(e) => setMarkdownText(e.target.value)}
                                />
                                <button
                                    className="btn btn-primary mt-4"
                                    onClick={handleSave}
                                >
                                    Save & Preview
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col h-full">
                                <div className="prose prose-stone prose-sm max-w-none mb-4">
                                    <ReactMarkdown
                                        remarkPlugins={[hideWordsPlugin]}
                                    >
                                        {markdownText}
                                    </ReactMarkdown>
                                </div>
                                <button
                                    className="btn btn-outline mt-auto"
                                    onClick={handleEdit}
                                >
                                    Edit
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Column - 1/4 width */}
                <div className="col-span-1">
                    <div className="bg-base-200 p-6 rounded-lg min-h-[400px]">
                        {/* Right column content */}
                        <div className="flex items-center gap-2 mb-4">
                            <label className="text-sm">Delete Amount:</label>
                            <input type="text"
                                className="input input-sm flex-1"
                                value={deleteAmount}
                                onChange={(e) => setDeleteAmount(Number(e.target.value))}
                            />
                        </div>
                        
                        <div className="flex gap-2">
                            <button
                                className='btn btn-primary flex-1'
                                onClick={handleNext}
                                disabled={hiddenWordIndices.size >= words.length}
                            >
                                Next
                            </button>
                            <button
                                className='btn btn-primary flex-1'
                                onClick={handleReset}
                            >
                                Reset
                            </button>
                        </div>
                        <div className="mt-4 text-sm text-base-content/70">
                            Hidden: {hiddenWordIndices.size} / {words.length}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Memo
