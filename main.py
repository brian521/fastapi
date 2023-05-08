from fastapi import FastAPI, requests, Request
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

app = FastAPI()

app.mount("/static", StaticFiles(directory="public", html = True), name="static")
print("mount ok")

origins = [
    #"https://port-0-fastapi-687p2alhd9msb3.sel4.cloudtype.app/",
    #"http://localhost",
    #"http://127.0.0.1:8000"
    #"http://127.0.0.1:5500",
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/static")
async def root(request: Request):
    data = await request.json()
    input = data['input']
    input = input.lower()
    return JSONResponse({"input": input})
