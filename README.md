# 📚 API NestJS - CoffeeDelivery

API RESTful desenvolvida com NestJS, Prisma ORM e PostgreSQL (NeonDB), para gerenciar cafés com dois endpoints principais:

- Buscar detalhes de um café por ID  
- Criar um novo café com validação de campos obrigatórios
---

## 🚀 Tecnologias

- [NestJS](https://nestjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL (NeonDB)](https://neon.tech/)
- [TypeScript](https://www.typescriptlang.org/)
- [class-validator](https://github.com/typestack/class-validator)

---

## ⚙️ Instalação

1. Clone o repositório:

```bash
git clone https://github.com/devJPMello/Coffe-Delivery-API.git
```

2. Instale as dependências:

```bash
npm install
```

3. Configure a variável de ambiente no arquivo `.env`:

```
DATABASE_URL="postgresql://USUARIO:SENHA@HOST/neondb?sslmode=require"
```

---

## 🛠️ Migrations e Seed

1. Crie o banco de dados e rode as migrations:

```bash
npm install ts-node --save-dev
```

2. Popule o banco com dados iniciais:

```bash
npm run seed
```

---

## ▶️ Rodando a aplicação

```bash
npm run start:dev
```

Servidor disponível por padrão em:  
👉 `http://localhost:3000`

---

## 📌 Endpoints

### ClasseDeAula

- `GET /coffes/:id/detalhes`:Buscar detalhes completos do café pelo ID.
- `POST /coffee-create`:Criar um novo café (campos obrigatórios: nome, tipo e id).
---

## 🧼 Resetar base de dados

Durante desenvolvimento, para resetar os dados:

```ts
  await prisma.entrega.deleteMany();
  await prisma.itemPedido.deleteMany();
  await prisma.pedido.deleteMany();
  await prisma.tagCafe.deleteMany();
  await prisma.cafe.deleteMany();
  await prisma.cliente.deleteMany();
```

Essas linhas já estão incluídas no `prisma/seed.ts`.
