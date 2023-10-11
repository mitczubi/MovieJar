from fastapi import APIRouter, Depends, HTTPException

from sqlalchemy.orm import Session

from db import get_db
from schemas.movie import MovieSchema, MovieSchemaCreate
from controllers.movie import create_movie, fetch_random_movie, get_movies, get_movie_by_id, remove_movie, update_movie

movies_router = APIRouter()

@movies_router.get("/api/movies/", response_model=list[MovieSchema], tags=["movies"])
def get_all_movies(db: Session = Depends(get_db)):
    movies = get_movies(db)
    return movies

@movies_router.get("/api/movies/{movie_id}", response_model=MovieSchema, tags=["movies"])
def get_movie(movie_id: int, db: Session = Depends(get_db)):
    db_movie = get_movie_by_id(db, movie_id=movie_id)
    if db_movie is None:
        raise HTTPException(status_code=400, detail="Movie not found")
    return db_movie

@movies_router.get("/api/movies/random/", response_model=MovieSchema, tags=["movies"])
def get_random_movie(db: Session = Depends(get_db)):
    return fetch_random_movie(db=db)

@movies_router.post("/api/movies/", response_model=MovieSchema, tags=["movies"])
def add_movie(movie: MovieSchemaCreate, db: Session = Depends(get_db)):
    return create_movie(db=db, movie=movie)

@movies_router.put("/api/movies/{movie_id}", response_model=MovieSchemaCreate, tags=["movies"])
def put_movie(movie_id: int, movie: MovieSchemaCreate, db: Session = Depends(get_db)):
    try:
        movie_info = update_movie(db, movie_id, movie)
        return movie_info
    except:
        raise HTTPException(status_code=400, detail="Something went wrong")

@movies_router.delete("/api/movies/{movie_id}", tags=["movies"])
def delete_movie(movie_id: int, db: Session = Depends(get_db)):
    try:
        return remove_movie(db=db, movie_id=movie_id)
    except:
        raise HTTPException(status_code=404, detail="Something went wrong")