<h1 align="center"> Provas de Conceito </h1>

Este Monorepo foi criado a fim de reunir diversas provas de conceito sobre diversas tecnologias. O intuito de cada prova de conceito é verificar a viabilidade da utilização de diferentes tecnologias na resolução de problemas específicos.

## Provas

### RabbitMQ

O RabbitMQ é um message broker open sorce amplamente utilizado, visto que é considerado uma alternativa leve e fácil de implantar em um ambiente local e na nuvem. Ele suporta vários protocolos de mensagens e pode ser implantado em configurações distribuídas para atender aos requisitos de alta escala e alta disponibilidade. Mais informações podem ser obtidas no site oficial da tecnologia. Nesse sentido, este repositório foi criado a fim de prover uma prova de conceito simples de uma implementação do rabbitmq utilizando nodejs. 

[Projeto](https://github.com/marqueswsm/proof-of-concept/tree/master/packages/poc-rabbitmq)

### Kong Api Gateway

O API Gateway é inserido entre o cliente e os serviços em execução, ao passo que realizar o roteamento das solicitações desses clientes para o serviço apropriado. No mesmo sentido, os API Gateways também podem ser usados para várias funções, incluindo **Gateway Routing, Gateway Aggregation, and Gateway Offloading.** Nesse repositório, usaremos Kong para a função de Gateway Routing. Se você quiser saber mais sobre API Gateway, recomendo que você consulte a [documentação da Microsoft](https://docs.microsoft.com/en-us/azure/architecture/microservices/design/gateway).

[Projeto](https://github.com/marqueswsm/proof-of-concept/tree/master/packages/poc-kong-gateway)

### Lincença

MIT License