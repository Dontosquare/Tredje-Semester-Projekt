<script setup>



</script>

<template>
    <footer>
        <div class="footer-lists">
            <div class="footer-lists--toggle">
                <h3>BUTIKKER</h3>
                <img src="../assets/icons/arrow-vector.svg" alt="ikon af en knap som er toggle">
            </div>
            <ul class="footer-lists__menu">
                <li>
                    <RouterLink class="footer-lists__menu--links" to="#">Åbningstider</RouterLink>
                </li>
                <li>
                    <RouterLink class="footer-lists__menu--links" to="#">Lokationer</RouterLink>
                </li>
                <li>
                    <RouterLink class="footer-lists__menu--links" to="#">Faraos Cigarer Online</RouterLink>
                </li>
                <li>
                    <RouterLink class="footer-lists__menu--links" to="#">Aktiviteter</RouterLink>
                </li>
                <li>
                    <RouterLink class="footer-lists__menu--links" to="#">Kalender</RouterLink>
                </li>
            </ul>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@import '../assets/main.scss';

footer {
    background-color: $color-anubis-black;
    width: 100%;

    .footer-lists {

        .footer-lists--toggle {
            display: flex;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            
            h3 {
                font-family: $font-boogaloo;
                color: $color-newspaper-white;
                font-size: 1.5rem;
                letter-spacing: 1.5px;
            }
        }
        
        .footer-lists__menu {
            padding: 1rem 2rem;
            
            li {
                margin-bottom: 1rem;

                .footer-lists__menu--links {
                    text-decoration: none;
                    font-family: $font-play;
                    color: $color-newspaper-white;
                    font-size: 1.3rem;
                }
            }

            li:last-child {
                margin-bottom: 0rem;
            }
        }
    }
}
</style>