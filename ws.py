import asyncio
import websockets

async def server(websocket):
    async for message in websocket:
        await websocket.send(f'You told me: {message}')

async def main():
    async with websockets.serve(server, "192.168.0.150", 8081):
        await asyncio.Future()
asyncio.run(main())