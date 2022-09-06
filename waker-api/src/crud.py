from pydoc import describe

from sqlalchemy.orm import Session

from . import models, schemas
from .exceptions import DeviceNotFound


def get_devices(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Device).offset(skip).limit(limit).all()


def get_users(db: Session):
    return db.query(models.User).all()


def create_device(db: Session, device: schemas.DeviceCreate):
    db_device = models.Device(
        description=device.description, mac_address=device.mac_address
    )
    db.add(db_device)
    db.commit()
    db.refresh(db_device)
    return db_device


def delete_device(db: Session, device_id: int):
    device = db.get(models.Device, device_id)
    if not device:
        raise DeviceNotFound
    db.delete(device)
    db.commit()
