FROM python:3

COPY ./requirements.txt /

RUN pip install --no-cache-dir --timeout=1000 -r /requirements.txt

COPY . /home/app

COPY ./entrypoint.sh /

WORKDIR /home/app

ENTRYPOINT ["sh", "/entrypoint.sh"]
