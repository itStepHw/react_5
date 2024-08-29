import Book from "./BookClass.jsx";


const DrawBooks = () => {
    return(
        <div className={'books'}>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Название</th>
                    <th>Имя автора</th>
                    <th>Год издательства</th>
                    <th>Название издательства</th>
                    <th>Количество страниц</th>
                    <th>Количество экземпляров в библиотеке</th>
                    <th>Изменить</th>
                    <th>Удалить</th>
                </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    )
}

export default DrawBooks;