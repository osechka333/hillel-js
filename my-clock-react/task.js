import * as React from 'react'

function Name({name, onNameChange}) {
    return (
        <div>
            <label htmlFor="name">Name: </label>
            <input id="name" value={name} onChange={onNameChange} />
        </div>
    )
}

// Принимать `animal` и `onAnimalChange` props в эту компоненту
function FavoriteAnimal() {
    // Удалить это, сейчас состоянием будет управлять App
    const [animal, setAnimal] = React.useState('')
    return (
        <div>
            <label htmlFor="animal">Favorite Animal: </label>
            <input
                id="animal"
                value={animal}
                onChange={event => setAnimal(event.target.value)}
            />
        </div>
    )
}

// Раскоментируйте это
// function Display({name, animal}) {
//   return <div>{`Эй ${name}, твое любимое животное: ${animal}!`}</div>
// }

// Удалите этот компонент в пользу нового
function Display({name}) {
    return <div>{`Эй ${name}, ты молодец!`}</div>
}

function App() {
    // Добавить useState для animal
    const [name, setName] = React.useState('')

    return (
        <form>
            <Name name={name} onNameChange={event => setName(event.target.value)} />
            {/* Передать animal и onAnimalChange prop тут (см. как сделано в компоненте Name выше) */}
            <FavoriteAnimal />
            {/* Передать animal prop тут */}
            <Display name={name} />
        </form>
    )
}

export default App


// Шаг 2:
//
//
//
// Сolocating state (Совместное использование состояния)
//
//
//
// Как сообщество, мы неплохо справляемся с поднятием состояния. Со временем это становится естественным. Одна вещь, которую мы обычно с трудом запоминаем, — это вернуть состояние обратно.
//
//
//
//     Задача: вместо имени отображать только животное:

//
//
//
//     ```javascript
// function Display({animal}) {
//   return <div>{`Ваше любимое животное: ${animal}!`}</div>
// }
// ```
//
//
// Вы заметите, что простое обновление компонента `Display` до этого работает нормально, но для дополнительной оценки пройдите процесс перемещения состояния к компонентам, которые в нем нуждаются. Вы знаете, что вы только что сделали для компонента «Animal»? Вам нужно сделать противоположную вещь для компонента «Name».
//
