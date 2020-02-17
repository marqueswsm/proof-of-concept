# Prova de Conceito - Rabbitmq

O RabbitMQ é um message broker open sorce amplamente utilizado, visto que é considerado uma alternativa leve e fácil de implantar em um ambiente local e na nuvem. Ele suporta vários protocolos de mensagens e pode implantado em configurações distribuídas para atender aos requisitos de alta escala e alta disponibilidade. Mas informações podem ser obtidas no site oficial da tecnologia. Nesse sentido, este repositório foi criado a fim de prover uma prova de conceito simples de uma implementação do rabbitmq utilizando nodejs. 

### Instalação

Para a instalação do serviço rabbitmq, foi utilizado um container docker fornecido pelo site oficial do serviço. Para reproduzir o ambiente utilizado, execute a instrução abaixo:

```bash
$ docker run -d --hostname my-rabbit --name some-rabbit rabbitmq:3
```