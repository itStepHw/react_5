

const ControlsBook = () => {

    const modal_content = document.getElementById('modal_content')


    const open_modal = (modal_content, content) => {
        modal_content.innerHTML = content
        document.body.classList.add('active')

        const blackOverlay = document.querySelector('.black')
        blackOverlay.addEventListener('click', () => {
            document.body.classList.remove('active')
        })
    }

    const add_book_view = () => {
        return `
        <form id="add_book_form" class="add_book_form form">
            <p>Добавить книгу</p>
            <input type="text" name="_title" id="_title" placeholder="Название книги" required>
            <input type="text" name="_authorName" id="_authorName" placeholder="Имя автора" required>
            <input type="number" name="_publicationYear" id="_publicationYear" placeholder="Год издательства" required>
            <input type="text" name="_publisher" id="_publisher" placeholder="Название издательства" required>
            <input type="number" name="_pages" id="_pages" placeholder="Кол-во страниц" required>
            <input type="number" name="_copies" id="_copies" placeholder="Кол-во экземпляров в библиотеке" required>
             <input type="hidden" name="_popularity" id="_popularity" placeholder="Популярность" required>
            <button type="submit" class="button">Сохранить</button>
        </form>
    `
    }



    return(
        <div className={'control_buttons'}>
            <div className="button" id="add_book_button">
                <button id="add_button" onClick={} className="add_button">Добавить книгу</button>
            </div>
            <div>
                <input className="search_input" id="search_input" type="text" placeholder="Поиск..."/>
            </div>
            <div className="button">
                <button className="add_button">Сортировать по названию</button>
            </div>
            <div className="button">
                <button className="add_button">Сортировать по имени</button>
            </div>
            <div className="button">
                <button className="add_button">Сортировать по кол-во экземпляров</button>
            </div>
            <div className="button">
                <button className="add_button">Сбросить</button>
            </div>
        </div>
    )
}

export default ControlsBook