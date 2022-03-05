import asyncio
import websockets
import http.server
import socketserver

port = 80

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", port), Handler) as httpd:
    print("Serving at port", port)
    httpd.serve_forever()

async def server(websocket):
    async for message in websocket:
        await websocket.send(f'You told me: {message}')

async def main():
    async with websockets.serve(server, "0.0.0.0", 6048):
        await asyncio.Future()
asyncio.run(main())