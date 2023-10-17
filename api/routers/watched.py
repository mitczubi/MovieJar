from fastapi import APIRouter, Depends, HTTPException

from sqlalchemy.orm import Session

from db import get_db
from schemas.watched import WatchedCreateSchema, WatchedSchema
from controllers.watched import add_to_watched_movies, get_watched_movie_by_id, get_watched_movies, remove_from_watched_movies, update_watched_movie_by_id

watched_router = APIRouter()

@watched_router.get("/api/watched/", response_model=list[WatchedSchema], tags=["watched"])
def get_all_watched_movies(db: Session = Depends(get_db)):
    watched_movies = get_watched_movies(db)
    return watched_movies

@watched_router.get("/api/watched/{watched_id}", response_model=WatchedSchema, tags=["watched"])
def get_watched_movie(watched_id: int, db: Session = Depends(get_db)):
    db_watched_movie = get_watched_movie_by_id(db=db, watched_id=watched_id)
    if db_watched_movie is None:
        raise HTTPException(status_code=404, detail="Movie not found.")
    return db_watched_movie

@watched_router.post("/api/watched/", response_model=WatchedSchema, tags=["watched"])
def add_watched_movie(watched_movie: WatchedCreateSchema, db: Session = Depends(get_db)):
    return add_to_watched_movies(db, watched_movie=watched_movie)

@watched_router.put("/api/watched/{watched_id}", response_model=WatchedCreateSchema, tags=["watched"])
def update_watched_movie(watched_id: int, watched_movie: WatchedCreateSchema, db: Session = Depends(get_db)):
    try:
        watched_movie_info = update_watched_movie_by_id(db=db, watched_id=watched_id, watched_movie=watched_movie)
        return watched_movie_info
    except:
        raise HTTPException(status_code=400, detail="Something went wrong.")

@watched_router.delete("/api/watched/{watched_id}", tags=["watched"])
def remove_watched_movie(watched_id: int, db: Session = Depends(get_db)):
    try:
        return remove_from_watched_movies(db=db, watched_id=watched_id)
    except:
        raise HTTPException(status_code=404, detail="Something went wrong!")