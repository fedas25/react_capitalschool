import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin: 0 auto ;
    width: 80vw;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    input {
        width: 200px;
    }
    .teacher {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .course {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`;

export default function index() {
    return (
        <Container>
            <div className='teacher'>
                Преподаватель
                <form className='teacher'>
                    <input placeholder='фамилия' type='text'></input>
                    <input placeholder='имя' type='text'></input>
                    <input placeholder='отчество' type='text'></input>
                    <input placeholder='пароль' type='text'></input>
                    <input placeholder='email' type='text'></input>
                    <textarea placeholder='описание'></textarea>
                    <textarea placeholder='сертификаты (через запятую)'></textarea>
                    <input placeholder='ссылка на сессию' type='text'></input>
                    <input placeholder='id ( если изменить данные )' type='text'></input>
                    <input type="file" placeholder='фото препода' />
                    <input type="file" placeholder='аудио препода' />
                    <button>создать</button>
                    <button>заменить</button>
                    <br />
                    <input placeholder='id препода' type='text'></input>
                    <input placeholder='id курса' type='text'></input>
                    <button>установить на курс</button>
                    <button>снять с курса</button>
                    <br />
                    <input placeholder='id препода' type='text'></input>
                    <input placeholder='рабочие часы' type='text'></input>
                    <button>установить рабочие часы</button>
                </form>
                преподы:
                <ol>
                    <li>
                        <ol>
                            <li>фио</li>
                            <li>id</li>
                            <li>средний бал учеников за мес</li>
                            <li>курсы</li>
                            <li>ученики:
                                <ul>
                                    <li>
                                        <ul>
                                            <li>id</li>
                                            <li>фио</li>
                                            <li>название курсов</li>
                                            <li>баллы за экзамен</li>
                                            <li>дата экзов</li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <ul>
                                            <li>id</li>
                                            <li>фио</li>
                                            <li>название курсов</li>
                                            <li>баллы за экзамен</li>
                                            <li>дата экзов</li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <ul>
                                            <li>id</li>
                                            <li>фио</li>
                                            <li>название курсов</li>
                                            <li>баллы за экзамен</li>
                                            <li>дата экзов</li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <ul>
                                            <li>id</li>
                                            <li>фио</li>
                                            <li>название курсов</li>
                                            <li>баллы за экзамен</li>
                                            <li>дата экзов</li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <ul>
                                            <li>id</li>
                                            <li>фио</li>
                                            <li>название курсов</li>
                                            <li>баллы за экзамен</li>
                                            <li>дата экзов</li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <ul>
                                            <li>id</li>
                                            <li>фио</li>
                                            <li>название курсов</li>
                                            <li>баллы за экзамен</li>
                                            <li>дата экзов</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ol>
                    </li>
                </ol>
            </div>
            <div className='course'>
                Курс
                <form className='teacher'>
                    <input placeholder='название' type='text'></input>
                    <textarea placeholder='описание'></textarea>
                    <input placeholder='цвет' type='text'></input>
                    <input placeholder='продолжительность в часах' type='text'></input>
                    <input placeholder='продолжительность в месяцах' type='text'></input>
                    <input placeholder='цена за час' type='text'></input>
                    <input placeholder='скидка в процентах за курс' type='text'></input>
                    <textarea placeholder='этапы в виде: название:продолжительность в часах:описание этапа, ...'></textarea>
                    <button>курс создать</button>
                </form>
                <ol>
                    <li>
                        <ol>
                            <li>название курса
                                <ul>
                                    <li>id курса</li>
                                    <li>кол-во учеников на курсе</li>
                                </ul>
                            </li>
                        </ol>
                    </li>
                </ol>
            </div>
            <div className='course'>
                Тест
                <form className='teacher'>
                    <input placeholder='id курса' type='text'></input>
                    <input placeholder='номер ячейки курса' type='text'></input>
                    <input placeholder='Вопрос' type='text'></input>
                    <input placeholder='1 ответ' type='text'></input>
                    <input placeholder='2 ответ' type='text'></input>
                    <input placeholder='3 ответ' type='text'></input>
                    <input placeholder='4 ответ' type='text'></input>
                    <input placeholder='номер правильного ответа' type='text'></input>
                    <button>добавить вопрос</button>
                </form>
                <ol type = "I">
                    <li>
                        <ol >
                            <li>id курса
                                <ol >
                                    <li>номер ячейки
                                        <ol>
                                            <li>вопрос 1</li>
                                            <li>вопрос 2</li>
                                            <li>вопрос 3</li>
                                            <li>вопрос 4</li>
                                            <li>ответ</li>
                                        </ol>
                                    </li>
                                    <li>номер ячейки
                                        <ol>
                                            <li>вопрос 1</li>
                                            <li>вопрос 2</li>
                                            <li>вопрос 3</li>
                                            <li>вопрос 4</li>
                                            <li>ответ</li>
                                        </ol>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <ol >
                            <li>id курса
                                <ol >
                                    <li>номер ячейки
                                        <ol>
                                            <li>вопрос 1</li>
                                            <li>вопрос 2</li>
                                            <li>вопрос 3</li>
                                            <li>вопрос 4</li>
                                            <li>ответ</li>
                                        </ol>
                                    </li>
                                    <li>номер ячейки
                                        <ol>
                                            <li>вопрос 1</li>
                                            <li>вопрос 2</li>
                                            <li>вопрос 3</li>
                                            <li>вопрос 4</li>
                                            <li>ответ</li>
                                        </ol>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <ol >
                            <li>id курса
                                <ol >
                                    <li>номер ячейки
                                        <ol>
                                            <li>вопрос 1</li>
                                            <li>вопрос 2</li>
                                            <li>вопрос 3</li>
                                            <li>вопрос 4</li>
                                            <li>ответ</li>
                                        </ol>
                                    </li>
                                    <li>номер ячейки
                                        <ol>
                                            <li>вопрос 1</li>
                                            <li>вопрос 2</li>
                                            <li>вопрос 3</li>
                                            <li>вопрос 4</li>
                                            <li>ответ</li>
                                        </ol>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </li>
                </ol>
            </div>
        </Container>
    )
}
