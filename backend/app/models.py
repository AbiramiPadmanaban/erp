from sqlalchemy import Column, Integer, String, Float
from app.db import Base

class Customer(Base):
    __tablename__ = "customers"

    id = Column(Integer, primary_key=True, index=True)  # Auto-incrementing ID
    customerId = Column(String, unique=True, index=True)
    customerName = Column(String, index=True)
    email = Column(String, nullable=True)
    contact = Column(String, nullable=True)
    address = Column(String, nullable=True)

class Item(Base):
    __tablename__ = "items"

    id = Column(Integer, primary_key=True, index=True)
    itemId = Column(String, unique=True, index=True)
    ItemName = Column(String, index=True)
    itemDesc = Column(String)
    UOM = Column(String)  # Unit of Measure
    itemPrice = Column(Float)