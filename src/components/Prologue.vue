<script setup>
</script>
<template>
    <section class="prologue" id="prologue">
        <div class="wrapper">
            <div class="prologue-desc">
                <h5>LARP - DARK AGES</h5>
                <h2>Kronika otwarta. Krew wezwana.</h2>
                <p>Mrok średniowiecza. Testament Krzywoustego rozdziera ziemię i serca. Dla ludzi – polityka. Dla nas – gra krwi. Wejdź do zamku, w którym narodzi się tajemnica <span class="italic">Panaceum</span>.</p>
                <p class="italic">„Anno Domini MCLXXXVIII… Niebo ciężkie, ziemia rozdarta. Od dnia, gdy testament Bolesława ogłoszon, Polska jednością nie jest. Ja, Skryba, zwę to Dawnych Nocy początkiem – i pergamin znaczyć będę krwią waszych czynów.”</p>
                <div class="btns-wrapper">
                    <a class="btn btn-golden">Formularz zgłoszeniowy</a>
                    <a class="btn btn-black">Czytaj więcej</a>
                </div>
            </div>
            <div class="quick-facts">
                <h4>Szybkie fakty</h4>
                <div class="shade-border"></div>
                <div class="pills-wrapper">
                    <span class="pill">Format: LARP / intryga polityczna</span>
                    <span class="pill">Język: PL</span>
                    <span class="pill">Czas: Dark Ages</span>
                </div>
                <ul>
                    <li><strong>Miejsce:</strong> Zamek Dobczyce</li>
                    <li><strong>Data:</strong> początek kwietnia 2025 (TBD)</li>
                    <li><strong>Liczba graczy:</strong> ~40</li>
                    <li><strong>Strój:</strong> historyczny / stylizowany dark-medieval</li>
                </ul>
                <div class="shade-border"></div>
                <p>*Szczegóły logistyczne i pakiety noclegowe ogłosimy po potwierdzeniu rezerwacji zamku.</p>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
.prologue {
    padding: 80px 0;
    .prologue-desc {
        h5 {
            font-family: Cinzel, serif;
            letter-spacing: 2px;
            color: #caa86a;
            text-transform: uppercase;
            font-size: 14px;
        }
        h2 {
            font-family: Cinzel, serif;
            font-size: 48px;
            margin: 8px 0 14px;
            line-height: 1.12;
        }
        p {
            max-width: 820px;
            color: var(--muted);
            font-size: 18px;
        }
        p.italic {
            margin-top: 22px;
            padding: 18px;
            border-left: 3px solid var(--accent);
            background: rgba(255, 255, 255, .03);
            border-radius: 8px;
        }
    }
    .btns-wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin-top: 18px;
    }
    .quick-facts {
        border: 1px solid rgba(255, 255, 255, .08);
        background: linear-gradient(180deg, rgba(255, 255, 255, .04), rgba(255, 255, 255, .02));
        border-radius: 14px;
        padding: 18px;
        li {
            margin: .2rem 0;
        }
    }
}
</style>