from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers.movies import movies_router

app = FastAPI()

origins = [
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(movies_router)

@app.get("/")
def root():
    return {"message": "Movies API"}