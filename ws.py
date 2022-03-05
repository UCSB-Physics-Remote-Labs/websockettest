import asyncio
import websockets

async def server(websocket):
    async for message in websocket:
        await websocket.send(f'You told me: {message}')

async def main():
    async with websockets.serve(server, "0.0.0.0", 6048):
        await asyncio.Future()
asyncio.run(main())