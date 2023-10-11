from sqlalchemy import Boolean, Column, Integer, String
from models.base import Base

class Movie(Base):
    __tablename__ = "movies"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    seen = Column(Boolean, default=False)