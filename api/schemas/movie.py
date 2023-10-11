from pydantic import BaseModel
from typing import Optional

class MovieBase(BaseModel):
    name: str

class MovieSchemaCreate(MovieBase):
    seen: Optional[bool] = None

class MovieSchema(MovieBase):
    id: int
    name: str
    seen: bool

    class Config:
        from_attributes = True