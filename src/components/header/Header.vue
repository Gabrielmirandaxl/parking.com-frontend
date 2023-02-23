<template>
    <div class="menu-burguer">
        <Button
            class="button-burguer p-button-secondary"
            icon="pi pi-bars"
            @click="burguer"
        />

        <h1 class="title">Estaciona <span>.com</span></h1>
    </div>
    <header class="header">
        <nav>
            <router-link to="/" class="link">Cadastrar veículo</router-link>
            <router-link to="/admin" class="link">Gerencia veículo</router-link>
            <router-link to="/removeCar" class="link"
                >Retirar veículo</router-link
            >
        </nav>
    </header>

    <Sidebar v-model:visible="visibleLeft">
        <nav>
            <router-link to="/" class="link">Cadastrar veículo</router-link>
            <router-link to="/admin" class="link">Gerencia veículo</router-link>
            <router-link to="/removeCar" class="link"
                >Retirar veículo</router-link
            >
        </nav>
    </Sidebar>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            visibleLeft: false,
        };
    },
    methods: {
        burguer() {
            this.visibleLeft = true;
        },
    },
};
</script>

<style scoped>
header {
    background-color: rgb(35, 126, 230);
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
}

header nav .link,
nav .link {
    margin: 0px 0px 0px 30px;
    text-decoration: none;
    background-color: #ffffffc5;
    padding: 10px 20px 10px 20px;
    border: none;
    border-radius: 10px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
        sans-serif;
    font-weight: 600;
    color: rgba(35, 126, 230, 0.781);
    transition: 400ms;
}

header nav .link:hover {
    margin: 0px 0px 0px 30px;
    text-decoration: none;
    background-color: #ffffff;
    padding: 10px 20px 10px 20px;
    border: none;
    border-radius: 10px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
        sans-serif;
    font-weight: 600;
    color: rgb(35, 126, 230);
    transition: 400ms;
}

header nav .link:nth-child(3) {
    margin: 0px 0px 0px 30px;
    text-decoration: none;
    background-color: #ff0000ab;
    padding: 10px 20px 10px 20px;
    border: none;
    border-radius: 10px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
        sans-serif;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.781);
    transition: 400ms;
}

header nav .link:nth-child(3):hover {
    margin: 0px 0px 0px 30px;
    text-decoration: none;
    background-color: #ff0000e8;
    padding: 10px 20px 10px 20px;
    border: none;
    border-radius: 10px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
        sans-serif;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.884);
    transition: 400ms;
}

.menu-burguer {
    display: none;
}

@media (max-width: 360px) {
    .header {
        display: none;
    }

    nav {
        display: flex;
        flex-direction: column;
        margin: 20px 0px 0px 0px;
    }

    nav .link {
        display: flex;
        flex-direction: column;
        margin: 20px 0px 0px 0px;
    }

    .menu-burguer {
        background-color: rgb(35, 126, 230);
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .menu-burguer button {
        margin: 10px 0px 20px 10px;
    }

    .menu-burguer .title {
        text-align: center;
        text-transform: uppercase;
        font-family: Arial, Helvetica, sans-serif;
    }

    .menu-burguer .title span {
        color: #04fd42;
    }
}
</style>
