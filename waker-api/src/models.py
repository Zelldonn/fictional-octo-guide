from sqlalchemy import Column, Integer, String

from .extensions import Base


class Device(Base):
    __tablename__ = "devices"

    id = Column(Integer, primary_key=True, index=True)
    mac_address = Column(String, unique=False, index=True)
    description = Column(String, unique=False, index=False)


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=False, index=True)
    hashed_password = Column(String, unique=False, index=False)
