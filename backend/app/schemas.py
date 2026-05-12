from pydantic import BaseModel
# Pydantic schemas for request/response
class CustomerCreate(BaseModel):
    customerId: str
    customerName: str
    email: str = None
    contact: str = None
    address: str = None

class ItemCreate(BaseModel):
    itemId: str
    ItemName: str
    itemDesc: str
    UOM: str
    itemPrice: float