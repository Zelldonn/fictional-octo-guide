from typing import Optional

from pydantic import BaseModel


class DeviceCreate(BaseModel):
    mac_address: str
    description: str


class Device(BaseModel):
    id: int
    mac_address: str
    description: Optional[str] = None

    class Config:
        orm_mode = True
