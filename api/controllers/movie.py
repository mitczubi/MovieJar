from sqlalchemy.orm import Session
from sqlalchemy.sql.expression import func
from models.movie import Movie
from schemas.movie import MovieSchemaCreate

def get_movies(db: Session):
    return db.query(Movie).all()

def get_movie_by_id(db: Session, movie_id: int):
    return db.query(Movie).filter(Movie.id == movie_id).first()

def fetch_random_movie(db: Session):
    db_movie = db.query(Movie).order_by(func.random()).first()
    return db_movie

def create_movie(db: Session, movie: MovieSchemaCreate):
    db_movie = Movie(name=movie.name, seen=movie.seen)
    db.add(db_movie)
    db.commit()
    db.refresh(db_movie)
    return db_movie

def update_movie(db: Session, movie_id: int, movie_info: MovieSchemaCreate):
    db_movie = get_movie_by_id(db=db, movie_id=movie_id)

    if db_movie is None:
        raise Exception("Movie not found")
    
    db_movie.name = movie_info.name
    db_movie.seen = movie_info.seen

    db.commit()
    db.refresh(db_movie)

    return db_movie

def remove_movie(db: Session, movie_id: int):
    db_movie = get_movie_by_id(db=db, movie_id=movie_id)

    if db_movie is None:
        raise Exception("Movie not found")
    
    db.delete(db_movie)
    db.commit()

    return