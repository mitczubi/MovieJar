from fastapi import APIRouter, Depends, HTTPException

from sqlalchemy.orm import Session

from db import get_db
from schemas.watched import WatchedCreateSchema, WatchedSchema
from controllers.watched import add_to_watched_movies, get_watched_movies

watched_router = APIRouter()

@watched_router.get("/api/watched/", response_model=list[WatchedSchema], tags=["watched"])
def get_all_watched_movies(db: Session = Depends(get_db)):
    watched_movies = get_watched_movies(db)
    return watched_movies

@watched_router.post("/api/watched/", response_model=WatchedSchema, tags=["watched"])
def add_watched_movie(watched_movie: WatchedCreateSchema, db: Session = Depends(get_db)):
    return add_to_watched_movies(db, watched_movie=watched_movie)