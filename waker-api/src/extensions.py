import psycopg2

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker


# Connect to your postgres DB
""" conn = psycopg2.connect(
    user="postgres",
    password="mysecretpassword",
    host="db",
) """

# Open a cursor to perform database operations
""" cur = conn.cursor() """


SQLALCHEMY_DATABASE_URL = "postgresql://postgres:mysecretpassword@db"

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
