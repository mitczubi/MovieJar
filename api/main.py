from fastapi import FastAPI

from routers.movies import movies_router

app = FastAPI()

app.include_router(movies_router)

@app.get("/")
def root():
    return {"message": "Movies API"}