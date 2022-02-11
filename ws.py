import asyncio
import websockets

async def greet():
    async with websockets.connect('ws://raspberrypi:8081') as websocket:
        await websocket.send('Hi, I am Raspberry Pi')
        await websocket.recv()
asyncio.run(greet())