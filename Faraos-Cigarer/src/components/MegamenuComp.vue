<script setup>
import { ref } from 'vue'
import comicIcon from '../assets/icons/comic-icon.svg'
import spikyIcon from '../assets/icons/spiky-icon.svg'
import animeIcon from '../assets/icons/anime-icon.svg'
import dvdIcon from '../assets/icons/dvd-icon.svg'
import bookIcon from '../assets/icons/book-icon.svg'

const isOpen = ref(false)

const toggleMenu = () => {
    isOpen.value = !isOpen.value
}

const allLists = {
    dkComics: {
        title: "DK TEGNESERIER",
        image: comicIcon,
        items: [
            { name: "Tintin", route: "/#" },
            { name: "Asterix", route: "/#" },
            { name: "Disney", route: "/#" },
            { name: "Superhelte", route: "/#" },
            { name: "Dansk Manga", route: "/#" },
            { name: "Graphic Novel", route: "/#" },
            { name: "Hugo Pratt", route: "/#" },
            { name: "Pakketilbud", route: "/#" },
            { name: "Børnebøger", route: "/#" },
            { name: "A-Z", route: "/#" }
        ]
    },
    usComics: {
        title: "US TEGNESERIER",
        image: spikyIcon,
        items: [
            { name: "Kalendere", route: "/#" },
            { name: "Spotlight", route: "/#" },
            { name: "Graphic Novels", route: "/#" },
            { name: "Marvel", route: "/#" },
            { name: "Dc", route: "/#" },
            { name: "Star Wars", route: "/#" },
            { name: "Art Books", route: "/#" },
            { name: "Humor", route: "/#" },
            { name: "Disney", route: "/#" },
            { name: "A-Z", route: "/#" }
        ]
    },
    manga: {
        title: "MANGA",
        image: animeIcon,
        items: [
            { name: "Spotlight", route: "/#" },
            { name: "Yaoi", route: "/#" },
            { name: "Yuri", route: "/#" },
            { name: "Hentai", route: "/#" },
            { name: "Art Books", route: "/#" },
            { name: "Cook Books", route: "/#" },
            { name: "How To Draw Manga", route: "/#" },
            { name: "Light Novels", route: "/#" },
            { name: "Anime", route: "/#" },
            { name: "Merchandise", route: "/#" },
            { name: "A-Z", route: "/#" }
        ]
    },
    dvd: {
        title: "DVD & FILM",
        image: dvdIcon,
        items: [
            { name: "Studio Ghibli", route: "/#" },
            { name: "Anime", route: "/#" },
            { name: "Tegnefilm", route: "/#" },
            { name: "Soundtrack", route: "/#" },
            { name: "4K Blu-Ray", route: "/#" },
            { name: "Beskyttelse", route: "/#" },
            { name: "Film & Serier", route: "/#" },
            { name: "Tintin", route: "/#" }
        ]
    },
    books: {
        title: "BØGER",
        image: bookIcon,
        items: [
            { name: "Spotlight", route: "/#" },
            { name: "Klassikere", route: "/#" },
            { name: "Gaveideer", route: "/#" },
            { name: "Star Wars", route: "/#" },
            { name: "Warhammer", route: "/#" },
            { name: "Børnebøger", route: "/#" },
            { name: "Bøger På Dansk", route: "/#" },
            { name: "A-Z", route: "/#" }
        ]
    }
}

const currentList = ref([])

const loadAllBooks = () => {
    currentList.value = Object.values(allLists)
}
</script>

<template>
    <div class="megamenu-container">
        <button class="cat-button" :class="{ 'cat-button-open': isOpen }" @click="toggleMenu">
            KATEGORIER
            <img class="cat-arrow" src="../assets/icons/arrow-vector-icon.svg" alt="arrow"
                :class="{ 'cat-arrow-open': isOpen }" />
        </button>

        <div class="decoration" :class="{ 'decoration-open': isOpen }"></div>

        <div class="megamenu" :class="{ 'megamenu-open': isOpen }">
            <div class="category-buttons">
                <button @click="loadAllBooks">BØGER & TEGNESERIER</button>
                <button @click="loadAllBooks">RETRO</button>
                <button @click="loadAllBooks">MERCHANDISE</button>
                <button @click="loadAllBooks">SPIL</button>
                <button @click="loadAllBooks">UDKLÆDNING</button>
            </div>

            <div v-if="currentList.length === 0" class="shown-message">
                <h3 class="msg-title">Hvad er du på udkig efter?</h3>
                <p class="msg-text">
                    Skal du vindues-shoppe, shop-amok eller bare smugkigge på alle vores mange
                    produkter? Så kan du klikke på kategorierne, til venstre for at finde lige netop det produkt du
                    leder efter!</p>
                <p class="msg-text"><span>"You have the high ground now" - Obi Wan Kenobi</span></p>
            </div>

            <div v-else class="category-content">
                <div v-for="category in currentList" :key="category.title" class="category-wrapper">
                    <div class="category-header">
                        <img :src="category.image" alt="" class="category-image" />
                        <h2 class="category-title">{{ category.title }}</h2>
                    </div>
                    <div class="category-links">
                        <RouterLink v-for="item in category.items" :key="item.route" :to="item.route" class="link-item">
                            {{ item.name }}
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "../assets/main.scss";

