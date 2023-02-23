<template>
    <Toast />
    <div v-if="loading == false" class="length">
        <div>
            <Tag class="tag" icon="pi pi-car"
                >Numero de carros no estacionamento:</Tag
            >
            <Tag severity="success">{{ cars.length }}</Tag>
        </div>

        <form @submit="searchPlate">
            <div class="col-12 md:col-4">
                <div class="p-inputgroup">
                    <InputMask
                        placeholder="Placa"
                        mask="aaaa-9999"
                        v-model="plateSearch"
                    />
                    <Button
                        icon="pi pi-search"
                        class="p-button-warning"
                        type="submit"
                    />
                </div>
            </div>
        </form>
    </div>
    <ProgressSpinner v-if="loading" class="spinner" />
    <TableVue :cars="cars" v-else />

    <Dialog
        header="Resultado da busca"
        modal="true"
        v-model:visible="modalSearch"
    >
        <ul>
            <li><strong>Nome:</strong> {{ name }}</li>
            <li><strong>Telefone:</strong> {{ phone }}</li>
            <li><strong>Placa:</strong> {{ plate }}</li>
            <li><strong>Cpf:</strong> {{ cpf }}</li>
            <li><strong>Cor:</strong> {{ color }}</li>
            <li><strong>Password:</strong> {{ password }}</li>
            <li><strong>Data:</strong> {{ registerCar }}</li>
            <li>
                <Tag severity="success">R$ {{ payment }}</Tag>
            </li>
        </ul>
    </Dialog>
</template>

<script>
import TableVue from '../../components/table/Table.vue';

export default {
    name: 'Admin',
    components: {
        TableVue,
    },
    data() {
        return {
            cars: [],
            loading: false,
            modalSearch: false,
            plateSearch: '',
            name: '',
            plate: '',
            cpf: '',
            phone: '',
            color: '',
            password: '',
            payment: '',
            registerCar: '',
        };
    },
    mounted() {
        this.getAll();
    },
    methods: {
        async getAll() {
            this.loading = true;
            let req = await fetch('http://localhost:3500/api/user', {
                method: 'GET',
            });

            const data = await req.json();

            this.loading = false;

            this.cars = data;
        },

        async searchPlate(e) {
            e.preventDefault();

            let req = await fetch(
                `http://localhost:3500/search?plate=${this.plateSearch}`,
                {
                    method: 'GET',
                }
            );

            let data = await req.json();
            if (data.errors) {
                this.$toast.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: `Preencha o campo de busca`,
                    life: 3000,
                });
            } else if (data.Message) {
                this.$toast.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: `Nenhum carro encontrado`,
                    life: 3000,
                });
            } else if (data) {
                this.modalSearch = true;
                this.name = data.name;
                this.plate = data.plate;
                this.phone = data.phone;
                this.cpf = data.cpf;
                this.payment = data.payment;
                this.color = data.color;
                this.password = data.password;
                this.registerCar = data.registerCar;
            }
        },
    },
};
</script>

<style scoped>
.spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
}

.length {
    background-color: #dcdcdc;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.length .tag {
    margin: 0px 4px 0px 8px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS';
    font-weight: 600;
    font-size: 1rem;
}

ul {
    list-style: none;
}

ul li {
    margin: 10px 0px 0px 0px;
}

@media (max-width: 360px) {
    .length {
        height: 100px;
        display: flex;
        flex-wrap: wrap;
    }
}
</style>
