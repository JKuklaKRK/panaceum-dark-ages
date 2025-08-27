<script setup>
</script>

<template>
    <Nav>
        <div class="wrapper">
            <div class="header">
                <div class="crest">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2l7 3v6c0 5-3.5 8.5-7 11-3.5-2.5-7-6-7-11V5l7-3Z" stroke="currentColor" stroke-width="1.5"></path>
                        <path d="M8 9h8M8 12h8M8 15h6" stroke="currentColor" stroke-width="1.5"></path>
                    </svg>
                </div>
                <h1>Panaceum: Dawne Noce</h1>
            </div>
            <div class="nav">
                <a href="#prologue">Prolog</a>
                <a href="#about">O grze</a>
                <a href="#plot">Fabuła</a>
                <a href="#details">Miejsce i data</a>
                <a href="#rules">Zasady</a>
                <a href="#faq">FAQ</a>
                <a href="/form" class="golden-btn">Zgłoszenia</a>
            </div>
        </div>
    </Nav>
</template>

<style lang="scss">
    nav {
        position: sticky;
        top: 0;
        display: flex;
        justify-content: center;
        .wrapper {
            .header {
                display: flex;
                align-content: center;
                gap: 0 10px;
                .crest {
                    width: 32px;
                    height: 32px;
                    border: 1px solid rgba(255, 255, 255, .3);
                    border-radius: 6px;
                    display: grid;
                    place-items: center;
                }
                h1 {
                    font-family: Cinzel, serif;
                    font-size: 18px;
                    margin: 0;
                    letter-spacing: 1px;
                }
            }
            .nav {
                display: flex;
                align-items: center;
                gap: 0 18px;
                a {
                    color: #f2efe6;
                    text-decoration: none;
                }
            }
        }
    }
</style>