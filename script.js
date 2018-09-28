let windowWidth = window.innerWidth;
let persons = [
    {
        name: "Стас Черчесов",
        avatar: "images/avatar3.jpg",
        unreadMessagesCounter: 1,
        messages: [
            {
                date: "29.09.2018 12:40",
                content: "Здравия желаю 👨🏻"
            },
            {
                date: "29.09.2019 12:44",
                content: "Станислав Саламыч, опять вы со своими шуточками",
                isMine: true
            },
            {
                date: "29.09.2019 12:45",
                content: "Носи усы, носи, не ссы"
            }
        ]
    },
    {
        name: "Скриптонит",
        avatar: "./images/avatar2.jpg",
        unreadMessagesCounter: 3,
        messages: [
            {
                date: "01.09.2018 04:20",
                content: "цывлтщц ощшты"
            },
            {
                date: "01.09.2018 04:33",
                content: "Чего?",
                isMine: true
            },
            {
                date: "01.09.2018 04:35",
                content: "ивалдтш ввт лощт"
            },
            {
                date: "01.09.2018 04:35",
                content: "влытмэ Казахстан"
            },
            {
                date: "01.09.2018 04:36",
                content: "Да не понимаю я!",
                isMine: true
            },
            {
                date: "01.09.2018 04:37",
                content: "паывмтжд Павлодааар"
            },
            {
                date: "01.09.2018 04:37",
                content: "в доме цжвдытд"
            },
            {
                date: "01.09.2018 04:37",
                content: "уцщозт план"
            }

        ]
    },
    {
        name: "Мария Орзул",
        avatar: "./images/avatar1.jpg",
        unreadMessagesCounter: 0,
        messages: [
            {
                date: "25.03.2015 21:30",
                content: "Привет, че дел?"
            },
            {
                date: "25.03.2015 21:32",
                content: "Привет, да вот к матчу готовлюсь, а ты?",
                isMine: true
            },
            {
                date: "25.03.2015 21:35",
                content: "Я подъехала, может выйдешь? В машине посидим"
            },
            {
                date: "25.03.2015 21:39",
                content: "🤔",
                isMine: true
            },
            {
                date: "25.03.2015 21:40",
                content: "Давай выходи, я здесь стою",
                attachment: {
                    type: "url",
                    content: "https://yandex.ru/maps/-/CBBbaBsKXD",
                    previewText: "Яндекс Карты"
                }
            }
        ]
    }
];

var app = new Vue({
    el: '#app',
    data: function () {
        return {
            persons: persons,
            selectedPerson: persons[0],
            activeMessages: persons[0].messages,
            personSelected: false,
            windowWidth: windowWidth,
            showMenu: false
        }
    },
    methods: {
        onSelectPerson: function (person) {
            this.selectedPerson = person;
            this.activeMessages = person.messages;

            setTimeout(function(){
                var objDiv = document.getElementsByClassName("messages__content")[0];
                objDiv.scrollTop = objDiv.scrollHeight;
            },0);

            // if(window.innerWidth <= 760) {
                this.personSelected = true;
            // }
        },
        showMessages: function() {
            if(window.innerWidth <= 760) {
                return this.personSelected;
            }

            return true;
        },

        isMobile: function() {
            console.log(window.innerWidth);
            return window.innerWidth <= 760;
        },

        unselectPerson: function(){
            this.personSelected = false;
        },

        toggleMenu: function(){
            this.showMenu = !this.showMenu;
        }
    },

})