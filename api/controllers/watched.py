from sqlalchemy.orm import Session

from models.watched import Watched
from schemas.watched import WatchedCreateSchema

def get_watched_movies(db: Session):
    return db.query(Watched).all()

def add_to_watched_movies(db: Session, watched_movie: WatchedCreateSchema):
    db_watched_movie = Watched(title=watched_movie.title, watched_date=watched_movie.watched_date)
    db.add(db_watched_movie)
    db.commit()
    db.refresh(db_watched_movie)
    return db_watched_movie