from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db import get_db, Base, engine
from app.models import Customer, Item
from app.schemas import CustomerCreate, ItemCreate
from typing import List
from app import models
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os


app = FastAPI()
# Base.metadata.create_all(bind=engine) # Create the database tables automatically based on the models defined in app/models.py. This line is typically used during development to quickly set up the database schema. However, in production environments, it's recommended to use Alembic for managing database migrations instead of relying on automatic table creation.
load_dotenv()

FRONTEND_URL = os.getenv("FRONTEND_URL")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[FRONTEND_URL],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Endpoints to get data
@app.get("/customers", response_model=List[dict])
def get_customers(db: Session = Depends(get_db)):
    customers = db.query(Customer).all()
    return [{"customerId": c.customerId, "customerName": c.customerName, "email": c.email, "contact": c.contact, "address": c.address} for c in customers]

@app.get("/items", response_model=List[dict])
def get_items(db: Session = Depends(get_db)):
    items = db.query(Item).all()
    return [{"itemId": i.itemId, "ItemName": i.ItemName, "itemDesc": i.itemDesc, "UOM": i.UOM, "itemPrice": i.itemPrice} for i in items]

# Optional: Endpoints to create data (for testing)
@app.post("/customers")
def create_customer(customer: CustomerCreate, db: Session = Depends(get_db)):
    db_customer = Customer(**customer.dict())
    db.add(db_customer)
    db.commit()
    db.refresh(db_customer)
    return db_customer

@app.post("/items")
def create_item(item: ItemCreate, db: Session = Depends(get_db)):
    db_item = Item(**item.dict())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item