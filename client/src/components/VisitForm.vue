<template>
    <div>
        <form>
            <div class="form-row">
                <div class="form-group col">
                    <label for="plannedDate">Planned date</label>
                    <date-picker
                            id="plannedDate"
                            v-model="datePlan"
                            format="YYYY-MM-DD"
                            type="format"
                            :editable="false"
                            :disabled="!isAdmin"
                            placeholder="Select date"
                    ></date-picker>
                </div>
                <div class="form-group col">
                    <label for="date">Date</label>
                    <date-picker
                            id="date"
                            v-model="date"
                            format="YYYY-MM-DD"
                            type="format"
                            :editable="false"
                            :disabled-date="notAfterToday"
                            placeholder="Select date"
                    ></date-picker>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col">
                    <label for="visitingTeacher">Visiting Teacher</label>
                    <select id="visitingTeacher" class="form-control" v-model="visitingTeacher" :disabled="!isAdmin">
                        <option disabled value="">Please select one</option>
                        <option v-for="user in users" :key="user._id" :value="user._id">
                            {{ getTeacherName(user) }}
                        </option>
                    </select>
                </div>
                <div class="form-group col">
                    <label for="visitedTeacher">Visited Teacher</label>
                    <select id="visitedTeacher" class="form-control" v-model="visitedTeacher" :disabled="!isAdmin">
                        <option disabled value="">Please select one</option>
                        <option v-for="user in users" :key="user._id" :value="user._id">
                            {{ getTeacherName(user) }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col">
                    <label for="subject">Subject</label>
                    <select id="subject" class="form-control" v-model="subject" :disabled="!isAdmin">
                        <option disabled value="">Please select one</option>
                        <option v-for="subject in subjects" :key="subject._id" :value="subject._id">
                            {{ getPropName(subject) }}
                        </option>
                    </select>
                </div>
                <div class="form-group col">
                    <label for="lessonType">Lesson type</label>
                    <select id="lessonType" class="form-control" v-model="lessonType" :disabled="!isAdmin">
                        <option disabled value="">Please select one</option>
                        <option v-for="lessonType in lessonTypes" :key="lessonType._id" :value="lessonType._id">
                            {{ getPropName(lessonType) }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col">
                    <label for="result">Result</label>
                    <div class="input-group mb-3">
                        <input id="result" type="text" class="form-control" aria-describedby="button-addon2" v-model="result" :disabled="true">
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2" data-toggle="modal" data-target="#exampleModal">Enter</button>
                        </div>
                    </div>
                </div>
                <div class="form-group col">
                    <label for="purpose">Purpose</label>
                    <input id="purpose" type="text" class="form-control" placeholder="Purpose" v-model="purpose">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col">
                    <a class="btn btn-success" @click.prevent="submitForm">Submit</a>
                    <a @click="$router.go(-1)" class="btn btn-danger">Cancel</a>
                </div>
            </div>
        </form>

        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Анализ</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <dt>1. Организационный момент учебного занятия (далее - УЗ)</dt>
                                <div class="form-group">
                                    <label>a) подготовка обущающихся к началу занятия, включение в деловой ритм УЗ</label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section1a" v-model="section1a" id="section1a1" value="0">
                                        <label class="form-check-label" for="section1a1">
                                            0 - отсутствует
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section1a" v-model="section1a" id="section1a2" value="1">
                                        <label class="form-check-label" for="section1a2">
                                            1 - присутствует частично
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section1a" v-model="section1a" id="section1a3" value="2">
                                        <label class="form-check-label" for="section1a3">
                                            2 - присутствует в полной мере
                                        </label>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>б) подготовленность оборудования, технического оснащения занятия и т.п</label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section1b" v-model="section1b" id="section1b1" value="0">
                                        <label class="form-check-label" for="section1b1">
                                            0 - отсутствует
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section1b" v-model="section1b" id="section1b2" value="1">
                                        <label class="form-check-label" for="section1b2">
                                            1 - присутствует частично
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section1b" v-model="section1b" id="section1b3" value="2">
                                        <label class="form-check-label" for="section1b3">
                                            2 - присутствует в полной мере
                                        </label>
                                    </div>
                                </div>

                            </div>
                            <div class="form-group">
                                <dt>2. Целеполагание</dt>
                                <div class="form-group">
                                    <label>a) ясность и четкость постановки цели и задач УЗ</label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section2a" v-model="section2a" id="section2a1" value="0">
                                        <label class="form-check-label" for="section2a1">
                                            0 - цель неконкретна
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section2a" v-model="section2a" id="section2a2" value="1">
                                        <label class="form-check-label" for="section2a2">
                                            1 - цель конкретна, но не проверяется ее достижение
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section2a" v-model="section2a" id="section2a3" value="2">
                                        <label class="form-check-label" for="section2a3">
                                            2 - цель диагностична
                                        </label>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>б) взаимосвязь поставленной цели (задачи) с изученным ранее материалом</label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section2b" v-model="section2b" id="section2b1" value="0">
                                        <label class="form-check-label" for="section2b1">
                                            0 - цель не связывается с ранее изученным материалом
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section2b" v-model="section2b" id="section2b2" value="1">
                                        <label class="form-check-label" for="section2b2">
                                            1 - связь заявлена, но не проверяется ее достижение
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section2b" v-model="section2b" id="section2b3" value="2">
                                        <label class="form-check-label" for="section2b3">
                                            2 - присутствует аппеляция к ранее пройденному материалу
                                        </label>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>в) взаимодействие преподавателя с обучающимися на этапе постановки цели и задач</label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section2с" v-model="section2c" id="section2c1" value="0">
                                        <label class="form-check-label" for="section2c1">
                                            0 - преподаватель не аппелирует к студентам
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section2с" v-model="section2c" id="section2c2" value="1">
                                        <label class="form-check-label" for="section2c2">
                                            1 - обращает внимание частично
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section2с" v-model="section2c" id="section2c3" value="2">
                                        <label class="form-check-label" for="section2c3">
                                            2 - с целью усиления мотивации постоянно обращается к студентам
                                        </label>
                                    </div>
                                </div>

                            </div>
                            <div class="form-group">
                                <dt>3. Мотивация обучающихся на занятии</dt>
                                <div class="form-group">
                                    <label>a) целенаправленное создание атмосферы заинтересованности при изучении темы УЗ</label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section3a" v-model="section3a" id="section3a1" value="0">
                                        <label class="form-check-label" for="section3a1">
                                            0 - не уделяется внимание
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section3a" v-model="section3a" id="section3a2" value="1">
                                        <label class="form-check-label" for="section3a2">
                                            1 - использование внешних стимулов
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section3a" v-model="section3a" id="section3a3" value="2">
                                        <label class="form-check-label" for="section3a3">
                                            2 - с целью усиления мотивации преподаватель в ходе занятия вносит изменения в зависимости от подготовки студентов и деятельности студентов
                                        </label>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>б) Ориентация обучающихся на удовлетворение личностно-ориентированных потребностей в пределах УЗ</label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section3b" v-model="section3b" id="section3b1" value="0">
                                        <label class="form-check-label" for="section3b1">
                                            0 - отсутствует
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section3b" v-model="section3b" id="section3b2" value="1">
                                        <label class="form-check-label" for="section3b2">
                                            1 - пристутствует
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section3b" v-model="section3b" id="section3b3" value="2">
                                        <label class="form-check-label" for="section3b3">
                                            2 - присутствует в полной мере
                                        </label>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>в) взаимодействие преподавателя с обучающимися на этапе постановки цели и задач</label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section3c" v-model="section3c" id="section3c1" value="0">
                                        <label class="form-check-label" for="section3c1">
                                            0 - преподаватель не аппелирует к студентам
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section3c" v-model="section3c" id="section3c2" value="1">
                                        <label class="form-check-label" for="section3c2">
                                            1 - обращает внимание частично
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section3c" v-model="section3c" id="section3c3" value="2">
                                        <label class="form-check-label" for="section3c3">
                                            2 - с целью усиления мотивации постоянно обращается к студентам
                                        </label>
                                    </div>
                                </div>

                            </div>
                            <div class="form-group">
                                <dt>4. Организация учебной дейтельности обучающихся</dt>
                                <div class="form-group">
                                    <label>a) характер учебных заданий, вопросов, задач, упражнений (Проблемный, исследовательский, репродуктивный, по образцу (в зависимости от задач))</label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section4a" v-model="section4a" id="section4a1" value="0">
                                        <label class="form-check-label" for="section4a1">
                                            0 - репродуктивный
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section4a" v-model="section4a" id="section4a2" value="1">
                                        <label class="form-check-label" for="section4a2">
                                            1 - частично поисковый
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section4a" v-model="section4a" id="section4a3" value="2">
                                        <label class="form-check-label" for="section4a3">
                                            2 - поисковый с элементами микроисследований
                                        </label>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>б) Соотнесение речевой активности обучающихся и преподавателя в ходе УЗ (в зависимости от типа УЗ)</label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section4b" v-model="section4b" id="section4b1" value="0">
                                        <label class="form-check-label" for="section4b1">
                                            0 - отсутствует
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section4b" v-model="section4b" id="section4b2" value="1">
                                        <label class="form-check-label" for="section4b2">
                                            1 - преобладает объяснение преподавателя
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section4b" v-model="section4b" id="section4b3" value="2">
                                        <label class="form-check-label" for="section4b3">
                                            2 - речевая активность студентов высока
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <dt>5. Владение материалом</dt>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" required name="section5" v-model="section5" id="section51" value="0">
                                    <label class="form-check-label" for="section51">
                                        0 - дается материал не выше уровня учебной программы
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" required name="section5" v-model="section5" id="section52" value="1">
                                    <label class="form-check-label" for="section52">
                                        1 - материал программ иногда дополняется другими факторами
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" required name="section5" v-model="section5" id="section53" value="2">
                                    <label class="form-check-label" for="section53">
                                        2 - материал программ постоянно дополняется различными факторами
                                    </label>
                                </div>
                            </div>
                            <div class="form-group">
                                <dt>6. Психолого педагогический аспект занятия; стиль общения в системе "преподаватель-студент" и "студент-студент"</dt>
                                <div class="form-group">
                                    <label>a) преобладание положительных эмоций преподавателя и обучающихся</label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section6a" v-model="section6a" id="section6a1" value="0">
                                        <label class="form-check-label" for="section6a1">
                                            0 - безразличное отношение
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section6a" v-model="section6a" id="section6a2" value="1">
                                        <label class="form-check-label" for="section6a2">
                                            1 - уравновешенное, по мере требовательное отношение, обстановка сотруднечества
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section6a" v-model="section6a" id="section6a3" value="2">
                                        <label class="form-check-label" for="section6a3">
                                            2 - полное взаимодействие, участие на равных в ходе занятия
                                        </label>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>б) гуманистическая направленность учебно-воспитательного процесса</label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section6b" v-model="section6b" id="section6b1" value="0">
                                        <label class="form-check-label" for="section6b1">
                                            0 - безразличное отношение
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section6b" v-model="section6b" id="section6b2" value="1">
                                        <label class="form-check-label" for="section6b2">
                                            1 - уравновешенное, по мере требовательное отношение, обстановка сотруднечества
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section6b" v-model="section6b" id="section6b3" value="2">
                                        <label class="form-check-label" for="section6b3">
                                            2 - полное взаимодействие, участие на равных в ходе занятия
                                        </label>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>в) взаимодействие в освоении учебного материала в позициях "преподаватель-студент", "студент-студент", "группа-группа"</label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section6c" v-model="section6c" id="section6c1" value="0">
                                        <label class="form-check-label" for="section6c1">
                                            0 - безразличное отношение
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section6c" v-model="section6c" id="section6c2" value="1">
                                        <label class="form-check-label" for="section6c2">
                                            1 - уравновешенное, по мере требовательное отношение, обстановка сотруднечества
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section6c" v-model="section6c" id="section6c3" value="2">
                                        <label class="form-check-label" for="section6c3">
                                            2 - полное взаимодействие, участие на равных в ходе занятия
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <dt>7. Методика, технология преподавания (через призму результативности учебных достижений обучающихся)</dt>
                                <div class="form-group">
                                    <label>a) традиционные методы преподавания</label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section7a" v-model="section7a" id="section7a1" value="0">
                                        <label class="form-check-label" for="section7a1">
                                            0 - однообразие методов
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section7a" v-model="section7a" id="section7a2" value="1">
                                        <label class="form-check-label" for="section7a2">
                                            1 - сочетание 2-3 методов
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section7a" v-model="section7a" id="section7a3" value="2">
                                        <label class="form-check-label" for="section7a3">
                                            2 - широкий арсенал, максимальное сочетание методов
                                        </label>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>б) собственные оригинальные методические приемы</label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section7b" v-model="section7b" id="section7b1" value="0">
                                        <label class="form-check-label" for="section7b1">
                                            0 - репродуктивные методы
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section7b" v-model="section7b" id="section7b2" value="1">
                                        <label class="form-check-label" for="section7b2">
                                            1 - использование оригинальных методов
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section7b" v-model="section7b" id="section7b3" value="2">
                                        <label class="form-check-label" for="section7b3">
                                            2 - широкий арсенал, максимальное сочетание методов
                                        </label>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>в) использование инновационных педагогических технологий</label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section7c" v-model="section7c" id="section7c1" value="0">
                                        <label class="form-check-label" for="section7c1">
                                            0 - однообразие методов
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section7c" v-model="section7c" id="section7c2" value="1">
                                        <label class="form-check-label" for="section7c2">
                                            1 - сочетание 2-3 методов
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section7c" v-model="section7c" id="section7c3" value="2">
                                        <label class="form-check-label" for="section7c3">
                                            2 - широкий арсенал, максимальное сочетание методов
                                        </label>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>г) оправданность выбора методов, форм и способов обучения</label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section7d" v-model="section7d" id="section7d1" value="0">
                                        <label class="form-check-label" for="section7d1">
                                            0 - отсутствует
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section7d" v-model="section7d" id="section7d2" value="1">
                                        <label class="form-check-label" for="section7d2">
                                            1 - присутствует частично
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section7d" v-model="section7d" id="section7d3" value="2">
                                        <label class="form-check-label" for="section7d3">
                                            2 - присутствует в полной мере
                                        </label>
                                    </div>
                                </div>


                            </div>
                            <div class="form-group">
                                <dt>8. Отбор и реальзация содержания занятия</dt>
                                <div class="form-group">
                                    <label>a) соответствие содержания УЗ поставленным целям и задачам: научность, отсутствие фактических ошибок и неточностей в изложении учебного материала, доступность, наглядность, необычность, новизна, занимательность учебного материала</label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section8a" v-model="section8a" id="section8a1" value="0">
                                        <label class="form-check-label" for="section8a1">
                                            0 - не соответствует, имеются ошибки или неточности в изложении материала
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section8a" v-model="section8a" id="section8a2" value="1">
                                        <label class="form-check-label" for="section8a2">
                                            1 - цели достигнуты частично, материал изложен кратко, в сжатой форме без использования приемов привлечения внимания
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section8a" v-model="section8a" id="section8a3" value="2">
                                        <label class="form-check-label" for="section8a3">
                                            2 - цели достигнуты в полном объеме, необычность, новизна, занимательность учебного материала
                                        </label>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>б) достаточность и содержательная целесообразность объема учебного материала</label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section8b" v-model="section8b" id="section8b1" value="0">
                                        <label class="form-check-label" for="section8b1">
                                            0 - содержательная бедность учебного материала
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section8b" v-model="section8b" id="section8b2" value="1">
                                        <label class="form-check-label" for="section8b2">
                                            1 - материал подобран обоснованно, соответствует поставленным целям УЗ
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" required name="section8b" v-model="section8b" id="section8b3" value="2">
                                        <label class="form-check-label" for="section8b3">
                                            2 - материал подобран творческий, раскрыты все аспекты учебного занятия, с целью усиления мотивации вносятся изменения
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <dt>9. Результативность занятия</dt>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" required name="section9" v-model="section9" id="section91" value="0">
                                    <label class="form-check-label" for="section91">
                                        0 - цель не достигнута
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" required name="section9" v-model="section9" id="section92" value="1">
                                    <label class="form-check-label" for="section92">
                                        1 - частично достигнута
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" required name="section9" v-model="section9" id="section93" value="2">
                                    <label class="form-check-label" for="section93">
                                        2 - полное достижение цели
                                    </label>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary" @click.prevent="convertResultFromFormToStr" data-dismiss="modal">Save changes</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {urlMixin} from "../mixins/urlMixin";
    import axios from "axios";
    import moment from "moment";
    import DatePicker from "vue2-datepicker";
    import 'vue2-datepicker/index.css';
    import {mapGetters} from "vuex";


    const today = new Date();

    export default {
        mixins: [urlMixin],
        computed: {
            ...mapGetters(["isAdmin"])
        },
        props:['row'],
        components: { DatePicker },
        data(){
            return{
                users: [],
                subjects: [],
                lessonTypes: [],
                visitedTeacher: '',
                visitingTeacher: '',
                datePlan: '',
                date: '',
                subject: '',
                lessonType: '',
                result: '',
                purpose: '',
                section1a: '',
                section1b: '',
                section2a: '',
                section2b: '',
                section2c: '',
                section3a: '',
                section3b: '',
                section3c: '',
                section4a: '',
                section4b: '',
                section5: '',
                section6a: '',
                section6b: '',
                section6c: '',
                section7a: '',
                section7b: '',
                section7c: '',
                section7d: '',
                section8a: '',
                section8b: '',
                section9: ''
            }
        },
        mounted() {
            this.getUsers();
            this.getSubjects();
            this.getLessonTypes();
            if(this.result){
                this.convertResultFromStrToForm();
            }
        },
        created() {
            if(this.row)
            {
                this.setDataForm();
            }
        },
        methods: {
            getUsers(){
                axios.get(this.apiUrl() + '/api/users').then(res => {
                    this.users = res.data.users;
                });
            },
            getSubjects(){
                axios.get(this.apiUrl() + '/api/subjects').then(res => {
                    this.subjects = res.data.subjects;
                });
            },
            getLessonTypes(){
                axios.get(this.apiUrl() + '/api/lesson_types').then(res => {
                    this.lessonTypes = res.data.lesson_types;
                });
            },
            addRow(){
                let date = this.date ? moment(String(this.date)).format('YYYY-MM-DD') : null;
                let datePlan = this.datePlan ? moment(String(this.datePlan)).format('YYYY-MM-DD') : null;
                let row = {
                    visited_teacher: this.visitedTeacher,
                    visiting_teacher: this.visitingTeacher,
                    date_plan: datePlan,
                    date_fact: date,
                    subject: this.subject,
                    lesson_type: this.lessonType,
                    result: this.result,
                    purpose: this.purpose,
                    visits_list: this.$route.params.id
                };
                axios.post(this.apiUrl() + '/api/visits', row)
                    .then(res => {
                        console.log("Visit was added.", res);
                        this.$router.back();
                    });
            },
            editRow(){
                let row = {
                    date_fact: this.dateToStr(this.date),
                    date_plan: this.dateToStr(this.datePlan),
                    lesson_type: this.lessonType,
                    purpose: this.purpose,
                    result: this.result,
                    subject: this.subject,
                    visited_teacher: this.visitedTeacher,
                    visiting_teacher: this.visitingTeacher
                };
                axios.put(this.apiUrl() + '/api/visits/' + this.$route.params.visit_id, row)
                .then(res => {
                    console.log("Visit was updated", res);
                    this.$router.back();
                })
            },
            getTeacherName(teacher){
                if (teacher){
                    return teacher.name + " " + teacher.surname;
                } else {
                    return ""
                }
            },
            getPropName(prop){
                if(prop){
                    return prop.name;
                } else {
                    return " ";
                }
            },
            notAfterToday(date) {
                return date > today;
            },
            setDataForm() {
                if(this.row){
                    let date = this.strToDate(this.row.date_fact);
                    let datePlan = this.strToDate(this.row.date_plan);
                    this.visitedTeacher = this.row.visited_teacher;
                    this.visitingTeacher = this.row.visiting_teacher;
                    this.subject = this.row.subject;
                    this.lessonType = this.row.lesson_type;
                    this.datePlan = datePlan;
                    this.date = date;
                    this.result = this.row.result;
                }
            },
            strToDate(str){
                return str ? moment(String(str),'YYYY-MM-DD').toDate() : null;
            },
            dateToStr(date){
                return date ? moment(String(date)).format('YYYY-MM-DD') : null;
            },
            convertResultFromFormToStr(){
                let str =
                `1. а)${this.section1a}, б)${this.section1b}; 2. а)${this.section2a}, б)${this.section2b}, в)${this.section2c}; 3. а)${this.section3a}, б)${this.section3b}, в)${this.section3c}; 4. а)${this.section4a}, б)${this.section4b}; 5. ${this.section5}; 6. а)${this.section6a}, б)${this.section6b}, в)${this.section6c}; 7. а)${this.section7a}, б)${this.section7b}, в)${this.section7c}, г)${this.section7d}; 8. а)${this.section8a}, б)${this.section8b}; 9. ${this.section9}`;
                this.result = str;
            },
            convertResultFromStrToForm(){
                const p = ['a', 'b', 'c', 'd']

                let res = this.result.split(/;\s/).map(el => {
                    return el.substring(3);
                }).map(el => {
                    return el.split(/,\s/).map(subEl => {
                        return subEl.replace(/[а-г]\)/, '')
                    });
                });
                let h = {}
                res.forEach((el, i) => {
                    el.forEach((subEl, ii) => {
                        if (el.length > 1){
                            h[`section${i+1}${p[ii]}`] = subEl
                        } else {
                            h[`section${i+1}`] = subEl
                        }
                    })
                })

                this.section1a = h.section1a;
                this.section1b = h.section1b;
                this.section2a = h.section2a;
                this.section2b = h.section2b;
                this.section2c = h.section2c;
                this.section3a = h.section3a;
                this.section3b = h.section3b;
                this.section3c = h.section3c;
                this.section4a = h.section4a;
                this.section4b = h.section4b;
                this.section5 = h.section5;
                this.section6a = h.section6a;
                this.section6b = h.section6b;
                this.section6c = h.section6c;
                this.section7a = h.section7a;
                this.section7b = h.section7b;
                this.section7c = h.section7c;
                this.section7d = h.section7d;
                this.section8a = h.section8a;
                this.section8b = h.section8b;
                this.section9 = h.section9;
            },
            submitForm()
            {
                console.log(this.row);
                if(this.row){
                    this.editRow();
                } else {
                    this.addRow();
                }
            }
        }
    }
</script>

<style scoped>
    .btn-success{
        color: white;
    }
    .btn-danger{
        color: white;
        margin-left: 20px;
    }
    #plannedDate, #date{
        width: 100% !important;
    }
</style>