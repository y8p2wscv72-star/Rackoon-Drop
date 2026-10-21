#!/usr/bin/env bash
# Сборка мини-аппа в папку dist/ (её и заливаем на хостинг).
# Нужны Node.js и пакеты react, react-dom, esbuild:  npm install react react-dom esbuild
set -e
cd "$(dirname "$0")"
ESBUILD="${ESBUILD:-npx esbuild}"
rm -rf dist && mkdir -p dist
$ESBUILD src/main.jsx --bundle --minify --format=iife --target=es2019,safari14 \
  --loader:.html=text --define:process.env.NODE_ENV='"production"' \
  --outfile=dist/app.js
cp index.html dist/
cp -r public/assets dist/assets
echo "Готово: dist/"