.megamenu-container {
    position: relative;
    display: inline-block;

    .cat-button {
        background-color: $color-anubis-black;
        color: $color-newspaper-white;
        border: none;
        padding: 1rem;
        font-family: $font-boogaloo;
        font-size: 1rem;
        height: 3.1rem;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 1rem;
        transition: background-color 0.1s ease;
        box-shadow: 0.3rem 0.3rem rgba(0, 0, 0, 0.25);

    }

    .cat-button-open {
        background-color: $color-pharaos-gold;
    }

    .cat-arrow {
        transform: rotate(180deg);
        transition: transform 0.3s ease;
    }

    .cat-arrow-open {
        transform: rotate(0deg);
    }

    .megamenu {
        position: absolute;
        top: 120%;
        width: 100vw;
        margin-left: -2rem;
        background-color: $color-pharaos-gold;
        transform: scaleY(0);
        transform-origin: top;
        transition: transform 0.3s ease;
        opacity: 0;
        z-index: 100;
        display: flex;
        gap: 1rem;

        .shown-message {
            padding: 2rem;
            margin: 2rem;
            margin-left: 0;
            background-color: $color-anubis-black;
            color: $color-newspaper-white;

            .msg-title {
                font-family: $font-boogaloo;
                font-weight: normal;
                font-size: 3rem;
                color: $color-pharaos-gold;
                margin-bottom: 2rem;
            }

            .msg-text {
                color: $color-newspaper-white;
                font-size: 1.2rem;
                font-family: $font-play;

                span {
                    font-style: italic;
                    font-family: $font-play;
                    opacity: 0.5;
                }
            }

            .msg-text:last-of-type {
                margin-top: 1rem;
            }

        }

        .category-buttons {
            padding: 2rem;
            padding-right: 0;
            display: flex;
            flex-direction: column;
            width: 25%;
            gap: 1rem;

            button {
                box-shadow: 0.3rem 0.3rem rgba(0, 0, 0, 0.25);
                background-color: $color-anubis-black;
                color: $color-newspaper-white;
                padding: 1rem;
                font-family: $font-boogaloo;
                text-transform: uppercase;
                font-size: 1.2rem;
                border: none;
            }

            button:hover {
                background-color: $color-newspaper-white;
                color: $color-tactical-blue;
            }
        }

    }

    .megamenu-open {
        transform: scaleY(1);
        opacity: 1;
        box-shadow: 0rem 0.3rem rgba(0, 0, 0, 0.25);
    }

    .decoration {
        display: none;
        background-color: #efd17a;
        width: 8.9rem;
        height: 2rem;
        position: absolute;
        box-shadow: 0.3rem 0.3rem rgba(0, 0, 0, 0.25);
    }

    .decoration-open {
        display: block;
        transform: scaleY(1);
        transition: transform 0.1s ease;
    }

    .category-content {
        width: auto;
        padding: 2rem;
        padding-left: 1rem;
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
    }

    .category-wrapper {
        box-shadow: 0.3rem 0.3rem rgba(0, 0, 0, 0.25);
        background-color: $color-newspaper-white;
        width: 11rem;
    }

    .category-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: $color-anubis-black;
        padding: 0.5rem;

        .category-image {
            width: auto;
            height: 3.5rem;
            object-fit: contain;
            margin-bottom: 0.5rem;
        }

        .category-title {
            padding: 0;
            margin: 0;
            font-size: 1.5rem;
            -webkit-text-stroke: 0;
            font-family: $font-boogaloo;
        }
    }

    .category-links {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 1rem;

        .link-item {
            color: $color-anubis-black;
            font-size: 0.8rem;
            text-decoration: none;
            font-family: $font-play;
            text-transform: capitalize;

            &:hover {
                text-decoration: underline;
                color: $color-tactical-blue;
            }
        }
    }

}
</style>