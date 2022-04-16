from typing import List

from fastapi import APIRouter

from ..waker import wake_up


router = APIRouter(prefix="/api/v1")


@router.get("/devices", tags=["Devices"])
async def get_devices():
    return [{"username": "Rick"}, {"username": "Morty"}]


@router.post("/wakeup", tags=["Devices"])
async def wakeup_device(mac_addresses : List[str] = ['2c:f0:5d:76:d4:9c']) :
    print(f"INFO : sending wake on lan to : {mac_addresses}")
    wake_up(mac_addresses)
    return "Magic packet sent"
