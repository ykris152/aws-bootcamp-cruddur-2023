# FROM python:3.10-slim-buster
FROM 938858911474.dkr.ecr.ap-northeast-1.amazonaws.com/cruddur-python:3.10-slim-buster

WORKDIR /backend-flask

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . .

EXPOSE ${PORT}
ENV PYTHONBUFFERED=1
CMD [ "python3", "-m", "flask", "run", "--host=0.0.0.0", "--port=4567", "--debug"]