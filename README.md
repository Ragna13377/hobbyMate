## Стек

* Next 14: App Router (NextAuth for OAuth2)
* Prisma ORM (БД: Supabase, Postgres)
* Typescript
* TailwindCSSтз
* shadcn/UI
* SCSS
* Архитектура: FSD + Container/Presenter
* React: React Hook Form
* bcrypt для хэширование паролей

## Возможные проблемы: 

1. Не прогружаются шрифты гугла из next/font. VPN?
2. ~~Typescript не подхватывает автоматически типы у массива svg при правильной настройке svgr~~  
WebStorm от 03/24 вызывает ошибки ESLint
3. MSW невозможно интегрировать в Next 14 [twitter](https://x.com/kettanaito/status/1749496339556094316)
4. Сложная интеграция компонентов shadcn/UI - Form с кастомным компонентом Command при использовании React Hook Form
5. Запросы через Prisma невозможно отменить. (С 2022 года делаем)[https://github.com/prisma/prisma/issues/15594]
6. Невозможно пробросить стиль в Head компонент в Next.

## Доработать

1. ~~Добавить лоадер при загрузке картинок главной страницы~~ Добавлен блюр на изображения. Прожато более, чем в 1000 раз.
2. Добавить роут перехватчик на модальное окно
3. robots & sitemaps [link](https://www.npmjs.com/package/next-sitemap)
