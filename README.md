# realtime-reload
Angular + Spring Boot + Spring Webflux + MongoDB = Realtime reload

## Executando a solução
Para executar, utilize o comando `docker-compose up --build --force-recreate`.
Após executar este comando serão iniciados os containeres do MongoDB, backend e frontend.

### MongoDB
Banco de dados NoSQL que possibilita a utilização do paradigma reativo.

### Backend
Aplicação Spring Boot utilizando Spring Webflux para implementação do endpoint stream.

### Frontend
Aplicação Angular que emite eventos baseado nos eventos recebidos do endpoint de stream.