<script setup>
</script>
<template>
    <section class="prologue" id="prologue">
        <div class="wrapper">
            <div class="prologue-desc">
                <h5>Panaceum: Dawne Noce</h5>
                <h2>Przebudzenie Dragosa</h2>
                <p>„Gdy kruki krążyły nad kurhanami, a ogień płonął w świętych gajach, nie było jeszcze królów ni biskupów. Był tylko on – Voivoda Dragos. Pan ziemi, która rodziła się w mroku, karmiciel krwią, strażnik tajemnic, których boją się nawet bogowie..</p>
                <p class="italic">Jest rok 966. Mieszko przyjmuje chrzest i otwiera bramy nowej wiary. Ziemia, która przez pokolenia znała tylko duchy przodków i ofiary w dymie, przyjmuje Boga z Zachodu.
                    Dla ludzi – to początek państwa polskiego.
                    Dla Dzieci Nocy – bluźnierstwo i zdrada dawnych układów.
                    W tej godzinie przebudza się Dragos, prastary Voivoda Tzimisce. Jego ciało spoczywało w kurhanach, a teraz oczy otwierają się, by dostrzec świat odmieniony. Nie ufa nowemu porządkowi. Nie zna krzyża ani władzy papieża. Chce wiedzieć, co uczyniono z jego ziemiami.
                    Dlatego wzywa was – Dzieci Nocy, przybyszów i potomków, książąt i heretyków. Każdy, kto nazywa się nieśmiertelnym, musi stanąć przed obliczem Dragosa i zdać świadectwo. Nie będzie litości dla kłamców. Nie będzie łaski dla tchórzy.
                    To pierwsze Przebudzenie. Audiencja u Voivody. Sąd nad waszą lojalnością i przyszłością tych ziem. Przygotujcie się. Dragos pyta. A jego pytania są jak miecz – rozcinają krew, kości i dusze.
                </p>
                <div class="btns-wrapper">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeJzyv0oOOx6CGzArN1ki2pVyAhMSoV0JHHAjHiAKh9dW7lHg/viewform" target="_blank" class="btn btn-golden">Formularz zgłoszeniowy</a>
                    <a class="btn btn-black">Czytaj więcej</a>
                </div>
            </div>
            <div class="right-side prologue-right-side">
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
                        <li><strong>Planowane 10 odsłon larpa</strong></li>
                        <li><strong>Mapa zamku:</strong> <a href="https://zamkomania.pl/foto6/dobczyce-pa.jpg" target="_blank">Kliknij tu</a></li>
                    </ul>
                    <div class="shade-border"></div>
                    <p>*Szczegóły logistyczne i pakiety noclegowe ogłosimy po potwierdzeniu rezerwacji zamku.</p>
                </div>
                <img src="../assets/img/swinia1.png"/>
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
            text-align: justify;
        }
        p.italic {
            margin-top: 22px;
            padding: 18px;
            border-left: 3px solid var(--accent);
            background: rgba(255, 255, 255, .03);
            border-radius: 8px;
        }
    }
    .prologue-right-side {
        width: 50%;
        img {
            width: 100%;
            margin: 20px 0 0;
            border-radius: 10px;
            box-shadow: 0px 0px 6px 1px rgba(255, 255, 255, 0.1);
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