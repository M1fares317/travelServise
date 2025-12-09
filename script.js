const destinationData = {
    paris: {
        title: "Париж, Франція: Місто Світла",
        description: "Париж, столиця Франції, відомий у всьому світі як центр мистецтва, моди, гастрономії та культури. Це ідеальне місце для романтичних прогулянок і відвідування Ейфелевої вежі, Лувру та Собору Паризької Богоматері.",
        temp: "Середня +15°C",
        time: "Квітень - Червень, Вересень - Жовтень",
        price: "від $1200"
    },
    newyork: {
        title: "Нью-Йорк, США: Місто, що ніколи не спить",
        description: "Нью-Йорк — глобальний центр фінансів, культури та медіа. Тут ви знайдете все: від височенних хмарочосів Манхеттена до затишних куточків Брукліна. Обов'язково відвідайте Таймс-сквер та Статую Свободи.",
        temp: "Середня +12°C",
        time: "Травень - Вересень",
        price: "від $1500"
    },
    tokyo: {
        title: "Токіо, Японія: Традиції та Небосхиб",
        description: "Токіо ідеально поєднує стародавні храми та футуристичні технології. Це столиця з неймовірною кухнею, динамічним життям та унікальною культурою. Досліджуйте райони Сібуя та Асакуса.",
        temp: "Середня +18°C",
        time: "Березень - Травень, Вересень - Листопад",
        price: "від $1800"
    },
    rome: {
        title: "Рим, Італія: Вічне Місто",
        description: "Рим — місто, де кожен камінь дихає історією. Колізей, Форум, Ватикан — це лише частина скарбів. Насолоджуйтесь справжньою італійською пастою та автентичною атмосферою.",
        temp: "Середня +17°C",
        time: "Березень - Травень, Вересень - Листопад",
        price: "від $1000"
    },
    bali: {
        title: "Балі, Індонезія: Острів Богів",
        description: "Балі пропонує неймовірні пляжі, рисові тераси та духовні практики. Це рай для відпочинку, йоги та серфінгу. Ідеально підходить для тих, хто шукає усамітнення та екзотики.",
        temp: "Середня +27°C",
        time: "Травень - Вересень",
        price: "від $1400"
    },
    london: {
        title: "Лондон, Велика Британія: Столиця Туманів",
        description: "Лондон відомий своїми історичними пам'ятками, як-от Біг-Бен, Тауер та Букінгемський палац. Це культурний центр з безліччю музеїв, театрів та парків.",
        temp: "Середня +11°C",
        time: "Червень - Серпень",
        price: "від $950"
    },
    dubai: {
        title: "Дубай, ОАЕ: Футуристичний Оазис",
        description: "Дубай — місто-рекордсмен. Тут розташовані найвищий хмарочос (Бурдж-Халіфа), найбільший торговий центр та штучні острови. Це місце розкоші, шопінгу та інновацій.",
        temp: "Середня +30°C",
        time: "Жовтень - Квітень",
        price: "від $1300"
    },
    prague: {
        title: "Прага, Чехія: Казкова Європа",
        description: "Прага зачаровує своєю готичною та бароковою архітектурою. Карлів міст, Празький Град і Староміська площа створюють неповторну атмосферу. Ідеально для культурного туризму.",
        temp: "Середня +10°C",
        time: "Травень - Вересень",
        price: "від $800"
    },
    kyiv: {
        title: "Київ, Україна: Серце Київської Русі",
        description: "Київ — стародавнє, але сучасне європейське місто. Золоті Ворота, Києво-Печерська Лавра та Андріївський узвіз свідчать про багату історію. Насолоджуйтесь Дніпровськими пейзажами та сучасною інфраструктурою.",
        temp: "Середня +13°C",
        time: "Травень - Вересень",
        price: "від $700"
    }
};

const modal = document.getElementById("destinationModal");
const span = document.getElementsByClassName("close-button")[0];
const buttons = document.querySelectorAll(".details-button");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalTemp = document.getElementById("modal-temp");
const modalTime = document.getElementById("modal-time");
const modalPrice = document.getElementById("modal-price");

function openModal(destinationId) {
    const data = destinationData[destinationId];
    if (data) {
        modalTitle.textContent = data.title;
        modalDescription.textContent = data.description;
        modalTemp.textContent = data.temp;
        modalTime.textContent = data.time;
        modalPrice.textContent = data.price;
        
        modal.style.display = "block";
    }
}

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const destinationBlock = this.closest('.destination');
        const destinationId = destinationBlock.getAttribute('data-destination-id');
        openModal(destinationId);
    });
});

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
