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


class User(BaseModel):
    username: str


class UserInDB(User):
    hashed_password: str


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: Optional[str] = None
