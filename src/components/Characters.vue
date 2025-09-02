<script setup>
</script>
<template>
    <section class="form" id="form">
        <div class="wrapper">
            <div class="form-desc">
                <h2>Zgłoszenia postaci</h2>
                <p>Formularz zbiera preferencje klanowe i archetypy, cel postaci, granice komfortu oraz dane kontaktowe. Na podstawie zgłoszeń dopasujemy frakcje i szyte na miarę intrygi.</p>
                <div class="btns-wrapper">
                    <a class="btn btn-golden">Otwórz formularz</a>
                    <a class="btn">Co Przygotować?</a>
                </div>
            </div>
            <div class="form-details">
                <h4>Formularz zawiera</h4>
                <div class="shade-border"></div>
                <ul>
                    <li>Dane gracza i kontakt</li>
                    <li>Preferencje: klan, archetyp, rola</li>
                    <li>Krótka historia (max 10 zdań)</li>
                    <li>Cele postaci i relacje</li>
                    <li>Granice komfortu / zgody (RODO, foto)</li>
                </ul>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
    .form {
        .wrapper {
            display: flex;
            justify-content: space-between;
            .form-desc {
                h2 {
                    margin: 0 0 14px;
                }
                p {
                    margin: 1rem 0;
                }
                .btns-wrapper {
                    display: flex;
                    gap: 0 12px;
                }

            }
            .form-details {
                display: flex;
                flex-direction: column;
                gap: 14px;
                min-width: 40%;
                border: 1px solid rgba(255, 255, 255, .08);
                background: linear-gradient(180deg, rgba(255, 255, 255, .04), rgba(255, 255, 255, .02));
                border-radius: 14px;
                padding: 18px;
                .shade-border {
                    margin: 12px 0;
                }
            }
        }
    }
</style>