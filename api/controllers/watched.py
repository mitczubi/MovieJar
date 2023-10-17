from sqlalchemy.orm import Session

from models.watched import Watched
from schemas.watched import WatchedCreateSchema

def get_watched_movies(db: Session):
    return db.query(Watched).all()

def get_watched_movie_by_id(db: Session, watched_id: int):
    return db.query(Watched).filter(Watched.id == watched_id).first()

def add_to_watched_movies(db: Session, watched_movie: WatchedCreateSchema):
    db_watched_movie = Watched(title=watched_movie.title, watched_date=watched_movie.watched_date)
    db.add(db_watched_movie)
    db.commit()
    db.refresh(db_watched_movie)
    return db_watched_movie

def update_watched_movie_by_id(db: Session, watched_id: int, watched_movie=WatchedCreateSchema):
    db_watched_movie = get_watched_movie_by_id(db=db, watched_id=watched_id)

    if db_watched_movie is None:
        raise Exception("Movie not found")
    
    db_watched_movie.title = watched_movie.title
    db_watched_movie.watched_date = watched_movie.watched_date
    
    db.commit()
    db.refresh(db_watched_movie)

    return db_watched_movie

def remove_from_watched_movies(db: Session, watched_id: int):
    db_watched_movie = get_watched_movie_by_id(db=db, watched_id=watched_id)

    if db_watched_movie is None:
        raise Exception("Watched movied not found")
    
    db.delete(db_watched_movie)
    db.commit()

    return 