from typing import List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from .. import crud, models, schemas
from ..exceptions import DeviceNotFound
from ..extensions import SessionLocal, engine
from ..waker import wake_up


models.Base.metadata.create_all(bind=engine)


router = APIRouter(prefix="/api/v1")


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/devices", tags=["Devices"], response_model=List[schemas.Device])
async def get_devices(db: Session = Depends(get_db)):
    db_devices = crud.get_devices(db)
    return db_devices


@router.delete("/device/{device_id}", tags=["Devices"])
async def delete_device(device_id: int, db: Session = Depends(get_db)):
    try:
        crud.delete_device(db, device_id)
    except DeviceNotFound:
        raise HTTPException(status_code=404, detail="Device not found")
    return {"ok": True}


@router.post("/device", tags=["Devices"], response_model=schemas.Device)
async def add_device(
    device: schemas.DeviceCreate, db: Session = Depends(get_db)
):
    return crud.create_device(db=db, device=device)


@router.put(
    "/device/{id}", tags=["Devices"], response_model=List[schemas.Device]
)
async def edit_device(id: int, db: Session = Depends(get_db)):
    db_devices = crud.get_devices(db)
    return db_devices


@router.post("/wakeup", tags=["Devices"])
async def wakeup_device(mac_address: str = "xx:x:x:xx:xx:xx"):
    print(f"INFO : sending wake on lan to : {mac_address}")
    wake_up(mac_address)
    return "Magic packet sent"
