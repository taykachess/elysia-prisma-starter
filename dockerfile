FROM dvlprtech/bun
WORKDIR /app
COPY package.json .
RUN bun install
COPY . .
CMD ["bun", "run", "src/index.ts"]
