# Vídeo de apresentação do LETER

Projeto de vídeo vertical (1080 × 1920) criado com [Remotion](https://www.remotion.dev/). A composição principal se chama `LeterApresentacao`.

## Antes de começar

Instale uma versão atual do [Node.js](https://nodejs.org/) (LTS). O `npm` já vem junto com o Node.

Abra um terminal na pasta do projeto:

```powershell
cd leter-motion
```

## 1. Instalar as dependências

Este passo só é necessário na primeira vez ou quando o projeto receber atualizações nas dependências.

```powershell
npm install
```

Espere o comando terminar. Ele criará a pasta `node_modules`, usada pelo projeto localmente.

## 2. Abrir e assistir ao vídeo

Inicie o Remotion Studio:

```powershell
npm run dev
```

O terminal mostrará um endereço, normalmente `http://localhost:3000`. Abra esse endereço no navegador e selecione a composição **LeterApresentacao**.

No Studio você pode:

- dar play e pausar o vídeo;
- arrastar a linha do tempo para conferir cenas específicas;
- verificar o resultado no formato vertical;
- editar o código e ver as alterações na prévia.

Para encerrar a prévia, volte ao terminal e pressione `Ctrl + C`.

## 3. Gerar o arquivo MP4

Quando o vídeo estiver pronto, rode:

```powershell
npx remotion render LeterApresentacao out/leter.mp4
```

Ao terminar, o arquivo final estará em `out/leter.mp4`.

## Verificar se o código está correto

Antes de gerar ou enviar alterações, execute:

```powershell
npm run lint
```

O comando verifica erros de TypeScript e de estilo no código.

## Onde editar cada parte

| O que alterar | Arquivo |
| --- | --- |
| Textos, cores, imagens e animações das cenas | `src/LeterVideo.tsx` |
| Formato, duração e nome da composição | `src/Composition.tsx` |
| Fotos usadas no vídeo | `public/images/` |
| Dependências e comandos disponíveis | `package.json` |

Depois de trocar uma imagem, mantenha o mesmo nome do arquivo ou atualize o caminho correspondente em `src/LeterVideo.tsx`.
