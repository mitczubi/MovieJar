from datetime import date
from pydantic import BaseModel, Field, validator
from typing import Optional

class WatchedBase(BaseModel):
    title: str

class WatchedCreateSchema(WatchedBase):
    watched_date: Optional[date] = date.today()
    

class WatchedSchema(WatchedBase):
    id: int
    title: str
    watched_date: date

    class Config:
        from_attributes = True