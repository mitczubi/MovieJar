from sqlalchemy import Column, DateTime, Integer, String
from models.base import Base

class Watched(Base):
    __tablename__ = 'watched_movies'

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, unique=True, index=True)
    watched_date = Column(DateTime)