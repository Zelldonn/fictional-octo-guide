from sys import prefix

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .routers.remote_device import router


app = FastAPI(prefix="/api/v1/")

origins = [
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(router)
