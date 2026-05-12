from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
import os
load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")
print("DATABASE_URL:", DATABASE_URL)
engine = create_engine(DATABASE_URL) #create_engine() is typically imported from SQLAlchemy (or SQLModel) and serves as the primary gateway to your database. It creates an Engine instance that manages a pool of connections, allowing your application to talk to databases like SQLite, PostgreSQL, or MySQL.
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine) #it is different from session handler, 1. To hold a temporary "conversation" with your database. 2. It lives for the duration of one API request (usually a few milliseconds).

Base = declarative_base() # creates the base class for each of your database models. It provides the foundation for defining your database tables and their relationships using SQLAlchemy's ORM features. By inheriting from Base, you can create classes that represent your database tables, and SQLAlchemy will handle the underlying SQL generation and database interactions for you.

# Dependency to get DB session in FastAPI routes
def get_db():
    
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()