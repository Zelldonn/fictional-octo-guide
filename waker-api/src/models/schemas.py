from typing import List, Optional

from pydantic import BaseModel


class Device(BaseModel):
    name: str
    mac_address : str
    description: Optional[str] = None

