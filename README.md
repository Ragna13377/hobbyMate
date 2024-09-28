## Стек

* Next 14: App Router (NextAuth for OAuth2)
* Typescript
* TailwindCSS
* shadcn/UI
* SCSS
* Архитектура: FSD + Container/Presenter
* React: React Hook Form

## Возможные проблемы: 

1. Не прогружаются шрифты гугла из next/font. VPN?
2. ~~Typescript не подхватывает автоматически типы у массива svg при правильной настройке svgr~~  
WebStorm от 03/24 вызывает ошибки ESLint
3. MSW невозможно интегрировать в Next 14 [twitter](https://x.com/kettanaito/status/1749496339556094316)
4. Сложная интеграция компонентов shadcn/UI - Form с кастомным компонентом Command при использовании React Hook Form

## Доработать

1. Добавить лоадер при загрузке картинок главной страницы
2. Добавить роут перехватчик на модальное окно
