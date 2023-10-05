const grid = document.querySelector('.grid')

const characters = [
    'Daisy',
    'Luigi',
    'Mario',
    'Peach',
    'Toad',
    'Toadette'
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

const checkEndGame = () => {

    const disableCards = document.querySelectorAll('.disable-card');

    if (disableCards.length == 12) {
        alert('Parábens, você venceu o jogo! Obrigada por jogar <3')
    }

}

let firstCard = '';
let secondCard = '';

const checkCards = () => {

    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if (firstCharacter == secondCharacter) {

        firstCard.firstChild.classList.add('disable-card');
        secondCard.firstChild.classList.add('disable-card');

        firstCard = '';
        secondCard = '';

        checkEndGame();
    } else {

        setTimeout(() => {

            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = '';

        }, 600);

    }
}

const revealCard = ({ target }) => {

    if (target.parentNode.className.includes('reveal-card')) {

        return;
    }

    if (firstCard == '') {

        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;

    } else if (secondCard == '') {

        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();
    }

}


const createCard = (character) => {

    const card = createElement('div', 'card');
    const cardFront = createElement('div', 'face card-front');
    const cardBack = createElement('div', 'face card-back');

    cardFront.style.backgroundImage = `url(../imagens/${character}.jpg)`

    card.appendChild(cardFront);
    card.appendChild(cardBack);

    card.setAttribute('data-character', character);

    card.addEventListener('click', revealCard);

    return card;
}

const loadGame = () => {

    duplicateCharacters = [...characters, ...characters];

    const shuffleArray = duplicateCharacters.sort(() => Math.random() - 0.5);



    duplicateCharacters.forEach((character) => {

        const cards = createCard(character);
        grid.appendChild(cards);

    });
};

loadGame();
