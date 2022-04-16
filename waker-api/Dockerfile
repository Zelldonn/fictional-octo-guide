FROM python:3.10-slim-buster

RUN apt update && apt upgrade 
RUN apt install -y etherwake

WORKDIR /waker-api

COPY ./requirements.txt /waker-api/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /waker-api/requirements.txt

COPY ./src /waker-api/src

CMD ["uvicorn", "src.main:app","--reload","--host", "0.0.0.0", "--port", "80"]