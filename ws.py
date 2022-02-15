import asyncio
import websockets

async def hello():
    async with websockets.connect('ws://192.168.0.150:8081') as websocket:
        await websocket.send('Sup')
        await websocket.recv()
asyncio.run(hello())