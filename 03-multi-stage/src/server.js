import { createServer } from 'node:http'
import confetti from 'canvas-confetti'

const PORT = process.env.PORT || 3000

createServer((req, res) => {
    res.writeHead(200, { 'content-type' : 'application/json' })
    res.end(JSON.stringify({
        message: 'Minimum image build with multi-stage build 🐳',
        note: 'This final image DO NOT contains esbuild neither decompiled source code',
        exampleDependency: 'We imported canvas-confetti successfully on prod, but is not used'
    }))
}).listen(PORT, () => {
    console.log(`🚀 Server (multistage) listen on port ${PORT}`)
})