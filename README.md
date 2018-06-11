## Таймлайн событий

Список событий разных типов, с возможностью сортировки по дате и типу события.

### Команды

* `yarn start` - запуск development webpack server (http://localhost:3000/)
* `yarn lint` - запуск проектного линтера
* `yarn build` - запуск production-сборки (каталог **dist/**)
* `yarn server` - запуск live-server из каталога **dist/**

### Требования к окружению

- node 8
- yarn 0.27.5

### Событие

```
    {
        _id: string,
        type: string,
        date: "YYYY-MM-ddThh:mm:ssZ"

        ...
    }
```

### Добавление нового события

1. Добавить новую модель в **src/app/model**
2. Добавать компонент для списка, просмотра, создания в **src/app/events/myevent**
3. Добавить новое собтие в **src/app/events/eventComponent.service.ts**
4. Добавить новые поля в **src/app/events/eventJSON.model.ts**
