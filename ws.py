import asyncio
import websockets
# import http.server
# import socketserver

# port = 80

# Handler = http.server.SimpleHTTPRequestHandler

class websocketServer():
    def __init__(self):
        print("Initialise server.")
        self.port = 6048
        self.address = "0.0.0.0"
    async def server(self, websocket):
        async for message in websocket:
            await websocket.send(f'You told me: {message}')

    async def main(self):
        async with websockets.serve(server, "0.0.0.0", 6048):
            await asyncio.Future()
ws = websocketServer()
asyncio.run(ws.main())

# with socketserver.TCPServer(("", port), Handler) as httpd:
#     print("Serving at port", port)
#     httpd.serve_forever()